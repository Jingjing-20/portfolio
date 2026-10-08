import wordpop1 from '@/components/resume_sections/projects/personal/wordpop/p1.webp';
import wordpop2 from '@/components/resume_sections/projects/personal/wordpop/p2.webp';
import wordpop3 from '@/components/resume_sections/projects/personal/wordpop/p3.webp';
import atmosWeatherDark from '@/components/resume_sections/projects/personal/atmos-weather/atmos-weather-dark.webp';
import atmosWeatherLight from '@/components/resume_sections/projects/personal/atmos-weather/atmos-weather-light.webp';
import gitmsgPreview from '@/components/resume_sections/projects/personal/gitmsg/gitmsg.webp';

export const atmosWeatherImages = [
  { src: atmosWeatherDark, alt: 'Dark Mode' },
  { src: atmosWeatherLight, alt: 'Light Mode' },
];

export const wordpopImages = [
  { src: wordpop1, alt: 'Main Menu' },
  { src: wordpop2, alt: 'Gameplay' },
  { src: wordpop3, alt: 'Results Screen' },
];

export const gitmsgImages = [
  { src: gitmsgPreview, alt: 'GitMsg CLI Preview' },
];

export const personalData = [
  {
    id: 'atmos-weather',
    name: 'Atmos Weather',
    title: 'Atmos Weather',
    type: 'Weather Forecast Web Application',
    organization: 'Modern Weather Dashboard',
    category: 'Personal / Weather Dashboard',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API', 'Vercel'],
    summary: 'Modern weather application with real-time data, forecasts, and geolocation support using OpenWeatherMap API.',
    description:
      'A modern, responsive weather application that provides current weather information and forecasts using the OpenWeatherMap API. Designed as a portfolio-quality project demonstrating professional development practices and deployed on Vercel.',
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
    previewImage: atmosWeatherDark,
    coverImage: atmosWeatherDark,
  },
  {
    id: 'wordpop',
    name: 'Word Pop ESL',
    title: 'Word Pop ESL',
    type: 'ESL Listening & Vocabulary Mini-Game for Kids',
    organization: 'Listening & Vocabulary Mini-Game',
    category: 'Personal / Educational Game',
    techStack: ['React', 'TypeScript', 'Phaser', 'Vite', 'Vercel'],
    summary: 'Interactive ESL vocabulary game combining audio learning with visual recognition through balloon-popping gameplay.',
    description:
      'An interactive ESL (English as a Second Language) listening and vocabulary mini-game where players listen to spoken words, identify matching pictures, and pop floating balloons before time runs out. Designed for kids and early learners and deployed on Vercel.',
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
    previewImage: wordpop1,
    coverImage: wordpop1,
  },
  {
    id: 'gitmsg',
    name: 'GitMsg',
    title: 'GitMsg',
    type: 'Conventional Commit Message Generator',
    organization: 'Automated Commit CLI Tool',
    category: 'Personal / Developer Tool',
    techStack: ['Python', 'Typer', 'Rich', 'Pyperclip', 'pytest', 'Ruff', 'setuptools'],
    summary: 'Local-first Python CLI tool that analyzes staged Git diffs and automatically generates meaningful Conventional Commits messages — fully offline, no AI required.',
    description:
      'GitMsg is a local-first Python CLI tool that analyzes staged Git changes and automatically generates meaningful Conventional Commits messages. It inspects diffs, classifies the type of change, determines scope, and produces a ready-to-use commit message — all without requiring any external AI or LLM service.',
    purpose:
      'Writing good commit messages is tedious and often inconsistent, especially across teams. Developers frequently resort to vague messages like "fix stuff" or "update code". GitMsg eliminates guesswork by reading actual staged diffs, enforces Conventional Commits standard (feat, fix, refactor, docs, etc.), saves time with one command, and keeps developers in control by suggesting and copying messages but never auto-committing.',
    features: [
      'Staged diff analysis — parses git diff --cached to inspect only what is about to be committed',
      'File change detection — identifies added, modified, deleted, renamed, and copied files',
      'Automatic classification — determines Conventional Commit type (feat, fix, refactor, docs, style, test, chore, build, ci, perf)',
      'Scope inference — detects scope from file paths when consistent enough (e.g., feat(auth):, fix(api):)',
      'Confidence scoring — provides a heuristic confidence percentage for the suggested message',
      'Mixed change detection — warns when staged changes span multiple unrelated concerns',
      'Clipboard integration — automatically copies the generated message for quick pasting',
      'Multiple CLI modes: default (analyze + generate + copy), --analyze, --dry-run, --suggest',
      'Project configuration via optional .gitmsg/config.toml for per-project settings',
      'Fully offline — no API keys, no network calls, no external AI dependencies',
    ],
    livePreview: 'https://github.com/Jingjing-20/gitmsg',
    images: gitmsgImages,
    previewImage: gitmsgPreview,
    coverImage: gitmsgPreview,
  },
];
