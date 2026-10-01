import wordpopPreview from '@/components/resume_sections/projects/personal/wordpop/wordpop.webp';
import atmosWeatherPreview from '@/components/resume_sections/projects/personal/atmos-weather/atmos-wather.webp';

export const atmosWeatherImages = [
  { src: atmosWeatherPreview, alt: 'Atmos Weather Preview' },
];

export const wordpopImages = [
  { src: wordpopPreview, alt: 'Word Pop ESL Preview' },
];

export const personalData = [
  {
    id: 'atmos-weather',
    name: 'Atmos Weather',
    title: 'Atmos Weather',
    type: 'Weather Forecasting Web Application',
    organization: 'Modern Weather Dashboard',
    category: 'Personal / Weather Dashboard',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    description:
      'A modern, responsive weather application that provides current weather information and forecasts using the OpenWeatherMap API. Designed as a portfolio-quality project demonstrating professional development practices.',
    purpose:
      'Demonstrate modern web development skills through a production-ready weather application featuring React, TypeScript, API integration, clean architecture, responsive UI/UX, and professional Git workflows with CI/CD deployment.',
    features: [
      'Real-time weather data for any city worldwide with search functionality',
      'Detailed weather metrics: temperature, humidity, wind speed, pressure, visibility, sunrise/sunset',
      '5-day/3-hour forecast with hourly and daily aggregations',
      'Geolocation support for automatic weather detection',
      'Mobile-first responsive design with dark mode support',
      'Loading and error state management for better UX',
      'API rate limiting with debounced search and response caching',
    ],
    livePreview: 'https://atmos-weather-517i.vercel.app/',
    images: atmosWeatherImages,
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
    techStack: ['React', 'TypeScript', 'Phaser', 'Vite'],
    description:
      'An interactive ESL (English as a Second Language) listening and vocabulary mini-game where players listen to spoken words, identify matching pictures, and pop floating balloons before time runs out. Designed for kids and early learners.',
    purpose:
      'Provide an engaging, gamified educational experience for children learning English vocabulary by combining audio learning with visual recognition through interactive gameplay with progressive difficulty levels.',
    features: [
      'Interactive audio pronunciation using Web Speech API with child-friendly pacing',
      'Phaser game engine with smooth balloon physics, particle effects, and confetti animations',
      'Programmatic Web Audio SFX without external audio dependencies',
      '3 difficulty levels: Easy (3-letter words, 90s), Medium (common vocabulary, 90s), Hard (multi-syllable words, 75s)',
      'Streak and combo multiplier system for bonus points',
      'Post-round review with score, accuracy, streak records, and missed words list',
      'Responsive design with automatic canvas scaling for desktop, tablet, and mobile touchscreens',
    ],
    livePreview: 'https://wordpop-virid.vercel.app/',
    images: wordpopImages,
    previewImage: wordpopPreview,
    coverImage: wordpopPreview,
  },
];
