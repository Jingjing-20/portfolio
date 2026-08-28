import wordpopPreview from '@/components/resume_sections/projects/minigames/wordpop.webp';

export const minigamesData = [
  {
    id: 'wordpop',
    name: 'Word Pop ESL',
    type: 'ESL Listening & Vocabulary Mini-Game for Kids',
    category: 'Educational / Browser Game',
    description:
      'A vibrant, fast-paced ESL (English as a Second Language) listening and vocabulary mini-game designed for kids and early learners.\n\nListen to the spoken English word, identify the matching picture, and pop the floating balloon before time runs out!',
    features: [
      'Interactive Audio & Speech Synthesis: Uses the Web Speech API to clearly pronounce vocabulary words with child-friendly pitch and pacing.',
      'Phaser 2D Balloon Physics: Smooth balloon bobbing animations, particle explosions, confetti, and satisfying pop interactions powered by Phaser.',
      'Zero-Asset Web Audio SFX: Custom programmatic sound effects (correct chimes, buzzers, countdown ticks, celebration melodies) synthesized via the Web Audio API without external audio dependencies.',
      '3 Difficulty Tiers:\n• Easy (90s): Foundational 3-letter & short vocabulary words (cat, dog, sun, star, frog, etc.).\n• Medium (90s): Common everyday items and food (apple, banana, rocket, guitar, rabbit, etc.).\n• Hard (75s): Multi-syllable and descriptive words (elephant, dinosaur, telescope, helicopter, etc.).',
      'Streak & Combo Multiplier: Encourages accuracy with increasing bonus points for consecutive correct pops.',
      'Post-Round Review: Displays total score, accuracy, streak records, and a list of missed words to reinforce learning.',
      'Responsive & Accessible: Works seamlessly on desktop, tablet, and mobile touchscreens with automatic canvas scaling.',
    ],
    livePreview: 'https://wordpop-virid.vercel.app/',
    previewImage: wordpopPreview,
  },
];
