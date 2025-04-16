export type Prescription = {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  disease?: string;
  labReportRequired?: boolean;
};
