export interface FAQItem {
  id: string;
  category: 'sessions' | 'shop';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  // ================= 5 Balanced Session Questions =================
  {
    id: "faq-session-1",
    category: "sessions",
    question: "What happens during a Tarot or Healing session?",
    answer: "A confidential 1-on-1 dialogue. We center your energy, focus on key areas (love, career, transitions), and unveil clear intuitive patterns, root causes, and practical next steps."
  },
  {
    id: "faq-session-2",
    category: "sessions",
    question: "How long is a session and what is the fee?",
    answer: "Standard 1-on-1 consultations run for 60 minutes at ₹2,000. It is an unhurried, private sanctuary tailored completely to your questions and emotional alignment."
  },
  {
    id: "faq-session-3",
    category: "sessions",
    question: "Can sessions be conducted online or remotely?",
    answer: "Yes, absolutely. Over 70% of clients consult via Google Meet, Zoom, or WhatsApp video call. Energetic resonance and clarity transcend physical distance with identical potency."
  },
  {
    id: "faq-session-4",
    category: "sessions",
    question: "How do I book or reschedule my appointment?",
    answer: "Tap 'Book Now' or reach out directly on WhatsApp. One-time rescheduling is easily accommodated with at least 24 hours prior notice before your confirmed slot."
  },
  {
    id: "faq-session-5",
    category: "sessions",
    question: "How should I prepare before attending my session?",
    answer: "Find a quiet, comfortable space where you won't be interrupted. Have water nearby, take a few deep breaths, and come with an open heart ready for clarity."
  },

  // ================= 5 Balanced Shop & Crystal Questions =================
  {
    id: "faq-shop-1",
    category: "shop",
    question: "How do I purchase crystals that suit my energy?",
    answer: "Explore our Boutique catalog or message on WhatsApp. Dr. Srushti provides intuitive guidance to match authentic gemstones to your aura, astrology, and intentions."
  },
  {
    id: "faq-shop-2",
    category: "shop",
    question: "How are the crystals cleansed and consecrated?",
    answer: "Every piece is 100% natural earth crystal, cleansed with moonlight, smudged with sacred herbs, and energetically blessed by Dr. Srushti prior to dispatch."
  },
  {
    id: "faq-shop-3",
    category: "shop",
    question: "How do I order energized botanical bath salts?",
    answer: "Select your desired blend (Love, Stress Release, Nazar, or Daily Detox) and tap 'Enquire on WhatsApp'. We blend fresh small batches with pan-India dispatch."
  },
  {
    id: "faq-shop-4",
    category: "shop",
    question: "Do you offer space cleansing guidance for homes?",
    answer: "Yes. Dr. Srushti provides custom energetic space assessments using specific crystals, sacred wall hangings, and cleansing protocols for living and work environments."
  },
  {
    id: "faq-shop-5",
    category: "shop",
    question: "What is the policy for safe delivery & returns?",
    answer: "All items are packed securely in consecrated protective wrapping with tracking across India. For returns or replacements, an uncut unboxing parcel video is required."
  }
];
