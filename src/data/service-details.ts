export interface SubService {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ServiceCategory {
  name: string;
  blurb: string;
  subServices: SubService[];
}

export interface ServiceDetail {
  slug: string;
  heroTitle: string;
  introHeading: string;
  introHighlight: string;
  introParagraphs: string[];
  categories: ServiceCategory[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'security-solutions',
    heroTitle: 'Security Solutions',
    introHeading: 'Comprehensive',
    introHighlight: 'Security Ecosystem',
    introParagraphs: [
      'At SISS, we deliver integrated security solutions that protect your people, assets, and operations. As an MOI-SSD certified provider, we design, install, and maintain state-of-the-art security systems that meet Qatar’s stringent regulatory requirements. From intelligent surveillance networks to sophisticated access control and cyber defense, our solutions provide 24/7 protection backed by three decades of expertise.',
      'Our security portfolio spans both physical and digital security infrastructure, ensuring comprehensive protection across all threat vectors. Whether you are securing a commercial facility, government building, or critical infrastructure, SISS delivers tailored solutions that scale with your needs.',
    ],
    categories: [
      {
        name: 'CCTV Surveillance',
        blurb:
          'Our CCTV surveillance solutions provide comprehensive visual security from design through deployment. With MOI-SSD certification and cutting-edge technology, we deliver intelligent video surveillance that protects your assets while ensuring regulatory compliance.',
        subServices: [
          {
            title: 'MOI-SSD Design and Approval',
            description:
              'Expert security system design services that meet Ministry of Interior Safety and Security Department standards. We handle complete documentation, technical specifications, and approval coordination to ensure your surveillance system complies with Qatar’s regulatory requirements.',
            image: '/images/services/detail-siss-service.jpeg',
            alt: 'MOI-SSD security system design and approval',
          },
          {
            title: 'MOI-SSD Inspection Approval and Certification',
            description:
              'Comprehensive inspection and certification services ensuring your installed systems meet all MOI-SSD requirements. We coordinate site inspections, conduct pre-testing, and manage the certification process to minimize delays.',
            image: '/images/services/detail-inspection.jpeg',
            alt: 'MOI-SSD inspection approval and certification',
          },
          {
            title: 'IP Cameras',
            description:
              'High-definition network cameras with advanced surveillance capabilities. Our solutions include dome, bullet, PTZ, and fisheye cameras with night vision, wide dynamic range, and weather-resistant housings.',
            image: '/images/services/detail-ip-camera.jpeg',
            alt: 'High-definition IP surveillance cameras',
          },
          {
            title: 'Video Management System',
            description:
              'Centralized platforms for monitoring and managing all cameras from a single interface. Features include intelligent analytics, automated alerts, multi-site management, and support for leading platforms like Milestone and Genetec.',
            image: '/images/services/detail-video.jpeg',
            alt: 'Video management system platform',
          },
          {
            title: 'ANPR Systems',
            description:
              'Centralized platforms for monitoring and managing all cameras from a single interface. Features include intelligent analytics, automated alerts, multi-site management, and support for leading platforms like Milestone and Genetec.',
            image: '/images/services/detail-video.jpeg',
            alt: 'ANPR license plate recognition system',
          },
          {
            title: 'Storage System',
            description:
              'Scalable storage infrastructure for continuous video recording with redundancy and reliability. Our solutions combine NVRs, SAN, and hybrid cloud storage to meet retention requirements while maintaining performance.',
            image: '/images/services/detail-data-center.jpeg',
            alt: 'Surveillance video storage system',
          },
        ],
      },
      {
        name: 'Access Control Solutions',
        blurb:
          'Intelligent physical security systems controlling who enters your facilities, when, and where. Our access control solutions combine cutting-edge authentication technology with centralized management for complete visibility and control.',
        subServices: [
          {
            title: 'Integrated Access Control Systems',
            description:
              'Comprehensive electronic access management using RFID cards, biometrics (fingerprint, facial recognition), PIN codes, and mobile credentials. Centralized software controls user permissions, access schedules, and real-time monitoring across multiple doors and locations with full audit trails for compliance.',
            image: '/images/services/detail-access-control.jpeg',
            alt: 'Electronic access control systems',
          },
          {
            title: 'Automated Turnstiles',
            description:
              'High-traffic pedestrian access control with tripod, swing, or full-height turnstiles. These systems enforce one-person-per-credential entry, reduce tailgating, and integrate with access control platforms for seamless authentication in lobbies, transit hubs, and high-security sites.',
            image: '/images/services/detail-access-control.jpeg',
            alt: 'Automated turnstiles',
          },
          {
            title: 'Biometric Access Systems',
            description:
              'Facial recognition terminals scanning at building entrances with digital displays — modern access control technology integrated with your security platform for touchless, high-assurance entry.',
            image: '/images/services/detail-access-control.jpeg',
            alt: 'Biometric access systems',
          },
          {
            title: 'Bollard System',
            description:
              'Automated rising bollards providing robust vehicle access control and perimeter protection. These crash-rated barriers retract into the ground when authorized, preventing unauthorized vehicle entry while maintaining pedestrian flow — ideal for embassies, government buildings, and critical infrastructure.',
            image: '/images/services/detail-access-control.jpeg',
            alt: 'Automated bollard system',
          },
          {
            title: 'Road Blockers',
            description:
              'Heavy-duty hydraulic barriers engineered to stop unauthorized vehicles including high-speed impacts. Our road blockers integrate with access control systems for automated operation, providing maximum security for high-risk facilities, checkpoints, and restricted zones with rapid deployment and retraction.',
            image: '/images/services/detail-access-control.jpeg',
            alt: 'Hydraulic road blockers',
          },
        ],
      },
      {
        name: 'Cyber Security Solutions',
        blurb:
          'Enterprise-grade digital defense architecture protecting your networks, data, and endpoints from evolving cyber threats. Our cybersecurity solutions combine advanced threat detection, prevention technologies, and compliance frameworks to safeguard your digital assets.',
        subServices: [
          {
            title: 'Network Security Design & Implementation',
            description:
              'Comprehensive network protection architecture including next-generation firewalls, intrusion detection/prevention systems (IDS/IPS), and secure network segmentation. Our solutions defend against unauthorized access, malware, and cyber attacks while maintaining network performance and enabling secure remote connectivity.',
            image: '/images/services/detail-cyber-security.jpeg',
            alt: 'Network security design and implementation',
          },
          {
            title: 'Data Security',
            description:
              'Advanced data protection strategies including encryption at rest and in transit, data loss prevention (DLP), and secure backup solutions. We safeguard sensitive information from unauthorized access, theft, and breaches while ensuring regulatory compliance and business continuity through robust data governance frameworks.',
            image: '/images/services/detail-cyber-security.jpeg',
            alt: 'Data security protection',
          },
          {
            title: 'Email Security',
            description:
              'Multi-layered email protection against phishing, malware, ransomware, and business email compromise (BEC). Our solutions include advanced threat detection, spam filtering, email encryption, and security awareness training to protect your organization from email-based cyber attacks — the most common attack vector.',
            image: '/images/services/detail-cyber-security.jpeg',
            alt: 'Email security protection',
          },
          {
            title: 'Mobile and End Point Security',
            description:
              'Comprehensive endpoint protection for laptops, desktops, mobile devices, and IoT endpoints. Our solutions include antivirus, anti-malware, mobile device management (MDM), endpoint detection and response (EDR), and application whitelisting to secure all devices accessing your network from modern threats.',
            image: '/images/services/detail-cyber-security.jpeg',
            alt: 'Mobile and endpoint security',
          },
          {
            title: 'Governance & Risk Compliance',
            description:
              'Strategic cybersecurity governance frameworks ensuring regulatory compliance and risk management. We provide security policy development, compliance audits (ISO 27001, NIST, PCI-DSS), risk assessments, and ongoing security posture monitoring to align your security program with business objectives and regulatory requirements.',
            image: '/images/services/detail-cyber-security.jpeg',
            alt: 'Governance and risk compliance',
          },
        ],
      },
    ],
  },
  {
    slug: 'infrastructure-solutions',
    heroTitle: 'Infrastructure Solutions',
    introHeading: 'Enterprise-Grade',
    introHighlight: 'Infrastructure Solutions',
    introParagraphs: [
      'At SISS, we deliver comprehensive infrastructure solutions that form the backbone of modern enterprises. From structured cabling systems to enterprise-grade data centers, our expert engineering team designs, deploys, and maintains critical IT infrastructure that ensures seamless connectivity, optimal performance, and business continuity. With decades of experience serving government institutions, commercial enterprises, and industrial facilities across Qatar, we provide scalable, future-proof infrastructure solutions tailored to your organization’s unique requirements.',
      'Our infrastructure portfolio spans copper and fiber cabling, data centers, and enterprise storage — ensuring comprehensive coverage across all connectivity and data layers. Whether you are building a commercial tower, government campus, or critical facility, SISS delivers tailored solutions that scale with your needs.',
    ],
    categories: [
      {
        name: 'Structured Cabling System',
        blurb:
          'Enterprise-grade network infrastructure with professional design, installation, and testing. Our structured cabling solutions deliver high-performance connectivity supporting current operations and future expansion with organized, maintainable cable management.',
        subServices: [
          {
            title: 'Design, Supply, Installation, and Testing',
            description:
              'Complete end-to-end cabling infrastructure services from site assessment through installation and certification testing. We provide quality materials and certified practices ensuring optimal network performance and industry standards compliance.',
            image: '/images/services/detail-nas.jpeg',
            alt: 'Structured cabling design and installation',
          },
          {
            title: 'Copper Cabling',
            description:
              'High-performance Cat5e, Cat6, and Cat6a copper cabling for voice, data, and PoE applications supporting speeds up to 10 Gbps for workstations, phones, cameras, and access points.',
            image: '/images/services/detail-nas.jpeg',
            alt: 'Copper network cabling',
          },
          {
            title: 'Fiber Cabling',
            description:
              'Single-mode and multi-mode fiber optic cabling for high-bandwidth connectivity. Our fiber solutions deliver speeds up to 100 Gbps for backbone connections, data centers, and campus networks.',
            image: '/images/services/detail-nas.jpeg',
            alt: 'Fiber optic cabling',
          },
          {
            title: 'Rack & Accessories',
            description:
              'Professional server racks, cabinets, and networking enclosures with complete accessories including cable management, patch panels, PDUs, cooling systems, and security features for organized equipment housing.',
            image: '/images/services/detail-nas.jpeg',
            alt: 'Server racks and accessories',
          },
          {
            title: 'Intelligent Patch Panel and Cable Management',
            description:
              'Smart patch panels with real-time monitoring and automated cable management. Our intelligent infrastructure provides visibility into port connectivity and cable tracing, reducing troubleshooting time and maintenance costs.',
            image: '/images/services/detail-nas.jpeg',
            alt: 'Intelligent patch panel and cable management',
          },
        ],
      },
      {
        name: 'Data Center Solution',
        blurb:
          'Data center infrastructure designed for reliability and built for growth. We deliver Tier-standard facilities ensuring maximum uptime, operational efficiency, and the scalability your business requires.',
        subServices: [
          {
            title: 'Design, Planning & Consultancy',
            description:
              'Comprehensive data center design services including site assessment, capacity planning, and technical consulting. We develop optimized architectures meeting TIA-942 and Uptime Institute standards while ensuring scalability and regulatory compliance.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'Data center design and consultancy',
          },
          {
            title: 'Infrastructure Solution for Server Room',
            description:
              'Complete server room infrastructure including raised flooring, environmental monitoring, fire suppression, and structured cabling. Our solutions provide secure, climate-controlled environments optimized for equipment performance and maintenance accessibility.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'Server room infrastructure',
          },
          {
            title: 'Access Control Solution',
            description:
              'Multi-layered physical security for data centers including biometric authentication, mantrap entries, and surveillance integration. Our systems provide audit trails, visitor management, and zone-based access control for critical infrastructure protection.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'Data center access control',
          },
          {
            title: 'UPS Supplies and Installation',
            description:
              'Uninterruptible power supply systems ensuring continuous operation during power failures. We design, supply, and install redundant UPS configurations with battery backup, providing clean power and seamless failover for mission-critical equipment.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'UPS supplies and installation',
          },
          {
            title: 'DC Build (Power, Cooling, and Infrastructure)',
            description:
              'Turnkey data center construction including power distribution, precision cooling, and infrastructure systems. Our builds integrate redundant electrical systems, hot/cold aisle containment, and environmental controls meeting Tier II-IV standards.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'Data center build',
          },
          {
            title: 'Management and Maintenance Services',
            description:
              'Proactive monitoring and maintenance services ensuring optimal data center performance. We provide 24/7 remote monitoring, preventive maintenance, performance optimization, and rapid response support minimizing downtime risks.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'Data center management and maintenance',
          },
          {
            title: 'Professional Cleaning',
            description:
              'Specialized data center cleaning services maintaining equipment performance and longevity. Our certified technicians perform raised floor cleaning, rack decontamination, and air filtration maintenance using ESD-safe methods and approved cleaning agents.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'Professional data center cleaning',
          },
          {
            title: 'DCIM and Container Data Center',
            description:
              'Data Center Infrastructure Management (DCIM) software for real-time monitoring and modular container data centers for rapid deployment. Our solutions provide asset tracking, capacity planning, and mobile infrastructure for temporary or remote operations.',
            image: '/images/services/detail-datacenter.jpeg',
            alt: 'DCIM and container data center',
          },
        ],
      },
      {
        name: 'Storage Solution',
        blurb:
          'Enterprise storage infrastructure ensuring data availability, protection, and recovery. Our storage experts design scalable, high-performance systems with comprehensive backup solutions and disaster recovery planning to safeguard your critical business data.',
        subServices: [
          {
            title: 'NAS box Configuration',
            description:
              'Network-attached storage systems providing centralized file sharing and data access across your organization. We configure enterprise NAS solutions with RAID protection, user permissions, and automated backup scheduling for reliable, accessible data storage.',
            image: '/images/services/detail-nas-1.jpeg',
            alt: 'NAS box configuration',
          },
          {
            title: 'SAN Implementation of storage area network',
            description:
              'High-performance storage area networks delivering block-level storage for mission-critical applications. Our SAN implementations provide fiber channel or iSCSI connectivity with redundant paths, ensuring low-latency access and maximum data availability for databases and virtualized environments.',
            image: '/images/services/detail-nas-1.jpeg',
            alt: 'Storage area network implementation',
          },
          {
            title: 'Backup — onsite, online cloud backup solution',
            description:
              'Multi-tiered backup strategies combining local and cloud storage for comprehensive data protection. We implement automated backup solutions with versioning, encryption, and offsite replication ensuring rapid recovery and protection against ransomware, hardware failures, and disasters.',
            image: '/images/services/detail-nas-1.jpeg',
            alt: 'Onsite and cloud backup solutions',
          },
          {
            title: 'Data Recovery Services',
            description:
              'Professional data recovery services for failed storage devices and corrupted systems. Our certified technicians recover data from hard drives, SSDs, RAID arrays, and tape systems using advanced tools and cleanroom facilities, minimizing downtime and data loss.',
            image: '/images/services/detail-nas-1.jpeg',
            alt: 'Data recovery services',
          },
          {
            title: 'Disaster Recovery planning for data center',
            description:
              'Comprehensive disaster recovery strategies ensuring business continuity during catastrophic events. We develop documented DR plans including backup sites, failover procedures, RTO/RPO targets, and regular testing to guarantee rapid recovery of critical systems and data.',
            image: '/images/services/detail-nas-1.jpeg',
            alt: 'Disaster recovery planning',
          },
        ],
      },
    ],
  },
  {
    slug: 'parking-systems',
    heroTitle: 'Parking Systems',
    introHeading: 'Advanced Vehicle',
    introHighlight: 'Management & Access Control Solutions',
    introParagraphs: [
      'At SISS, we deliver intelligent parking management solutions that optimize vehicle flow, enhance security, and improve user experience across commercial, government, and residential facilities. Our comprehensive parking systems integrate advanced ANPR technology, automated barriers, smart sensors, and intuitive management software to create seamless parking operations. From shopping malls and airports to government buildings and residential complexes, our MOI-approved parking solutions provide real-time occupancy tracking, automated payment processing, and complete access control for efficient, secure parking management across Qatar.',
      'Our parking portfolio spans management systems, real-time guidance, and LPR enforcement — ensuring comprehensive coverage across every stage of the vehicle journey. Whether you are operating a shopping mall, airport, or residential complex, SISS delivers tailored solutions that scale with your needs.',
    ],
    categories: [
      {
        name: 'Parking Management Systems',
        blurb:
          'Comprehensive parking management infrastructure combining hardware and software for complete facility control. Our integrated systems include ANPR cameras, automated barriers, ticketing machines, and centralized management software that monitors occupancy, processes payments, and controls vehicle access. Designed for shopping malls, commercial buildings, airports, and government facilities, our parking management solutions reduce operational costs, prevent unauthorized access, and provide detailed analytics for optimized facility management.',
        subServices: [
          {
            title: 'Sensors, Barriers and Gates',
            description:
              'Vehicle detection and automated barriers for controlled entry/exit, anti-tailgating, and safe traffic flow.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking sensors, barriers and gates',
          },
          {
            title: 'ANPR Cameras',
            description:
              'High-accuracy license plate capture for ticketless entry/exit, whitelist/blacklist access, and audit logs.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking ANPR cameras',
          },
          {
            title: 'Ticketing Machines',
            description:
              'Entry/exit kiosks for ticket issuance, validation, and QR/barcode scanning with clear user guidance.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking ticketing machines',
          },
          {
            title: 'Access Control Devices',
            description:
              'RFID/QR readers, intercoms, and controller panels enabling secure access and staff override at gates.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking access control devices',
          },
          {
            title: 'ANPR Systems',
            description:
              'End-to-end plate recognition workflows integrating cameras, barriers, and software for automated enforcement.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'ANPR enforcement systems',
          },
          {
            title: 'Parking Management Software',
            description:
              'Central dashboard for occupancy, device status, permits, alerts, reporting, and multi-site control.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking management software',
          },
          {
            title: 'Payment Processing Software',
            description:
              'Cashless payments via kiosks, mobile, or cards with receipts, validations, and secure transaction logs.',
            image: '/images/services/detail-parking-2.jpeg',
            alt: 'Parking payment processing',
          },
        ],
      },
      {
        name: 'Parking Guidance Systems',
        blurb:
          'Real-time parking space guidance systems that improve user experience and reduce search time. Using advanced sensors and dynamic signage, our parking guidance solutions direct drivers to available spaces quickly and efficiently. LED displays show real-time availability by zone, floor, or section, while mobile integration provides pre-arrival information. Ideal for large multi-level facilities, airports, and shopping complexes where quick space location is critical for customer satisfaction.',
        subServices: [
          {
            title: 'Parking Space Sensors',
            description:
              'Ultrasonic or camera sensors per space detecting occupancy and transmitting status in real time.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking space sensors',
          },
          {
            title: 'Entry/Exit Sensors',
            description:
              'Gate sensors counting vehicles in/out to maintain accurate total occupancy for facility-wide availability.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Entry and exit sensors',
          },
          {
            title: 'Signage and Displays',
            description:
              'LED signs at entry, floors, and intersections showing available spaces by zone with color-coded guidance.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Parking signage and displays',
          },
          {
            title: 'Central Management Software',
            description:
              'Backend platform aggregating sensor data, managing displays, generating analytics, and monitoring system health.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Guidance central management software',
          },
          {
            title: 'Integration and APIs',
            description:
              'APIs linking guidance systems with payment, reservations, mobile apps, and building management platforms.',
            image: '/images/services/detail-parking.jpeg',
            alt: 'Guidance system integrations and APIs',
          },
        ],
      },
      {
        name: 'LPR Solutions',
        blurb:
          'Automated license plate recognition for access control, parking, and security enforcement. High-accuracy capture in all conditions with real-time database matching and audit trails.',
        subServices: [
          {
            title: 'ANPR Cameras',
            description:
              'Specialized high-resolution cameras with IR illumination capturing plates at speed in day/night conditions.',
            image: '/images/services/detail-video-service.jpeg',
            alt: 'LPR ANPR cameras',
          },
          {
            title: 'Gate Barriers',
            description:
              'Automated barriers integrated with ANPR for hands-free vehicle access based on whitelist or payment status.',
            image: '/images/services/detail-video-service.jpeg',
            alt: 'ANPR gate barriers',
          },
          {
            title: 'Video Intercom panel',
            description:
              'Entry panel with video call for manual override, visitor communication, and secondary verification at gates.',
            image: '/images/services/detail-video-service.jpeg',
            alt: 'Video intercom panel',
          },
          {
            title: 'Optical Character Recognition (OCR) Software',
            description:
              'AI-powered engine converting plate images to text with multi-language support and error correction algorithms.',
            image: '/images/services/detail-video-service.jpeg',
            alt: 'OCR recognition software',
          },
          {
            title: 'ANPR Server',
            description:
              'Central processing server running recognition engine, managing databases, logs, and integration with access control.',
            image: '/images/services/detail-video-service.jpeg',
            alt: 'ANPR processing server',
          },
        ],
      },
    ],
  },
  {
    slug: 'automation-solutions',
    heroTitle: 'Automation Solutions',
    introHeading: 'Smart',
    introHighlight: 'Building & Home Automation Solutions',
    introParagraphs: [
      'Transform your facility into an intelligent, energy-efficient environment with integrated automation solutions. Our building management systems seamlessly control HVAC, lighting, access control, and energy systems from a unified platform. Using IoT sensors, AI-driven analytics, and predictive maintenance, we optimize comfort, reduce operational costs, and enhance sustainability across residential, commercial, and industrial properties.',
      'From smart home automation to enterprise building management systems, our solutions adapt to your needs. Whether you’re automating a single residential property or managing a complex commercial facility, our scalable automation infrastructure provides centralized control, real-time monitoring, and data-driven insights for intelligent building operations.',
    ],
    categories: [
      {
        name: 'Home Automation Systems',
        blurb:
          'Smart home automation for lighting, curtains, climate, entertainment, and security from one interface. Create scenes, schedules, and remote control to boost comfort, efficiency, and safety.',
        subServices: [
          {
            title: 'Light Control',
            description:
              'Control lights by app, keypad, motion, or scenes with dimming and energy-saving schedules.',
            image: '/images/services/detail-automation.png',
            alt: 'Smart light control',
          },
          {
            title: 'Curtain Control',
            description:
              'Automate blinds and curtains with timers, daylight sensors, and one-touch scenes for privacy and comfort.',
            image: '/images/services/detail-automation.png',
            alt: 'Automated curtain control',
          },
          {
            title: 'Audio',
            description:
              'Multi-room audio with zone control, source selection, and voice/app control for seamless playback.',
            image: '/images/services/detail-automation.png',
            alt: 'Multi-room audio automation',
          },
          {
            title: 'TV Control',
            description:
              'Unified remote control for TVs and media devices with simple scenes like Movie Night.',
            image: '/images/services/detail-automation.png',
            alt: 'Smart TV control',
          },
          {
            title: 'Distribution & Tiling',
            description:
              'Central AV distribution to route TV and media to multiple rooms with clean, clutter-free installations.',
            image: '/images/services/detail-automation.png',
            alt: 'AV distribution and tiling',
          },
          {
            title: 'AC Control',
            description:
              'Smart thermostat and HVAC control with schedules, occupancy logic, and app-based temperature management.',
            image: '/images/services/detail-automation.png',
            alt: 'Smart AC control',
          },
          {
            title: 'Security Access Control',
            description:
              'Integrate door locks, video doorbells, and sensors for secure entry, alerts, and remote monitoring.',
            image: '/images/services/detail-automation.png',
            alt: 'Security and access control automation',
          },
          {
            title: 'Scheduling & Access Levels',
            description:
              'Set user permissions and timed access for family, guests, and staff with activity logs.',
            image: '/images/services/detail-automation.png',
            alt: 'Scheduling and access levels',
          },
        ],
      },
    ],
  },
  {
    slug: 'communication-solutions',
    heroTitle: 'Communication Solutions',
    introHeading: 'Enterprise',
    introHighlight: 'Communication Systems',
    introParagraphs: [
      'Unified communication platforms integrating voice, video, messaging, and collaboration tools across all devices. From IP telephony and video conferencing to team collaboration software, our scalable solutions enhance productivity, reduce costs, and support hybrid work environments with enterprise-grade reliability.',
      'Our communication portfolio includes IP-PBX systems, SIP trunking, video conferencing rooms, unified messaging, and contact center solutions. Whether you’re upgrading legacy phone systems or building new communication infrastructure, we design, deploy, and support solutions from leading platforms like Cisco, Microsoft Teams, and Zoom that keep your teams connected and collaborative.',
    ],
    categories: [
      {
        name: 'Unified Communication',
        blurb:
          'Enterprise voice, video, and collaboration platforms unifying your communications infrastructure. From IP telephony and PABX to multimedia conferencing and instant messaging, seamlessly connected and scalable.',
        subServices: [
          {
            title: 'Design, Supply, and Installation',
            description:
              'End-to-end unified communication deployment from requirements analysis to system commissioning and user training.',
            image: '/images/services/detail-unified.png',
            alt: 'Unified communication design and installation',
          },
          {
            title: 'IP Telephony',
            description:
              'VoIP phone systems delivering HD voice over data networks with reduced costs and advanced call features.',
            image: '/images/services/detail-unified.png',
            alt: 'IP telephony',
          },
          {
            title: 'PABX system',
            description:
              'IP-PBX platforms managing extensions, routing, voicemail, and call queues with unified management interfaces.',
            image: '/images/services/detail-unified.png',
            alt: 'PABX system',
          },
          {
            title: 'Voice / video telephony',
            description:
              'HD voice and video calling integrated across desk phones, softphones, and mobile clients for rich communication.',
            image: '/images/services/detail-unified.png',
            alt: 'Voice and video telephony',
          },
          {
            title: 'Fixed-mobile converged voice / multimedia VPN',
            description:
              'FMC solutions extending corporate phone systems to mobile devices via secure VPN for seamless roaming.',
            image: '/images/services/detail-unified.png',
            alt: 'Fixed-mobile converged voice',
          },
          {
            title: 'Multimedia conferencing',
            description:
              'High-quality video conferencing rooms with cameras, displays, and audio equipment for remote collaboration.',
            image: '/images/services/detail-unified.png',
            alt: 'Multimedia conferencing',
          },
          {
            title: 'Collaboration, Calendaring, Address book, Instant messaging',
            description:
              'Unified platforms integrating chat, presence, calendars, and contacts for real-time team collaboration.',
            image: '/images/services/detail-unified.png',
            alt: 'Collaboration and instant messaging',
          },
        ],
      },
      {
        name: 'Enterprise Network Solutions',
        blurb:
          'Robust network infrastructure with enterprise-grade servers, switches, routers, and wireless systems. From hardware deployment to virtualization and secure connectivity, scalable and reliable foundations for your IT operations.',
        subServices: [
          {
            title: 'Server, workstation Installation & Configuration',
            description:
              'Enterprise server and workstation deployment with OS installation, domain integration, security hardening, and performance optimization.',
            image: '/images/services/detail-network.png',
            alt: 'Server and workstation installation',
          },
          {
            title: 'Switches, Routers Installation & Configuration',
            description:
              'Core and edge network equipment setup with VLAN configuration, routing protocols, QoS policies, and redundancy for high availability.',
            image: '/images/services/detail-network.png',
            alt: 'Switch and router installation',
          },
          {
            title: 'Firewall and Networking Solution',
            description:
              'Next-generation firewall deployment with intrusion prevention, application control, VPN, and unified threat management for network security.',
            image: '/images/services/detail-network.png',
            alt: 'Firewall and networking solution',
          },
          {
            title: 'Wireless and Remote Connectivity Solution',
            description:
              'Enterprise WiFi infrastructure with access points, controllers, captive portals, and secure VPN for remote workforce connectivity.',
            image: '/images/services/detail-network.png',
            alt: 'Wireless and remote connectivity',
          },
          {
            title: 'Desktop, Laptop, and Printer Solution',
            description:
              'End-user device procurement, deployment, and configuration with software installation, security policies, and printer network integration.',
            image: '/images/services/detail-network.png',
            alt: 'End-user device solutions',
          },
          {
            title: 'Server and Data Center Virtualization',
            description:
              'VMware, Hyper-V virtualization platforms consolidating workloads, enabling resource pooling, HA clustering, and disaster recovery capabilities.',
            image: '/images/services/detail-network.png',
            alt: 'Server and data center virtualization',
          },
        ],
      },
    ],
  },
  {
    slug: 'audio-visual-solutions',
    heroTitle: 'Audio-Visual Solutions',
    introHeading: 'Professional',
    introHighlight: 'Audio-Visual Solutions',
    introParagraphs: [
      'Professional audio-visual systems for conference rooms, auditoriums, and digital signage with HD displays, immersive sound, and intelligent cameras. Integrated solutions enabling seamless presentations, hybrid meetings, and engaging visual experiences with enterprise-grade reliability and unified control.',
      'Our AV portfolio spans boardroom video conferencing, auditorium presentation systems, interactive displays, distributed audio, digital signage networks, and control room video walls. Whether you need a simple huddle space or a complex multi-room installation, we deliver end-to-end solutions from leading manufacturers like Cisco, Crestron, and Polycom that combine reliability, ease of use, and exceptional performance.',
    ],
    categories: [
      {
        name: 'Audio Visual Systems',
        blurb:
          'Integrated audio systems providing crystal-clear sound reinforcement for commercial spaces. From distributed speakers and amplifiers to centralized control, ensuring optimal audio coverage and intelligibility.',
        subServices: [
          {
            title: 'Speakers',
            description:
              'High-fidelity ceiling, wall-mounted, and column speakers designed for clear voice paging and background music distribution.',
            image: '/images/services/detail-speakers.jpeg',
            alt: 'Commercial speakers',
          },
          {
            title: 'Sound System',
            description:
              'Complete audio solutions integrating microphones, mixers, and DSPs for seamless sound management in meeting rooms and public areas.',
            image: '/images/services/detail-speakers.jpeg',
            alt: 'Sound system integration',
          },
          {
            title: 'Amplifier',
            description:
              'Power amplifiers delivering reliable, high-efficiency audio distribution across multiple zones with overload protection.',
            image: '/images/services/detail-speakers.jpeg',
            alt: 'Audio amplifiers',
          },
          {
            title: 'Control Panel',
            description:
              'Intuitive wall-mounted or touch-panel interfaces for easy volume adjustment, source selection, and zone management.',
            image: '/images/services/detail-speakers.jpeg',
            alt: 'Audio control panels',
          },
        ],
      },
      {
        name: 'Video Solutions',
        blurb:
          'Advanced video display and conferencing systems tailored for modern communication. From large-scale video walls and IPTV to integrated meeting room solutions, delivering impactful visual experiences.',
        subServices: [
          {
            title: 'Video Walls Design & Installation',
            description:
              'Custom LED and LCD video walls for control rooms, lobbies, and auditoriums with high-resolution seamless displays.',
            image: '/images/services/detail-wall-video.jpeg',
            alt: 'Video wall design and installation',
          },
          {
            title: 'Professional Installation of the Video Solution',
            description:
              'Expert mounting, cabling, and calibration of video systems ensuring optimal viewing angles, safety, and performance.',
            image: '/images/services/detail-wall-video.jpeg',
            alt: 'Professional video installation',
          },
          {
            title: 'Smart TV',
            description:
              'Commercial-grade smart displays with built-in content management, screen mirroring, and business apps for digital signage.',
            image: '/images/services/detail-wall-video.jpeg',
            alt: 'Commercial smart TVs',
          },
          {
            title: 'IPTV',
            description:
              'Network-based television systems distributing live TV and video on demand across enterprise LANs to any endpoint.',
            image: '/images/services/detail-wall-video.jpeg',
            alt: 'Enterprise IPTV',
          },
          {
            title: 'Meeting Room Solutions',
            description:
              'Integrated presentation systems with wireless sharing, touch displays, and room scheduling panels for seamless collaboration.',
            image: '/images/services/detail-wall-video.jpeg',
            alt: 'Meeting room solutions',
          },
          {
            title: 'Video Conferencing Solutions',
            description:
              'HD video conferencing kits with auto-tracking cameras and microphone arrays certified for Teams, Zoom, and Webex.',
            image: '/images/services/detail-wall-video.jpeg',
            alt: 'Video conferencing solutions',
          },
        ],
      },
    ],
  },
  {
    slug: 'other-solutions',
    heroTitle: 'Maintenance And Others',
    introHeading: 'Specialized',
    introHighlight: 'Technology Solutions',
    introParagraphs: [
      'Ensure the longevity and peak performance of your critical infrastructure with our comprehensive maintenance and specialized technology services. From MOI-SSD certified CCTV maintenance to enterprise-grade cloud solutions, we provide the ongoing support and advanced systems needed to keep your operations running smoothly. Our dedicated support teams deliver proactive care, rapid response, and regulatory compliance for peace of mind.',
      'Beyond maintenance, we empower your business with next-generation connectivity and cloud infrastructure. Our portfolio includes robust intercom systems, secure smart WiFi networks, and scalable Microsoft Azure cloud solutions tailored to your specific operational goals. Whether upgrading legacy systems or migrating to the cloud, SISS delivers end-to-end expertise that maximizes reliability and security.',
    ],
    categories: [
      {
        name: 'Annual Maintenance Contracts (AMC)',
        blurb:
          'Comprehensive service level agreements ensuring 24/7 system availability, preventative maintenance, and priority support for all your security and IT assets.',
        subServices: [
          {
            title: 'CCTV Maintenance (MOI-SSD)',
            description:
              'Certified maintenance services for surveillance systems ensuring continuous compliance with MOI-SSD regulations, optimal camera performance, and recording integrity.',
            image: '/images/services/detail-others.jpeg',
            alt: 'CCTV maintenance under MOI-SSD',
          },
          {
            title: 'ELV System Maintenance',
            description:
              'Proactive maintenance for Extra Low Voltage systems including access control, fire alarms, and PA systems to prevent downtime and extend equipment life.',
            image: '/images/services/detail-others.jpeg',
            alt: 'ELV system maintenance',
          },
          {
            title: 'IT System Maintenance',
            description:
              'End-to-end IT support covering servers, workstations, and networks with regular updates, patches, and troubleshooting to ensure business continuity.',
            image: '/images/services/detail-others.jpeg',
            alt: 'IT system maintenance',
          },
        ],
      },
      {
        name: 'Intercom System',
        blurb:
          'Secure voice and video communication solutions for residential and commercial entry management, enhancing building security and visitor verification.',
        subServices: [
          {
            title: 'Design, Supply and Installation',
            description:
              'Custom design and deployment of intercom architectures tailored to building layout, integrating seamlessly with existing access control and security networks.',
            image: '/images/services/detail-other-2.jpeg',
            alt: 'Intercom design and installation',
          },
          {
            title: 'IP Based Intercom System',
            description:
              'Networked intercom solutions leveraging existing IP infrastructure for scalable, clear communication across multiple buildings and remote management.',
            image: '/images/services/detail-other-2.jpeg',
            alt: 'IP based intercom system',
          },
          {
            title: 'Video Intercom System',
            description:
              'High-definition video entry systems providing visual verification of visitors with night vision and wide-angle lenses for enhanced security.',
            image: '/images/services/detail-other-2.jpeg',
            alt: 'Video intercom system',
          },
          {
            title: 'Video Intercom System with Mobile App',
            description:
              'Remote entry management allowing users to see, speak, and unlock doors for visitors directly from their smartphones, anywhere in the world.',
            image: '/images/services/detail-other-2.jpeg',
            alt: 'Video intercom with mobile app',
          },
          {
            title: 'IP Intercom Adaptors & Door Stations',
            description:
              'Versatile hardware integrating legacy analog door stations into modern IP networks, protecting investment while upgrading functionality.',
            image: '/images/services/detail-other-2.jpeg',
            alt: 'IP intercom adaptors and door stations',
          },
        ],
      },
      {
        name: 'Smart WiFi Solution',
        blurb:
          'Enterprise-grade wireless networks delivering high-speed, secure, and reliable connectivity with seamless roaming and guest management.',
        subServices: [
          {
            title: 'Design, Supply, and Installation',
            description:
              'End-to-end execution of wireless projects, from initial RF site surveys and network design to hardware supply and certified installation. Our team ensures precise AP placement, cabling, and configuration for maximum coverage and throughput.',
            image: '/images/services/detail-others-3.png',
            alt: 'Smart WiFi design and installation',
          },
          {
            title: 'Controller based solution',
            description:
              'Centralized wireless LAN controllers managing access points for optimized traffic flow, interference mitigation, and unified network policy enforcement.',
            image: '/images/services/detail-others-3.png',
            alt: 'Controller-based WiFi solution',
          },
          {
            title: 'Wireless Network Security',
            description:
              'Robust wireless defense protocols including WPA3 encryption, rogue AP detection, and intrusion prevention to protect your network airwaves.',
            image: '/images/services/detail-others-3.png',
            alt: 'Wireless network security',
          },
          {
            title: 'Guest Access',
            description:
              'Secure captive portals for visitor connectivity, separating guest traffic from internal networks while providing branded login experiences.',
            image: '/images/services/detail-others-3.png',
            alt: 'Guest WiFi access',
          },
          {
            title: 'End to end WLAN Solution',
            description:
              'Complete wireless lifecycle services from site surveys and planning to hardware installation, configuration, and post-deployment optimization.',
            image: '/images/services/detail-others-3.png',
            alt: 'End to end WLAN solution',
          },
        ],
      },
      {
        name: 'Cloud Solutions',
        blurb:
          'Scalable cloud infrastructure services enabling digital transformation, remote collaboration, and data redundancy without heavy hardware investment.',
        subServices: [
          {
            title: 'Microsoft Azure',
            description:
              'Comprehensive Azure cloud services including virtual machines, storage, and app deployment, managed and optimized for your enterprise needs.',
            image: '/images/services/detail-others-4.webp',
            alt: 'Microsoft Azure cloud solutions',
          },
          {
            title: 'Office 365 Solutions',
            description:
              'Cloud-based productivity suite integrating Outlook, Teams, OneDrive, and SharePoint for seamless collaboration and secure file management anywhere.',
            image: '/images/services/detail-others-4.webp',
            alt: 'Office 365 solutions',
          },
          {
            title: 'Cisco Meraki',
            description:
              'Cloud-managed IT solutions including wireless, switching, and security appliances controlled via a centralized, intuitive web-based dashboard.',
            image: '/images/services/detail-others-4.webp',
            alt: 'Cisco Meraki cloud-managed IT',
          },
          {
            title: 'Google Cloud',
            description:
              'High-performance cloud infrastructure for computing, data analytics, and machine learning, tailored for scalability and innovation.',
            image: '/images/services/detail-others-4.webp',
            alt: 'Google Cloud solutions',
          },
        ],
      },
    ],
  },
];
