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
    { titleLines: ['CCTV', 'Solutions'], image: '/images/services/cctv.jpeg', alt: 'CCTV wall camera installation', href: '/services/security-solutions' },
    { titleLines: ['Networking', 'Solutions'], image: '/images/services/networking.jpeg', alt: 'Structured networking cabling', href: '/services/infrastructure-solutions' },
    { titleLines: ['Smart', 'Parking'], image: '/images/services/parking.jpeg', alt: 'Smart parking barrier system', href: '/services/parking-systems' },
    { titleLines: ['Communication', 'Solutions'], image: '/images/services/communication.jpeg', alt: 'Communication and ICT solutions', href: '/services/communication-solutions' },
    { titleLines: ['Automation', 'Solutions'], image: '/images/services/cctv.jpeg', alt: 'Building automation solutions', href: '/services/automation-solutions' },
    { titleLines: ['Audio-Visual', 'Solutions'], image: '/images/services/av.jpeg', alt: 'Audio-visual system integration', href: '/services/audio-visual-solutions' },
    { titleLines: ['Maintenance', 'And Others'], image: '/images/services/networking.jpeg', alt: 'Maintenance and support services', href: '/services/other-solutions' },
  ],
  stats: [
    { value: '244', suffix: '+', label: 'Projects Delivered' },
    { value: '9,767', suffix: '+', label: 'Devices Deployed' },
    { value: '23', suffix: '/7', label: 'Operational Support' },
    { value: '732M', suffix: '+', label: 'QAR Asset Value' },
  ],
};
