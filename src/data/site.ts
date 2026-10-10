export const site = {
  name: 'Sendian Integrated Security Services',
  shortName: 'SISS',
  phone: '+974 44866766',
  email: 'info@sendiansecurity.com',
  address: ['1st Floor, Office 01, Building 60', 'Mekkah Al Mukarramah Street', 'Luqta, Doha'],
};

export const serviceSubmenu = [
  { href: '/services/security-solutions', label: 'Security Solutions' },
  { href: '/services/infrastructure-solutions', label: 'Infrastructure Solutions' },
  { href: '/services/parking-systems', label: 'Parking Systems' },
  { href: '/services/automation-solutions', label: 'Automation Solutions' },
  { href: '/services/communication-solutions', label: 'Communication Solutions' },
  { href: '/services/audio-visual-solutions', label: 'Audio-Visual Solutions' },
  { href: '/services/other-solutions', label: 'Maintenance And Others' },
];

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', submenu: serviceSubmenu },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];
