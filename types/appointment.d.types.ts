export interface Appointment {
  id: string;
  patientId: string;
  providerId: string;
  providerType: ProviderType;
  dateTime: Date;
  status: EAppointmentStatus;
  mode: EAppointmentMode;
  reason?: string;
  notes?: string;
  payment?: PaymentInfo;
}

interface PaymentInfo {
  amount: number;
  status: EPaymentStatus;
  method?: string;
  transactionId?: string;
}

export enum EAppointmentStatus {
  SCHEDULED = "SCHEDULED",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  NO_SHOW = "NO_SHOW",
}

export enum EAppointmentMode {
  IN_PERSON = "IN_PERSON",
  VIDEO = "VIDEO",
  HOME_VISIT = "HOME_VISIT",
}

export enum EPaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
}
