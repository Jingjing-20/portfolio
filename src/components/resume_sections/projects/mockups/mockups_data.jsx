import willowPreview from '@/components/resume_sections/projects/mockups/willow.webp';
import thedriftPreview from '@/components/resume_sections/projects/mockups/thedrift.webp';
import shiroPreview from '@/components/resume_sections/projects/mockups/shiro.webp';
import waxandwanePreview from '@/components/resume_sections/projects/mockups/waxandwane.webp';
import kindlingPreview from '@/components/resume_sections/projects/mockups/kindling-coffee.webp';
import waypointPreview from '@/components/resume_sections/projects/mockups/waypoint-journal.webp';
import saktoPosPreview from '@/components/resume_sections/projects/mockups/sakto-pos.webp';

export const mockupsData = [
  {
    id: 'willow',
    name: 'Willow',
    type: 'Boutique dental practice website',
    category: 'Healthcare',
    format:
      'A responsive, multi-view healthcare website featuring the home page, services, first-visit information, team, reviews, FAQ, booking, and location sections.',
    styling:
      'Warm, approachable, and low-pressure healthcare aesthetic. A sage, moss, cream, and coral palette replaces the conventional clinical blue. Fraunces is used for display typography, paired with Nunito Sans for a soft editorial feel. Rounded pill navigation, generous corner radii, organic background shapes, stitched borders, and record-tab-inspired card accents create a handcrafted, calm, and welcoming character.',
    livePreview: 'https://willow-opal.vercel.app',
    previewImage: willowPreview,
  },
  {
    id: 'thedrift',
    name: 'Drift',
    type: 'Independent digital magazine and long-form essay publication',
    category: 'Editorial',
    format:
      'A responsive editorial website featuring a featured story, latest-article grid, popularity sidebar, category archive, article template, about page, and newsletter signup.',
    styling:
      'Inspired by traditional print journalism and literary publications. The design combines warm paper white, ink black, thin divider rules, muted gray typography, navy interaction accents, and rust editorial details. Source Serif 4 is used for headlines and long-form reading text, while Karla and Space Mono distinguish interface elements and publication metadata. A structured masthead, volume line, drop caps, and spacious article grids create a refined literary-magazine character.',
    livePreview: 'https://thedrift-beta.vercel.app',
    previewImage: thedriftPreview,
  },
  {
    id: 'shiro',
    name: 'Shiro',
    type: 'Premium omakase restaurant and reservation website',
    category: 'Restaurant',
    format:
      'A responsive, seven-view hospitality website covering the counter experience, daily menu, chef story, private buyouts, gallery, reservation request, and visit information.',
    styling:
      'Contemporary Japanese minimalism with an emphasis on precision and restraint. The palette uses black, white, rice beige, hairline-gray rules, and subtle clay accents. Oversized Space Grotesk headlines are paired with Work Sans for body copy and JetBrains Mono for labels and metadata. A fixed desktop sidebar, full-screen mobile menu, fine grid borders, Japanese-character watermarks, image-led cards, and a noren-curtain transition reinforce the exclusive and carefully crafted atmosphere.',
    livePreview: 'https://shiro-rho.vercel.app',
    previewImage: shiroPreview,
  },
  {
    id: 'waxandwane',
    name: 'Wax & Wane',
    type: 'Independent record shop and listening bar website',
    category: 'Retail & Music',
    format:
      'A responsive, seven-view retail and hospitality website covering the record shop, listening sessions, bar menu, brand story, visit information, and record-club membership.',
    styling:
      'Dark, tactile, and music-focused. A near-black plum background is paired with muted taupe text, warm bone highlights, amber accents, and dusty teal details to create a vintage record-store atmosphere. Bricolage Grotesque provides expressive display typography, while Instrument Sans handles interface and body text and IBM Plex Mono is used for catalog-style labels. A spinning vinyl record acts as the central visual motif throughout the interface, appearing in animated record graphics, hover interactions, and a subtle needle-drop transition between views.',
    livePreview: 'https://waxandwane.vercel.app',
    previewImage: waxandwanePreview,
  },
  {
    id: 'kindling',
    name: 'Kindling Coffee Roasters',
    type: 'Small-batch coffee roastery and subscription e-commerce',
    category: 'E-commerce & Food',
    format:
      'A responsive, seven-page e-commerce website featuring home, shop with roast-level filtering, origins and farm sourcing, brew guide with step-by-step instructions, subscription plans, FAQ, and roastery visit information. Includes a functional cart drawer, multi-step checkout flow, and interactive roast-level dials.',
    styling:
      'Warm, tactile coffee-sack aesthetic inspired by burlap, handwritten roast logs, and artisan packaging. The palette uses cream, smoke gray, rust, and gold accents. DM Serif Display provides editorial headlines, Space Grotesk handles body copy, IBM Plex Mono marks metadata, and Caveat adds handwritten field-note touches. Polaroid-style product cards with pushpin accents, dashed burlap-seam dividers, roast-level gradient tracks with movable indicators, and washi-tape visual details reinforce the small-batch craft character.',
    livePreview: 'https://kindling-coffee-beta.vercel.app',
    previewImage: kindlingPreview,
  },
  {
    id: 'waypoint',
    name: 'Waypoint',
    type: 'Long-form trail journal and outdoor writing publication',
    category: 'Editorial & Outdoor',
    format:
      'A responsive, five-page editorial platform featuring a hero with live field-log card, full journal archive with region filtering, detailed trip-report article template with elevation-profile reading indicator, author timeline, and newsletter subscription. Includes search overlay, table-of-contents navigation, mock comment system, and sticky navigation with topographic dividers.',
    styling:
      'Inspired by field notebooks, USGS topo maps, and backcountry trip reports. The palette uses paper beige, ink charcoal, teal trail markers, ochre highlights, and smoke gray. Fraunces provides literary display typography, Public Sans handles body text, JetBrains Mono marks trail data, and Shadows Into Light adds handwritten margin notes. Contour-line backgrounds, elevation SVG progress indicators, sticky-note margin comments, dotted trail dividers, and live elevation tracking create an authentic field-journal character.',
    livePreview: 'https://waypoint-journal.vercel.app/',
    previewImage: waypointPreview,
  },
  {
    id: 'sakto-pos',
    name: 'Sakto POS',
    type: 'Point of Sale system for retail and restaurant businesses',
    category: 'Business & Retail',
    format:
      'A responsive point-of-sale web application featuring product catalog, cart management, order processing, payment handling, sales reporting, and inventory tracking. Includes real-time order updates, receipt printing, and multi-payment method support.',
    styling:
      'Clean, functional interface optimized for speed and efficiency in high-volume retail environments. Modern design with clear typography, intuitive touch-friendly buttons, and organized layout for quick transaction processing. Focus on usability and accessibility for all-day operation.',
    livePreview: 'https://sakto-pos.vercel.app/',
    previewImage: saktoPosPreview,
  },
];
