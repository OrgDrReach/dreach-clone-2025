export const bloodGroupMapping: Record<string, string> = {
    "A+": "A_POSITIVE",
    "A-": "A_NEGATIVE",
    "B+": "B_POSITIVE",
    "B-": "B_NEGATIVE",
    "AB+": "AB_POSITIVE",
    "AB-": "AB_NEGATIVE",
    "O+": "O_POSITIVE",
    "O-": "O_NEGATIVE",
  };
  
  /**
   * Maps a user-friendly blood group value to the backend-compatible enum value.
   * @param bloodGroup - The user-friendly blood group value (e.g., "A+").
   * @returns The backend-compatible enum value (e.g., "A_POSITIVE") or undefined if invalid.
   */
  export const mapBloodGroup = (bloodGroup?: string): string | undefined => {
    return bloodGroup ? bloodGroupMapping[bloodGroup] : undefined;
  };