import wordpopPreview from '@/components/resume_sections/projects/personal/wordpop.webp';
import atmosWeatherPreview from '@/components/resume_sections/projects/personal/atmos-wather.webp';

export const personalData = [
  {
    id: 'atmos-weather',
    name: 'Atmos Weather',
    title: 'Atmos Weather',
    type: 'Weather Application',
    organization: 'odern Weather Dashboard',
    category: 'Personal / Weather Dashboard',
    description:
      'A modern weather dashboard showcasing clean React + TypeScript engineering. Displays real-time conditions, 3-hour interval forecasts, and a 5-day outlook for any city via the OpenWeatherMap Classic API. Features a monochrome card aesthetic with light/dark/system themes, mobile-first responsive layout, and graceful loading and error states.',
    features: [
      'Current weather card with temp, feels-like, min/max, humidity, wind, and pressure.',
      'Horizontal hourly forecast strip with 8 time slots and rain probability.',
      '5-day outlook aggregated from 3-hour forecast data.',
      'Full-width details grid: Humidity, Wind, Pressure, Visibility, Sunrise, Sunset.',
      'Debounced city search (400ms) with inline validation.',
      'Loading skeletons and five distinct user-friendly error states.',
      'Light / Dark / System theme toggle with smooth view-transitions.',
    ],
    stack: [
      'Frontend: React 19, TypeScript 6, Vite 8, Tailwind CSS 4, daisyUI 5, Lucide, Geist Mono',
      'Data: OpenWeatherMap Classic API (/weather + /forecast, metric)',
      'Quality: Vitest, Type-aware ESLint (react-x / react-dom / no-misused-promises), React Compiler',
      'Ops: Vercel hosting + Vercel Analytics, GitHub Actions CI (typecheck → eslint → vitest)',
    ],
    previewImage: atmosWeatherPreview,
    coverImage: atmosWeatherPreview,
  },
  {
    id: 'wordpop',
    name: 'Word Pop ESL',
    title: 'Word Pop ESL',
    type: 'ESL Listening & Vocabulary Mini-Game for Kids',
    organization: 'Listening & Vocabulary Mini-Game',
    category: 'Personal / Educational Game',
    description:
      'A vibrant, fast-paced ESL listening and vocabulary mini-game for kids and early learners. Listen to the spoken English word, identify the matching picture, and pop the floating balloon before time runs out.',
    features: [
      'Web Speech API pronunciation with child-friendly pitch and pacing.',
      'Phaser 2D balloon physics with particles, confetti, and pop effects.',
      'Programmatic Web Audio SFX (chimes, buzzers, melodies) — no audio asset dependencies.',
      'Three difficulty tiers (Easy 90s / Medium 90s / Hard 75s) with growing vocabulary sets.',
      'Streak and combo multiplier scoring system.',
      'Post-round review: score, accuracy, streak records, missed words.',
      'Fully responsive across desktop, tablet, and mobile touchscreens.',
    ],
    stack: [
      'Frontend: React, TypeScript, Vite, Tailwind CSS, daisyUI',
      'Game Engine: Phaser 2D',
      'Audio: Web Speech API (SpeechSynthesis), Web Audio API (custom SFX)',
      'Ops: Vercel hosting',
    ],
    livePreview: 'https://wordpop-virid.vercel.app/',
    previewImage: wordpopPreview,
    coverImage: wordpopPreview,
  },
];
