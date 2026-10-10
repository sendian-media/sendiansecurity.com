export const servicesPage = {
  hero: {
    title: 'Services',
  },
  heading: {
    badge: '// Our Services',
    titleLines: [
      { text: 'Integrated ' },
      { text: 'Security', highlight: true },
      { text: '' },
      { text: 'Solutions', highlight: false },
    ],
  },
  cards: [
    { titleLines: ['Security', 'Solutions'], image: '/images/services/security-solutions.png', alt: 'Security and surveillance solutions', href: '/services/security-solutions' },
    { titleLines: ['Infrastructure', 'Solutions'], image: '/images/services/infrastructure-solutions.png', alt: 'Infrastructure and data center solutions', href: '/services/infrastructure-solutions' },
    { titleLines: ['Parking', 'Systems'], image: '/images/services/parking-systems.jpeg', alt: 'Parking and mobility systems', href: '/services/parking-systems' },
    { titleLines: ['Communication', 'Solutions'], image: '/images/services/communication-solutions.png', alt: 'Communication and network solutions', href: '/services/communication-solutions' },
    { titleLines: ['Automation', 'Solutions'], image: '/images/services/automation-solutions.jpeg', alt: 'Automation and smart environment solutions', href: '/services/automation-solutions' },
    { titleLines: ['Audio-Visual', 'Solutions'], image: '/images/services/audio-visual-solutions.jpeg', alt: 'Audio-visual and monitoring solutions', href: '/services/audio-visual-solutions' },
    { titleLines: ['Maintenance', 'And Others'], image: '/images/services/other-solutions.png', alt: 'Maintenance and other solutions', href: '/services/other-solutions' },
  ],
  stats: [
    { value: '250', suffix: '+', label: 'Projects Delivered' },
    { value: '10000', suffix: '+', label: 'Devices Deployed' },
    { value: '24', suffix: '/7', label: 'Operational Support' },
    { value: '750', suffix: 'M+', label: 'QAR Asset Value' },
  ],
};

export type ServiceCard = (typeof servicesPage)['cards'][number];
