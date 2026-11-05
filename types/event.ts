export interface MedicalEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  category: "Exhibition" | "Symposium" | "Workshop" | "Conference";
  description: string;
  image: string;
  booth?: string;
  status: "Upcoming" | "Completed";
}

