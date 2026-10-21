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
  shortDescription: string;
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
    shortDescription: "Reconnect. Rebalance. Restore.",
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
    subtitle: "Bio-Field Realignment, Chakra Cleansing & Pranic Renewal",
    tagline: "Release accumulated heaviness and awaken your natural state of peace.",
    sessionMode: "Distance Energy Session (Remote Video / Audio) or In-Person Sanctuary",
    idealFrequency: "Monthly maintenance or whenever recovering from high stress and emotional burnout",
    philosophy: [
      "Everything in our life experience—emotional grief, workplace stress, physical exhaustion, and toxic environments—leaves an imprint on our subtle energy centers (chakras) and surrounding auric field.",
      "Energy Healing is a restorative holistic modality that channels high-frequency life-force energy (Prana) to dissolve energetic blockages, sever draining psychic cords, and restore your natural harmony."
    ],
    benefits: [
      {
        title: "Deep Nervous System Relief",
        description: "Shifts your physiology from chronic fight-or-flight into deep, nourishing parasympathetic relaxation."
      },
      {
        title: "7-Chakra Balancing",
        description: "Clears congested vortices from Root to Crown, allowing your life force to circulate freely and vibrantly."
      },
      {
        title: "Auric Cord-Cutting",
        description: "Gently detaches draining emotional cords connected to past partners, stressful jobs, or energetic vampires."
      },
      {
        title: "Lighter, Luminous State",
        description: "Clients consistently report feeling noticeably lighter, mentally unburdened, and deeply refreshed."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Bio-Field Diagnostic Scan",
        description: "Dr. Srushti intuitively scans your aura to pinpoint depleted, congested, or over-active energy centers."
      },
      {
        step: "02",
        title: "Pranic Breath & Grounding",
        description: "Gentle guided breathwork settles your physical body into a serene meditative receptive state."
      },
      {
        step: "03",
        title: "Chakra Clearing & Cord Severing",
        description: "Targeted vibrational clearing to lift dense energetic debris and disconnect toxic attachments."
      },
      {
        step: "04",
        title: "Aura Sealing & Harmonization",
        description: "Sealing your energetic shield with positive frequencies, safeguarding your vitality for weeks ahead."
      }
    ],
    whoIsThisFor: [
      "Anyone suffering from persistent exhaustion, chronic stress, or emotional burnout",
      "Empaths and sensitive individuals who absorb negative energies from their surroundings",
      "People recovering from heartbreak, grief, divorce, or heavy relationship dynamics",
      "Those who feel physically well but spiritually depleted or disconnected from vitality"
    ],
    whatIsIncluded: [
      "30-Minute comprehensive energetic diagnostic and restoration session",
      "Full 7-chakra scanning report with personalized balancing observations",
      "Targeted auric cord detachment and energetic cleansing ritual",
      "Take-home daily grounding & psychic protection practices",
      "Nutritional and herbal hydration recommendations for energetic integration"
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
    philosophy: [
      "Formed over millions of years under immense tectonic heat and pressure, natural crystals possess an immutable, orderly atomic lattice. When introduced to our bio-magnetic field, they act as stable tuning forks—entraining our fluctuating vibrations back to harmony.",
      "Rather than choosing generic stones based on guesswork, Dr. Srushti offers an intentional, personalized crystal prescription based on your astrological blueprint, current challenges, and personal manifestation goals."
    ],
    benefits: [
      {
        title: "Authentic Earth Frequency",
        description: "100% genuine, ethically sourced, unheated natural stones with verifiable energetic potency."
      },
      {
        title: "Customized Stone Prescription",
        description: "Gemstones matched specifically to your astrological planetary periods, chakras, and aspirations."
      },
      {
        title: "Consecrated & Blessed",
        description: "Every crystal is cleansed under moonlight, smudged with sacred herbs, and energetically activated by Dr. Srushti."
      },
      {
        title: "Sacred Space Harmonization",
        description: "Clear guidelines on placing stones in your home or office to transmute negative environmental stress."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Vibrational Assessment",
        description: "We understand your personal challenges, current life goals, and emotional/spiritual needs."
      },
      {
        step: "02",
        title: "Intuitive Gemstone Selection",
        description: "Dr. Srushti handpicks specific crystals—bracelets, raw clusters, tumbles, or sacred spheres—attuned to you."
      },
      {
        step: "03",
        title: "Consecration & Cleansing Ritual",
        description: "Each chosen piece undergoes authentic Vedic cleansing, moonlight charging, and energetic programming."
      },
      {
        step: "04",
        title: "Care Guide & Safe Dispatch",
        description: "Delivered securely to your doorstep across India, accompanied by personalized usage and recharging rituals."
      }
    ],
    whoIsThisFor: [
      "Seekers looking for authentic, natural crystals without fear of counterfeit or dyed imitations",
      "Individuals wanting energetic protection against negative eyes (Nazar), stress, or psychic drain",
      "Professionals and business owners seeking stones for prosperity, mental focus, and confidence",
      "Anyone desiring a tangible, sacred daily reminder of their highest spiritual intentions"
    ],
    whatIsIncluded: [
      "Personalized 1-on-1 crystal guidance consultation with Dr. Srushti Garg",
      "Handpicked selection of consecrated natural gemstones attuned to your blueprint",
      "Step-by-step guidebook on how to cleanse, recharge, and wear your stones",
      "Secure, protective luxury packaging dispatched with tracking across India",
      "Direct guidance on crystal placement for home, bedroom, and workstation"
    ]
  }
];
