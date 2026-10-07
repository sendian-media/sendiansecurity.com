export interface ProjectSummary {
  slug: string;
  title: string;
  image: string;
  alt: string;
}

export interface ChallengeItem {
  title: string;
  text: string;
  image: string;
}

export interface ProjectDetail extends ProjectSummary {
  intro: string[];
  challengeIntro: string;
  challengeItems: ChallengeItem[];
  solution: { text: string; bullets: string[] };
  results: { text: string; bullets: string[] };
}

const challengeImages = [
  '/images/projects/challenge-1.jpeg',
  '/images/projects/challenge-2.jpeg',
  '/images/projects/challenge-3.jpeg',
];

function challengeSet(intro: string, items: [string, string][]): { challengeIntro: string; challengeItems: ChallengeItem[] } {
  return {
    challengeIntro: intro,
    challengeItems: items.map(([title, text], index) => ({ title, text, image: challengeImages[index] ?? challengeImages[0] })),
  };
}

const urbanChallengeIntro =
  'Urban areas face complex challenges like high population density, traffic congestion, and rising security risks. Our solution combines AI-powered cameras, strategic placement, and centralized monitoring, ensuring comprehensive coverage.';

const highDensity: ChallengeItem = {
  title: 'High Density',
  text: 'Managing surveillance in densely populated areas is challenging.',
  image: challengeImages[0],
};

const trafficCongestion: ChallengeItem = {
  title: 'Traffic Congestion',
  text: 'Heavy traffic creates blind spots and delays response times.',
  image: challengeImages[1],
};

const crimePrevention: ChallengeItem = {
  title: 'Crime Prevention',
  text: 'Urban environments face rising threats of theft and vandalism.',
  image: challengeImages[2],
};

const integratedSecurityIntro = [
  'Our integrated security solutions combine advanced surveillance technologies, access control systems, and real-time monitoring to protect your assets and people. By unifying multiple security layers into a single, manageable platform, we provide seamless protection, reduce vulnerabilities, and ensure that your organization remains safe and secure at all times.',
  'Clients benefit from centralized control, automated alerts, and actionable insights, allowing them to make informed decisions and maintain complete peace of mind in today’s complex security landscape.',
];

const integratedSecurityChallengeIntro =
  'Ensuring seamless protection for people, assets, and information requires a unified solution that integrates surveillance, access control, and monitoring into a single, efficient platform.';

const systemComplexity: ChallengeItem = {
  title: 'System Complexity',
  text: 'Multiple security systems create gaps and operational inefficiencies.',
  image: challengeImages[0],
};

const delayedResponse: ChallengeItem = {
  title: 'Delayed Response',
  text: 'Separate systems slow threat detection and incident handling.',
  image: challengeImages[1],
};

const vulnerabilityRisks: ChallengeItem = {
  title: 'Vulnerability Risks',
  text: 'Unintegrated security increases exposure to potential breaches.',
  image: challengeImages[2],
};

const integratedSolution = {
  text: 'We implemented an integrated security system combining CCTV, access control, alarm systems, and centralized monitoring. The solution unifies multiple layers of security, enabling real-time alerts, automated reporting, and proactive threat management.',
  bullets: [
    'Centralized monitoring across all locations',
    'Unified CCTV and surveillance systems',
    'Advanced access control integration implemented',
    'Real-time alerts for faster response',
    'Automated incident reporting and logging',
    'AI-assisted threat detection enabled',
    'Customizable dashboards for security teams',
    'Scalable solutions for future expansion',
    'Staff training for efficient operations',
    'Continuous system testing and optimization',
  ],
};

const integratedResults = {
  text: 'The integrated approach enhanced overall security efficiency and responsiveness. Clients benefit from centralized control, faster incident management, and reduced risks.',
  bullets: [
    'Enhanced operational efficiency and control',
    'Faster threat detection and response',
    'Reduced risks across all sites',
  ],
};

const urbanSolution = {
  text: 'We deploy AI-powered cameras capable of detecting unusual activities, managing traffic flow, and monitoring high-density areas in real time. These intelligent systems reduce manual oversight and provide authorities with instant alerts for faster decision-making.',
  bullets: [
    'AI-powered cameras for real-time monitoring',
    'Smart traffic management with video analytics',
    'Centralized control panels for easy coordination',
    'Cloud storage ensuring secure data backup',
    'Remote access via mobile-friendly applications',
    'High-resolution cameras covering wide city zones',
    'Integrated alarms with instant alert systems',
    'Scalable networks supporting urban growth demands',
    'Cybersecurity measures protecting infrastructure',
    'Customized solutions tailored to city needs',
  ],
};

const urbanResults = {
  text: 'Our urban surveillance projects deliver measurable improvements, including reduced crime rates, improved traffic control, and greater citizen safety. By combining smart monitoring with advanced analytics, we help authorities take quick, data-driven decisions. These solutions foster safer, smarter, and more connected cities built for long-term trust and security.',
  bullets: [
    'Reduced crime rates across monitored zones',
    'Improved traffic flow with real-time alerts',
    'Enhanced public safety and citizen confidence',
  ],
};

