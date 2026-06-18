// Eagerly import every image under /images so we never hand-write
// brittle paths for filenames that contain spaces or "&".
const imageModules = import.meta.glob('/images/**/*.{png,jpg,jpeg,webp,PNG,JPG}', {
  eager: true,
  import: 'default',
})

function img(folder, filename) {
  return imageModules[`/images/${folder}/${filename}`]
}

export const GITHUB_URL = 'https://github.com/ShiraKahalany'
export const LINKEDIN_URL = 'https://www.linkedin.com/'
export const EMAIL = 'shira.ka017@gmail.com'

export const projects = [
  {
    id: 'hirewise',
    title: 'HireWise',
    subtitle: 'AI Interview Preparation Platform',
    description:
      'AI-powered interview preparation platform that analyzes job descriptions and generates personalized technical and behavioral interview simulations with AI feedback and readiness scoring.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'OpenAI', 'Supabase', 'PostgreSQL'],
    glow: { primary: '#2dd4bf', secondary: '#22d3ee' },
    main: img('HireWise', 'score.png'),
    gallery: [img('HireWise', 'inteview questions.png'), img('HireWise', 'enter url.png')],
    github: GITHUB_URL,
  },
  {
    id: 'chat-map',
    title: 'Real-Time Chat Map System',
    subtitle: 'Operational collaboration with live map entity sharing',
    description:
      'A real-time communication system developed at Elta Systems, combining team chat with an operational map. Users can send messages, share map entities, drag entities into chat, and track selected entities on their own map view.',
    tech: ['React', 'Node.js', 'Socket.IO', 'JavaScript', 'Keycloak', 'WebSockets'],
    glow: { primary: '#10b981', secondary: '#2563eb' },
    main: img('Chat Map', 'drag & drop.png'),
    gallery: [img('Chat Map', 'entity details.png'), img('Chat Map', 'double click on entity.png')],
    github: GITHUB_URL,
  },
  {
    id: 'dds-rabbitmq',
    title: 'DDS to RabbitMQ Gateway',
    subtitle: 'Distributed systems message bridge',
    description:
      'C# .NET middleware gateway that translated DDS messages into RabbitMQ events, enabling communication between distributed systems and downstream services.',
    tech: ['C#', '.NET', 'RabbitMQ', 'RTI DDS', 'Distributed Systems', 'Message Mapping'],
    glow: { primary: '#3b82f6', secondary: '#f97316' },
    main: img('DDSRabbitMQ', 'dds to rabbitmq.png'),
    gallery: [],
    github: GITHUB_URL,
  },
  {
    id: 'readme-agent',
    title: 'README AI Agent',
    subtitle: 'AI-powered repository documentation',
    description:
      'AI agent that analyzes GitHub repositories, understands project structure, and generates professional README files automatically.',
    tech: ['Python', 'OpenAI', 'GitHub', 'Automation', 'LLMs'],
    glow: { primary: '#a855f7', secondary: '#6366f1' },
    main: img('README Agent', 'processing.png'),
    gallery: [img('README Agent', 'before.png'), img('README Agent', 'after.png')],
    github: GITHUB_URL,
  },
  {
    id: 'homedecor',
    title: 'HomeDecor Store',
    subtitle: 'Desktop E-Commerce Management System',
    description:
      'Modular desktop application for home decor product and order management, built with a clean 3-layer architecture and XML-based persistence.',
    tech: ['C#', '.NET', 'WPF', 'Entity Framework', 'XML', '3-Layer Architecture'],
    glow: { primary: '#f5b342', secondary: '#d97706' },
    main: null,
    gallery: [],
    github: GITHUB_URL,
  },
  {
    id: 'influlink',
    title: 'InfluLink',
    subtitle: 'Professional network for creators and brands',
    description:
      'A LinkedIn-style platform concept for influencers and brands, helping creators build professional profiles and helping businesses discover relevant creators for campaigns.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Product Design', 'SaaS'],
    glow: { primary: '#ec4899', secondary: '#fb7185' },
    main: null,
    gallery: [],
    github: GITHUB_URL,
  },
]
