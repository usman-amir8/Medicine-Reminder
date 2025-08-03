export type FormType = {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  startDate: Date;
  times: string[];
  notes: string;
  reminderEnabled: boolean;
  refillReminder: boolean;
  currentSupply: string;
  refillAt: string;
};