const urbanIntro = [
  'Urban environments face unique challenges such as population growth, traffic congestion, and rising crime rates. Traditional surveillance methods often fall short in providing real-time insights. Our solution integrates AI-powered cameras, centralized monitoring, and cloud-based storage to deliver smarter surveillance. This ensures improved safety, quicker response times, and greater efficiency in managing citywide security, making urban spaces more resilient and better protected for both residents and businesses.',
  'We start with a detailed urban assessment, identifying key areas that require constant surveillance—public zones, traffic hubs, and vulnerable locations. Our experts design a tailored security plan, integrating smart cameras, sensors, and control systems.',
];

// Grid contents scraped from https://sendiansecurity.com/projects/
export const projectSummaries: ProjectSummary[] = [
  { slug: 'towers', title: 'Towers', image: '/images/projects/towers.jpeg', alt: 'High-rise towers project' },
  { slug: 'commercial', title: 'Commercial', image: '/images/projects/commercial.jpeg', alt: 'Commercial buildings project' },
  { slug: 'residential', title: 'Residential', image: '/images/projects/residential.jpeg', alt: 'Residential compounds project' },
  { slug: 'healthcare', title: 'Healthcare', image: '/images/projects/healthcare.jpeg', alt: 'Healthcare facilities project' },
  { slug: 'education', title: 'Education', image: '/images/projects/education.jpeg', alt: 'Education facilities project' },
  { slug: 'retail', title: 'Retail', image: '/images/projects/retail.png', alt: 'Retail stores project' },
  { slug: 'showrooms', title: 'Showrooms', image: '/images/projects/showrooms.png', alt: 'Car showrooms project' },
  { slug: 'industrial', title: 'Industrial', image: '/images/projects/industrial.jpeg', alt: 'Industrial facilities project' },
];

// Detail contents scraped from https://sendiansecurity.com/portfolio/<slug>/ — shared template
// pages reuse the same section copy with their own imagery.
const urbanSecurities: ProjectDetail[] = ['towers', 'commercial', 'healthcare', 'education'].map((slug) => ({
  slug,
  title: slug === 'towers' ? 'Towers' : slug.charAt(0).toUpperCase() + slug.slice(1),
  image: `/images/projects/${slug}.jpeg`,
  alt: `${slug.charAt(0).toUpperCase() + slug.slice(1)} project`,
  intro: urbanIntro,
  ...challengeSet(urbanChallengeIntro, [
    ['High Density', highDensity.text],
    ['Traffic Congestion', trafficCongestion.text],
    ['Crime Prevention', crimePrevention.text],
  ]),
  solution: urbanSolution,
  results: urbanResults,
}));

const integratedSecurities: ProjectDetail[] = ['retail', 'showrooms', 'industrial'].map((slug) => ({
  slug,
  title: slug.charAt(0).toUpperCase() + slug.slice(1),
  image: `/images/projects/${slug}.${slug === 'retail' || slug === 'showrooms' ? 'png' : 'jpeg'}`,
  alt: `${slug.charAt(0).toUpperCase() + slug.slice(1)} project`,
  intro: integratedSecurityIntro,
  ...challengeSet(integratedSecurityChallengeIntro, [
    ['System Complexity', systemComplexity.text],
    ['Delayed Response', delayedResponse.text],
    ['Vulnerability Risks', vulnerabilityRisks.text],
  ]),
  solution: integratedSolution,
  results: integratedResults,
}));

export const projectDetails: ProjectDetail[] = [
  ...urbanSecurities,
  ...integratedSecurities,
  // Residential portfolio (https://sendiansecurity.com/portfolio/residential/)
  {
    slug: 'residential',
    title: 'Residential',
    image: '/images/projects/residential.jpeg',
    alt: 'Residential compounds project',
    intro: [
      'The solution enhanced incident detection and response times, providing centralized control over multiple locations. Operational efficiency improved, risks were minimized, and client satisfaction increased due to proactive threat management, enhanced safety, and measurable cost savings from optimized monitoring operations.',
      'We configured secure remote access, automated alert protocols, and comprehensive reporting dashboards, accompanied by training to ensure smooth, reliable operation across all monitored sites.',
    ],
    ...challengeSet(
      'The challenge was to implement a robust monitoring system that ensures real-time surveillance and minimizes human error, while optimizing operational efficiency and maintaining high security standards.',
      [
        ['Multi-Site Surveillance', 'Difficult to monitor multiple locations efficiently in real time.'],
        ['Human Limitations', 'Manual monitoring prone to errors and delayed threat detection.'],
        ['Incident Response', 'Slow response times increase risks to people and property.'],
      ],
    ),
    solution: {
      text: 'Real-time alerts, live streaming, and AI-assisted threat detection enabled security teams to respond immediately to incidents. The solution ensured seamless coverage across all sites, reducing blind spots and improving overall security management with minimal manual intervention.',
      bullets: [
        'Centralized real-time surveillance across sites',
        'AI-assisted threat detection and alerts',
        'Live CCTV feeds for monitoring',
        'Automated incident reporting and logging',
        'Remote access via secure platforms',
        'Customized monitoring dashboards for teams',
        'Smart analytics to reduce false alerts',
        'Scalable system for multiple locations',
        'Staff training for efficient operations',
        'Continuous system testing and optimization',
      ],
    },
    results: {
      text: 'The remote monitoring solution significantly improved incident detection and response times. Security teams gained centralized control over multiple locations, enhancing operational efficiency and reducing risks.',
      bullets: [
        'Faster incident detection and response',
        'Centralized control across all locations',
        'Reduced risks and operational costs',
      ],
    },
  },
];
