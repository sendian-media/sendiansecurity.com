export interface ProjectSummary {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  completedProjects: string[];
  ongoingProjects: string[];
}

// Authorized source index: https://sendiansecurity.com/projects/
export const projectSummaries: ProjectSummary[] = [
  {
    slug: 'towers',
    category: 'High-Rise Development',
    title: 'Towers',
    description:
      'High-rise and vertical developments delivered in complex urban settings, requiring coordinated execution, system integration, and operational continuity.',
    image: '/images/projects/towers.jpeg',
    alt: 'Towers',
    completedProjects: [
      'Marina Mix 49 (2B+G+27F+Roof)',
      'Marina Mix 52 (B+G+7P+13F+Roof)',
      'Tornado Tower Offices',
      'Doha Bank',
    ],
    ongoingProjects: [],
  },
  {
    slug: 'commercial',
    category: 'Commercial Facilities',
    title: 'Commercial',
    description:
      'Business-focused facilities designed to support daily operations, asset protection, and long-term functionality across office and mixed commercial environments.',
    image: '/images/projects/commercial.jpeg',
    alt: 'Commercial facilities',
    completedProjects: [
      'Sendian Head Quarter',
      'Ghanem Office Building',
      'Ministry of Interior building',
      'Qatar Petroleum',
      'Qatar Petroleum – IT Building',
      'Lusail MU C20 Foxhills',
    ],
    ongoingProjects: [
      'Sinjer Car Rent: MOI-regulated CCTV systems',
      'Al Jazi Real Estate (6 Compounds): CCTV system maintenance',
      'Residential & Commercial Building – Birkat Al Awamer: ELV and security systems',
    ],
  },
  {
    slug: 'residential',
    category: 'Residential Security',
    title: 'Residential',
    description:
      'Residential developments ranging from private villas to multi-unit compounds, delivered with a focus on safety, privacy, and long-term living environments.',
    image: '/images/projects/residential.jpeg',
    alt: 'Residential development',
    completedProjects: [
      'Sendian Compound',
      'Al Eeb Compound',
      'Villa 25 & 16 – Capri Garden',
      '4 Villa Compound',
      'Sendian Residence – Al Sadd',
      'Sendian Residence – Madinat Khalifa',
      '12 Flats – Madinat Khalifa',
    ],
    ongoingProjects: [
      'Private Palace – Al Rayane: Complete ELV systems including home automation',
      'Private Villa – Lusail: Security, structured cabling, and system integration',
      '22 Villa Compound: Distributed security architecture',
      'Residential Building (G+3+P) – Bin Mahmoud: Security and ELV systems',
    ],
  },
  {
    slug: 'healthcare',
    category: 'Healthcare Security',
    title: 'Healthcare',
    description:
      'Healthcare facilities delivered with discretion, reliability, and compliance, supporting safe and uninterrupted operation of clinics and pharmacies.',
    image: '/images/projects/healthcare.jpeg',
    alt: 'Healthcare facility',
    completedProjects: [
      'Eve Medical Clinic',
      'PMC Pharmacy – Floresta',
      'PMC Pharmacy – Rawdat Hamama',
    ],
    ongoingProjects: [
      'PMC Pharmacy – Floresta',
      'PMC Pharmacy – Izgawa',
      'PMC Pharmacy – Rawdat Hamama: Security and compliance systems maintenance',
    ],
  },
  {
    slug: 'education',
    category: 'Educational Facilities',
    title: 'Education',
    description:
      'Educational environments supported with systems designed to protect students, staff, and facilities while meeting regulatory and operational requirements.',
    image: '/images/projects/education.jpeg',
    alt: 'Educational facility',
    completedProjects: ['The Lebanese School'],
    ongoingProjects: ['Qatar Finland School', 'English Modern School – Al Khor'],
  },
  {
    slug: 'retail',
    category: 'Retail',
    title: 'Retail',
    description:
      'Active retail environments operating within high-footfall locations, delivered with minimal disruption and full regulatory compliance.',
    image: '/images/projects/retail.png',
    alt: 'Retail environment',
    completedProjects: ['B Square Mall – Thumama: CCTV upgrade and DIA integration'],
    ongoingProjects: [
      'Domasco Watch – Doha Festival City',
      'Domasco Watch – City Center',
      'Domasco Watch – Gharrafa Lulu',
      'Domasco Watch – D-Ring Lulu',
      'Domasco Watch – Asian Town: System installation, testing, and commissioning',
    ],
  },
  {
    slug: 'showrooms',
    category: 'Showrooms',
    title: 'Showrooms',
    description:
      'Specialized showroom spaces designed for premium brand presentation, customer experience, and secure operations across multiple locations.',
    image: '/images/projects/showrooms.png',
    alt: 'Showroom',
    completedProjects: ['Honda Showroom', 'GAC Showroom'],
    ongoingProjects: [],
  },
  {
    slug: 'industrial',
    category: 'Industrial Solutions',
    title: 'Industrial',
    description:
      'Industrial and logistics facilities delivered with large-scale coverage and asset-focused security systems suited for high-volume operational environments.',
    image: '/images/projects/industrial.jpeg',
    alt: 'Industrial facility',
    completedProjects: ['Gulf Warehousing Company'],
    ongoingProjects: [
      'Material Store – Birkat Al Awamer: MOI-regulated CCTV and perimeter monitoring',
      'TSS Material Store – Sanaiya Street 47: Industrial surveillance and compliance coordination',
      'Jaidah Car Yard – DSA: Security architecture, access control, and monitoring',
    ],
  },
];
