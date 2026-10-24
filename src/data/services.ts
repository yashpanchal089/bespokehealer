import tarotCardReadingImg from '../assets/tarot-reading-full.jpg';
import crystalsImg from '../assets/crystals-collection.jpg';

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription?: string;
  description: string;
  duration: string;
  price: string;
  featured: boolean;
  editorialHighlight?: string;
  whatsappMessage?: string;
  features?: string[];

  // Extended details for dedicated details page
  subtitle?: string;
  tagline?: string;
  philosophyTitle?: string;
  philosophy?: string[];
  benefits?: ServiceBenefit[];
  processSteps?: ServiceStep[];
  whoIsThisFor?: string[];
  whatIsIncluded?: string[];
  faqs?: ServiceFaq[];
  idealFrequency?: string;
  sessionMode?: string;
  imagePosition?: string;
}

export const servicesData: Service[] = [
  {
    id: "tarot-reading",
    name: "Tarot Card Reading",
    slug: "tarot-card-reading",
    image: tarotCardReadingImg,
    shortDescription: "",
    description: "An intuitive 1-on-1 dialogue with the archetypes. We illuminate your current crossroads, reveal hidden emotional patterns, and find grounded spiritual clarity for love, career, and personal transition.",
    duration: "60 Minutes",
    price: "₹2,000",
    featured: true,
    editorialHighlight: "Signature Guidance",
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to book a 60-Minute Tarot Card Reading session. Please share available slots.",
    features: [
      "1-on-1 intuitive dialogue with Tarot archetypes",
      "Grounded clarity for love, career & pivotal crossroads",
      "Uncover emotional patterns & receive future direction"
    ],
    // subtitle: "Sacred Mirror of the Soul & Archetypal Wisdom",
    tagline: "Move from uncertainty into grounded clarity, purpose and peace.",
    sessionMode: "Private Video Call (Zoom / Google Meet) or In-Person Sanctuary",
    idealFrequency: "Every 2–3 months or whenever approaching a major life crossroads",
    philosophy: [
      "Tarot is far more than fortune-telling; it is a sacred energetic mirror that reflects your subconscious mind, emotional undercurrents, and the universal forces shaping your current reality."
    ],
    benefits: [
      {
        title: "Deep Emotional Clarity",
        description: ""
      },
      {
        title: "Crossroads Guidance",
        description: ""
      },
      {
        title: "Understanding Your Relationships",
        description: ""
      },
      {
        title: "Empowering Action Plan",
        description: ""
      }
    ],

    whatIsIncluded: [
      "Unlimited questions for 60 mins",
      "Questions can be asked related to one person only.",
      "Personalized solutions will be provided."
    ]
  },
  {
    id: "energy-healing",
    name: "Energy Healing",
    slug: "energy-healing",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    description: "Gentle vibrational restoration working with chakra clearing, sacred breath, and auric cord-cutting to dissolve lingering heaviness and realign your body's subtle bio-field.",
    duration: "30 Minutes",
    price: "₹1,000",
    featured: false,
    editorialHighlight: "Deep Restoration",
    whatsappMessage: "Hi Dr. Srushti 👋 I am interested in an Energy Healing session. Please let me know your consultation schedule.",
    features: [
      "Gentle vibrational bio-field restoration & balance",
      "Chakra clearing, sacred breath & energetic cord-cutting",
      "Dissolve lingering heaviness & restore inner harmony"
    ],
    tagline: "Release accumulated heaviness and awaken your natural state of peace.",
    sessionMode: "Distance Energy Session (Remote Video / Audio) or In-Person Sanctuary",
    idealFrequency: "Monthly maintenance or whenever recovering from high stress and emotional burnout",
    philosophy: [
      "Everything in our life experience—emotional grief, workplace stress, physical exhaustion, and toxic environments—leaves an imprint on our subtle energy centers (chakras) and surrounding auric field.",
      "Energy Healing is a restorative holistic modality that channels high-frequency life-force energy (Prana) to dissolve energetic blockages, Disconnect negative energy cords, and restore your natural harmony."
    ],
    whoIsThisFor: [
      "Anyone suffering from persistent exhaustion, chronic stress, or emotional burnout",
      "Empaths and sensitive individuals who absorb negative energies from their surroundings",
      "People recovering from heartbreak, grief, divorce, or heavy relationship dynamics",
      "Those who feel physically well but spiritually depleted or disconnected from vitality"
    ],
    whatIsIncluded: [
      "Complete aura cleansing",
      "Activating your chakras",
      "Remove negative cords (nazar)",
      "Simple remedies to stay protected"
    ]
  },
  {
    id: "crystals-guidance",
    name: "Crystals",
    slug: "crystals",
    image: crystalsImg,
    imagePosition: "object-[center_35%]",
    shortDescription: "Attune to the sacred energy of healing crystals.",
    description: "Personalized crystal pairing attuned to your unique energetic vibration, astrological blueprint, and chakra centers. Handpicked, authentic gemstones intuitively selected and energetically cleansed to ground inner peace, dissolve negative blockages, and amplify your highest intentions.",
    duration: "Personalised",
    price: "Custom",
    featured: false,
    editorialHighlight: "Sacred Crystals",
    whatsappMessage: "Hi Dr. Srushti 👋 I would like a personalized Crystal consultation to discover the right healing gemstones for my journey.",
    features: [
      "Personalized crystal pairing for your unique frequency & aura",
      "Authentic, handpicked gemstones energetically cleansed",
      "Dissolve blockages and ground peace, wealth & intention"
    ],
    subtitle: "Sacred Earth Gemstone Pairing & Energetic Consecration",
    tagline: "Harness stable, primordial earth frequencies to anchor peace and abundance.",
    sessionMode: "Personalized Consultation via WhatsApp / Video Call + Secure Delivery",
    idealFrequency: "One-time consultation with stones providing lifelong energetic support",
    philosophyTitle: "What are Crystals?",
    philosophy: [
      "Formed over millions of years through the natural forces of the Earth, crystals are treasured for their unique structures and their significance in holistic healing. In the world of energy healing, crystals are believed to hold their own vibrational energy and interact with the subtle energies around us.",
      "They are used to absorb, store, focus and channel energy, supporting our journey towards emotional balance, inner healing and manifestation. Beyond their beauty, crystals can serve as powerful tools for self-awareness, helping us recognise limiting beliefs, recurring patterns and emotional blocks that may be holding us back.",
      "At Bespoke Healer, we believe crystals can be meaningful companions on your journey of healing, transformation and intentional living — helping you reconnect with yourself and create space for the life you wish to manifest."
    ],
    whatIsIncluded: [
      "Personalized 1-on-1 crystal guidance consultation with Dr. Srushti Garg",
      "Step-by-step guidebook on how to cleanse, recharge, and wear your stones",
      "Secure, protective luxury packaging dispatched with tracking across India",
      "Direct guidance on crystal placement for home, bedroom, and workstation"
    ]
  }
];
