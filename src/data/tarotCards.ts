export interface TarotCard {
  id: string;
  name: string;
  romanNumeral: string;
  archetype: string;
  reflection: string;
  actionGuidance: string;
  element: string;
  symbol: string;
  cardImage: string;
}

export const tarotExperienceCards: TarotCard[] = [
  {
    id: "star",
    name: "The Star",
    romanNumeral: "XVII",
    archetype: "Hope & Divine Alignment",
    reflection: "Release the weight of what was. The universe is gently clearing space for genuine peace.",
    actionGuidance: "Trust the slow renewal underway in your heart. You are held.",
    element: "Air • Aquarius",
    symbol: "✦",
    cardImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    romanNumeral: "II",
    archetype: "Sacred Intuition & Stillness",
    reflection: "The answer you seek cannot be found in the noise. It waits in the stillness between your thoughts.",
    actionGuidance: "Honor your quiet instinct before making your next move.",
    element: "Water • Moon",
    symbol: "☾",
    cardImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sun",
    name: "The Sun",
    romanNumeral: "XIX",
    archetype: "Radiance & Vital Truth",
    reflection: "Clouded doubts are dissolving into warmth. Step unapologetically into your own light.",
    actionGuidance: "Allow yourself to celebrate how far you have already come.",
    element: "Fire • Solar",
    symbol: "☼",
    cardImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
  }
];
