export interface TimelineEvent {
  id: string;
  date: Date;
  type: 'condition' | 'surgery' | 'vaccination' | 'diagnosis' | 'recovery';
  title: string;
  description: string;
  doctor?: string;
  facility?: string;
}

export interface Condition {
  id: string;
  name: string;
  diagnosedDate: Date;
  status: 'active' | 'resolved' | 'managed';
  treatingPhysician: string;
  notes?: string;
}

export interface Vaccination {
  id: string;
  name: string;
  date: Date;
  dueDate?: Date;
  administrator: string;
  facility: string;
  batchNumber?: string;
  notes?: string;
}

export interface FamilyCondition {
  id: string;
  condition: string;
  relationship: string;
  diagnosedAge?: number;
  notes?: string;
}

export interface Allergy {
  id: string;
  allergen: string;
  severity: 'mild' | 'moderate' | 'severe';
  reactions: string[];
  diagnosedDate: Date;
  notes?: string;
}

export interface Surgery {
  id: string;
  procedure: string;
  date: Date;
  surgeon: string;
  facility: string;
  outcome: string;
  complications?: string[];
  notes?: string;
}

export interface ChronicCondition {
  id: string;
  name: string;
  diagnosedDate: Date;
  status: 'controlled' | 'uncontrolled' | 'improving' | 'worsening';
  medications: string[];
  treatingPhysician: string;
  lastAssessment: Date;
  nextReview?: Date;
  notes?: string;
}