import {
  FilterState,
  SearchState,
} from "@/components/page-components/doctors/search-filter/SearchAndFilters";

// New file: utils/searchAnalytics.ts
export const trackSearch = async (
  searchData: SearchState,
  filterData: FilterState,
) => {
  try {
    await fetch("/api/analytics/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: searchData.query,
        location: searchData.location,
        filters: filterData,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Failed to track search:", error);
  }
};
