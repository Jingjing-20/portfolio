const cert = (filename) => new URL(`../assets/certs/${filename}`, import.meta.url).href

export const participationCertificatesData = [
  {
    id: 'cert-devfest-2025',
    title: 'Google DevFest Bacolod 2025',
    date: 'Nov 22, 2025',
    image: cert('DevFest_2025_Certificate.png'),
  },
  {
    id: 'cert-ai-enterprise',
    title: 'AI x Enterprise Architecture - Powering Emerging Tech',
    date: 'Sep 25, 2025',
    image: cert('AI x Enterprise Architecture - Powering Emerging Tech.png'),
  },
  {
    id: 'cert-mental-health-ai',
    title: '10 Keys to Mental Health at Work - Support Wellbeing with AI Tools',
    date: 'Sep 18, 2025',
    image: cert('10 Keys to Mental Health at Work - Support Wellbeing with AI Tools.png'),
  },
  {
    id: 'cert-ai-cybersecurity',
    title: 'Usage of AI Tools in Cyber Security',
    date: 'Sep 15, 2025',
    image: cert('Usage of AI Tools in Cyber Security.png'),
  },
  {
    id: 'cert-chatgpt-agent',
    title: 'Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI',
    date: 'Sep 10, 2025',
    image: cert('Unleashing ChatGPT Agent Mode - From Chatbot to Autonomous AI.png'),
  },
  {
    id: 'cert-project-management',
    title: 'Understanding Project Management from Basic to Advance',
    date: 'Sep 02, 2025',
    image: cert('Understanding Project management from basic to advance.png'),
  },
  {
    id: 'cert-networking-devices',
    title: 'Networking Devices and Initial Configuration',
    date: 'Dec 06, 2023',
    image: cert('Networking Devices and Initial Configuration.png'),
  },
  {
    id: 'cert-network-addressing',
    title: 'Network Addressing and Basic Troubleshooting',
    date: 'Nov 01, 2023',
    image: cert('Network Addressing and Basic Troubleshooting.png'),
  },
  {
    id: 'cert-networking-basics',
    title: 'Networking Basics',
    date: 'Oct 07, 2023',
    image: cert('Networking Basics.png'),
  },
]
