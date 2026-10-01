export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What happens during a Tarot session?",
    answer: "A warm, confidential 1-on-1 dialogue. We ground the energy, focus on your key life areas (relationships, career, personal transition), and lay out the cards to unveil hidden dynamics and practical next steps."
  },
  {
    id: "faq-2",
    question: "How long is a session and what is the fee?",
    answer: "Standard personal sessions run for 60 Minutes at ₹2,000. It is a dedicated, unhurried space tailored entirely to your questions and emotional alignment."
  },
  {
    id: "faq-3",
    question: "Can sessions be conducted online?",
    answer: "Yes, absolutely. Over 70% of Dr. Srushti's international and pan-India clients consult over high-definition Google Meet, Zoom, or WhatsApp video call. Energy knows no geographic boundaries."
  },
  {
    id: "faq-4",
    question: "How do I book a session?",
    answer: "Simply tap 'Book a Session' or connect directly via WhatsApp. You can pick your preferred date and time, and our team will confirm your dedicated slot within a few hours."
  },
  {
    id: "faq-5",
    question: "How do I purchase crystals and ensure they suit me?",
    answer: "Browse our crystal catalog on the Shop page and click 'Enquire on WhatsApp'. Dr. Srushti personally cleanses and energizes each crystal before dispatch to match your individual aura and intention."
  },
  {
    id: "faq-6",
    question: "How do I order bath salts?",
    answer: "Select your desired botanical blend (Love, Stress Release, Nazar, or Daily Detox) and tap 'Enquire on WhatsApp'. We package freshly hand-blended organic batches with domestic delivery across India."
  },
  {
    id: "faq-7",
    question: "Do you provide personal guidance for crystals and space cleansing?",
    answer: "Yes. Dr. Srushti provides custom energetic space assessments using specific healing crystals, sacred wall hangings, and sound/smoke cleansing protocols to uplift living and work spaces."
  }
];
