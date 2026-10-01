export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  service: string;
  quote: string;
  highlight: string;
  durationTogether: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Ananya M.",
    location: "Mumbai",
    service: "Tarot Card Reading",
    quote: "Dr. Srushti didn't just read cards; she pinpointed the exact emotional knot I couldn't articulate for months. Leaving the session felt like a physical weight lifted off my chest.",
    highlight: "Clarity within minutes",
    durationTogether: "Client for 3 Years"
  },
  {
    id: "test-2",
    clientName: "Devika & Rohan",
    location: "Delhi NCR",
    service: "Energy Healing & Crystals",
    quote: "Our home atmosphere completely shifted after placing Dr. Srushti's curated crystal arrangements and doing a personal energy cleanse. The peace is palpable.",
    highlight: "A peaceful sanctuary",
    durationTogether: "Client for 5 Years"
  },
  {
    id: "test-3",
    clientName: "Pooja K.",
    location: "Bengaluru",
    service: "Nazar Salt & Guidance",
    quote: "Her Nazar protection bath salts have become my non-negotiable Sunday ritual. The warmth, compassion and calm she emanates is rare and deeply genuine.",
    highlight: "Pure sacred groundedness",
    durationTogether: "Client for 2 Years"
  },
  {
    id: "test-4",
    clientName: "Meera S.",
    location: "London, UK",
    service: "Online Tarot Consultation",
    quote: "Even over a virtual session across continents, her accuracy and gentle guidance felt like having a wise elder sister sitting right in front of me.",
    highlight: "Uncannily accurate",
    durationTogether: "Client for 4 Years"
  }
];
