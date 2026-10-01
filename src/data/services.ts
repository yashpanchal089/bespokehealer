export interface Service {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  featured: boolean;
  editorialHighlight?: string;
  whatsappMessage?: string;
}

export const servicesData: Service[] = [
  {
    id: "tarot-reading",
    name: "Tarot Card Reading",
    slug: "tarot-card-reading",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Clarity when you need it most.",
    description: "An intuitive 1-on-1 dialogue with the archetypes. We illuminate your current crossroads, reveal hidden emotional patterns, and find grounded spiritual clarity for love, career, and personal transition.",
    duration: "60 Minutes",
    price: "₹2,000",
    featured: true,
    editorialHighlight: "Signature Guidance",
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to book a 60-Minute Tarot Card Reading session. Please share available slots."
  },
  {
    id: "energy-healing",
    name: "Energy Healing",
    slug: "energy-healing",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Reconnect. Rebalance. Restore.",
    description: "Gentle vibrational restoration working with chakra clearing, sacred breath, and auric cord-cutting to dissolve lingering heaviness and realign your body's subtle bio-field.",
    duration: "60 Minutes",
    price: "₹2,000",
    featured: false,
    editorialHighlight: "Deep Restoration",
    whatsappMessage: "Hi Dr. Srushti 👋 I am interested in an Energy Healing session. Please let me know your consultation schedule."
  },
  {
    id: "crystals-guidance",
    name: "Crystals",
    slug: "crystals",
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Attune to the sacred energy of healing crystals.",
    description: "Personalized crystal pairing attuned to your unique energetic vibration, astrological blueprint, and chakra centers. Handpicked, authentic gemstones intuitively selected and energetically cleansed to ground inner peace, dissolve negative blockages, and amplify your highest intentions.",
    duration: "Personalised",
    price: "Custom",
    featured: false,
    editorialHighlight: "Sacred Crystals",
    whatsappMessage: "Hi Dr. Srushti 👋 I would like a personalized Crystal consultation to discover the right healing gemstones for my journey."
  }
];
