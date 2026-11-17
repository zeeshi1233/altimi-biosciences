export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  venue?: string;
  badge?: string;
  description: string;
  image: string;
  images: string[];
  link?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "randox-opening",
    title: "Randox Opening & Clinical Diagnostics Launch",
    date: "November 2026",
    location: "Karachi, Pakistan",
    venue: "Marriott Hotel Karachi",
    badge: "Official Launch",
    description:
      "We celebrated the grand opening and official introduction of Randox clinical chemistry solutions with healthcare leaders, clinical pathologists, international delegates, and honored guests.",
    image: "/images/events/randox-opening/photo-10.jpg",
    images: [
      "/images/events/randox-opening/photo-10.jpg",
      "/images/events/randox-opening/photo-8.jpg",
      "/images/events/randox-opening/photo-9.jpg",
      "/images/events/randox-opening/photo-4.jpg",
      "/images/events/randox-opening/photo-1.jpg",
      "/images/events/randox-opening/photo-6.jpg",
      "/images/events/randox-opening/photo-5.jpg",
      "/images/events/randox-opening/photo-7.jpg",
      "/images/events/randox-opening/photo-3.jpg",
      "/images/events/randox-opening/photo-2.jpg",
    ],
    link: "#",
  },
];
