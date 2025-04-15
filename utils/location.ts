export interface LocationData {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

const LOCATION_CACHE_KEY = "user_location";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function getUserLocation(): Promise<LocationData> {
  try {
    // Try IP geolocation first as it's more reliable
    const ipResponse = await fetch(
      "https://api.ipapi.com/api/check?access_key=YOUR_API_KEY",
    );
    const ipData = await ipResponse.json();

    if (ipData.city) {
      const locationData = {
        city: ipData.city,
        state: ipData.region_name,
        country: ipData.country_name,
        latitude: ipData.latitude,
        longitude: ipData.longitude,
      };

      // Cache the successful result
      localStorage.setItem(
        LOCATION_CACHE_KEY,
        JSON.stringify({
          data: locationData,
          timestamp: Date.now(),
        }),
      );

      return locationData;
    }

    // Fallback to browser geolocation
    if ("geolocation" in navigator) {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          });
        },
      );

      // Use OpenStreetMap's Nominatim for reverse geocoding (free, no API key needed)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": "DrReach App", // Required by Nominatim
          },
        },
      );

      const data = await response.json();

      const locationData = {
        city:
          data.address.city || data.address.town || data.address.village || "",
        state: data.address.state || "",
        country: data.address.country || "",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      // Cache the successful result
      localStorage.setItem(
        LOCATION_CACHE_KEY,
        JSON.stringify({
          data: locationData,
          timestamp: Date.now(),
        }),
      );

      return locationData;
    }

    throw new Error("Geolocation not supported");
  } catch (error) {
    console.error("Location detection failed:", error);

    // Try to get cached location as last resort
    const cached = localStorage.getItem(LOCATION_CACHE_KEY);
    if (cached) {
      const { data } = JSON.parse(cached);
      return data;
    }

    // Return a default location if everything fails
    return {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      latitude: 19.076,
      longitude: 72.8777,
    };
  }
}
