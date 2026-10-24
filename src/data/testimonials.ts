import feedback1Video from '../assets/feedback_1-compressed.mp4';
import feedback1Thumb from '../assets/feedback_1_thumb.jpg';
import feedback2Video from '../assets/feedback_2-compressed.mp4';
import feedback2Thumb from '../assets/feedback_2_thumb.jpg';
import feedback3Video from '../assets/feedback_3-compressed.mp4';
import feedback3Thumb from '../assets/feedback_3_thumb.jpg';
import feedback4Video from '../assets/feedback_4-compressed.mp4';
import feedback4Thumb from '../assets/feedback_4_thumb.jpg';
import feedbackSirenderImg from '../assets/feedback_sirender.png';
import feedbackTarotGratitudeImg from '../assets/feedback_tarot_gratitude.png';
import feedbackAnanyaImg from '../assets/feedback_ananya.png';
import feedbackRimaJoshiImg from '../assets/feedback_rima_joshi.png';

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  service: string;
  quote: string;
  highlight: string;
  durationTogether: string;
  mediaType?: 'text' | 'video' | 'image';
  videoUrl?: string;
  imageUrl?: string;
  posterUrl?: string;
  rating?: number;
}

// 1:1 alternating sequence: Video -> Image -> Video -> Image -> Video -> Image -> Video -> Image
export const testimonialsData: Testimonial[] = [
  {
    id: "test-video-1",
    clientName: "Rahul & Corporate Team",
    location: "Ahmedabad",
    service: "Energy Alignment & Life Guidance",
    quote: "Her consultation and energy guidance brought immediate clarity and a deeply positive shift to our mindset and work.",
    highlight: "Video Experience",
    durationTogether: "Verified Client",
    mediaType: "video",
    videoUrl: feedback1Video,
    posterUrl: feedback1Thumb,
    rating: 5
  },
  {
    id: "test-1",
    clientName: "Ananya M.",
    location: "Mumbai",
    service: "Tarot Card Reading",
    quote: "Dr. Srushti didn't just read cards; she pinpointed the exact emotional knot I couldn't articulate for months. Leaving the session felt like a physical weight lifted off my chest.",
    highlight: "Clarity within minutes",
    durationTogether: "Client for 3 Years",
    mediaType: "image",
    imageUrl: feedbackAnanyaImg,
    rating: 5
  },
  {
    id: "test-video-2",
    clientName: "Client Reflection",
    location: "Mumbai",
    service: "Holistic Energy Healing",
    quote: "A deeply grounding session that released months of stress and tension.",
    highlight: "Video Experience",
    durationTogether: "Verified Client",
    mediaType: "video",
    videoUrl: feedback2Video,
    posterUrl: feedback2Thumb,
    rating: 5
  },
  {
    id: "test-img-sirender",
    clientName: "Sirender",
    location: "Mumbai",
    service: "Career Guidance / Internship",
    quote: "Greetings to all, I am Sirender, wanted to share my happiness with you all. I got selected in JW Marriot (Juhu). Thanks Srushti for controlling my anxiety, guidance & advice.",
    highlight: "JW Marriott Selected",
    durationTogether: "Client for 3+ Months",
    mediaType: "image",
    imageUrl: feedbackSirenderImg,
    rating: 5
  },
  {
    id: "test-video-3",
    clientName: "Client Reflection",
    location: "Delhi NCR",
    service: "Tarot & Intuitive Reading",
    quote: "Clarity on personal crossroads with exceptional accuracy and gentle warmth.",
    highlight: "Video Experience",
    durationTogether: "Verified Client",
    mediaType: "video",
    videoUrl: feedback3Video,
    posterUrl: feedback3Thumb,
    rating: 5
  },
  {
    id: "test-img-gratitude",
    clientName: "Client",
    location: "Mumbai",
    service: "Tarot Reading & Healing",
    quote: "I am really grateful for the services- Tarot reading given by Srushti. She also provides healing and it is so effective. I really blessed her for her good work.",
    highlight: "Tarot & Healing Gratitude",
    durationTogether: "Client for 3+ Months",
    mediaType: "image",
    imageUrl: feedbackTarotGratitudeImg,
    rating: 5
  },
  {
    id: "test-video-4",
    clientName: "Client Reflection",
    location: "Bengaluru",
    service: "Crystal Consultation & Protection",
    quote: "Empowering rituals and authentic gemstones that shifted the energy in our home.",
    highlight: "Video Experience",
    durationTogether: "Verified Client",
    mediaType: "video",
    videoUrl: feedback4Video,
    posterUrl: feedback4Thumb,
    rating: 5
  },
  {
    id: "test-img-rima",
    clientName: "Rima Joshi",
    location: "Mumbai",
    service: "Tarot Reading & Career Guidance",
    quote: "The three predictions that were made by her in mid-2019 all came true by 2022. When I was not able to believe in myself and my capabilities, her predictions believed in me and they finally ended up turning into reality.",
    highlight: "Predictions Turned Into Reality",
    durationTogether: "Client for 3+ Years",
    mediaType: "image",
    imageUrl: feedbackRimaJoshiImg,
    rating: 5
  }
];
