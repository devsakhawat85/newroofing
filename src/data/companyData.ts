import { RoofingProject, RoofingService, FaqItem, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'Lawrence and Sons Roofing Inc',
  shortName: 'Lawrence & Sons Roofing',
  tagline: 'Trust Us With Your Next Project',
  heroSubtitle: 'Residential and Commercial Roofing Contractor in Phoenix, Arizona',
  phone: '(480) 330-1646',
  phoneClean: '4803301646',
  email: 'Ken@LawrenceandSonsRoofing.com',
  location: 'Phoenix, Arizona, United States',
  serviceArea: 'Greater Phoenix Metropolitan Area',
  hoursWeekday: 'Monday – Friday: 7:00 AM – 5:00 PM',
  hoursWeekend: 'Saturday – Sunday: Closed',
  inspectionFee: '$75',
  logoUrl: '/images/logo.jpg',
  establishedYear: '2023',
};

export const AUTHENTIC_PROJECTS: RoofingProject[] = [
  {
    id: 'project-metal-standing-seam',
    title: 'Modern Desert Standing-Seam Metal Roof & Fascia',
    category: 'metal',
    categoryLabel: 'Standing-Seam Metal',
    image: '/images/project-2.jpg',
    location: 'Phoenix, AZ',
    description:
      'Engineered standing-seam metal roofing system paired with custom architectural metal fascia, built for modern desert thermal performance and extreme UV resistance.',
    details: [
      'Standing seam architectural panels with concealed fasteners',
      'Custom matching dark metal fascia along all perimeter eaves',
      'High solar-reflectance finish engineered for Arizona desert heat',
      'Class-A fire resistance and high-wind endurance'
    ]
  },
  {
    id: 'project-tile-underlayment',
    title: 'Southwestern Tile Roofing & Underlayment Replacement',
    category: 'tile',
    categoryLabel: 'Tile & Underlayment',
    image: '/images/project-3.jpg',
    location: 'Phoenix, AZ',
    description:
      'Complete tile roof renewal and heavy-duty synthetic underlayment replacement on an authentic Southwestern desert estate, preserving classic desert architectural aesthetics.',
    details: [
      'Comprehensive tile lift, inspection, and perimeter salvage',
      'Premium multi-ply high-temperature synthetic underlayment',
      'Reinforced valley flashing, lead boot plumbing collars, and eave closures',
      'Precision reinstallation and mortar-sealed ridge caps'
    ]
  },
  {
    id: 'project-residential-shingle',
    title: 'New Architectural Shingle Roof Installation',
    category: 'shingle',
    categoryLabel: 'Shingle Roofing',
    image: '/images/project-1.jpg',
    location: 'Phoenix, AZ',
    description:
      'High-definition architectural dimensional asphalt shingles installed on a single-story residential home with enhanced ventilation and clean perimeter drip edge.',
    details: [
      'Dimensional asphalt shingles with algae and wind protection',
      'Ice and water shield barrier installed at all eaves and penetrations',
      'Ridge vent system integrated to maximize desert attic ventilation',
      'Perimeter cleanup and magnetic nail sweep around entire yard'
    ]
  }
];

export const AUTHENTIC_SERVICES: RoofingService[] = [
  {
    id: 'standing-seam-metal',
    title: 'Standing Seam Metal Roofing',
    subtitle: 'Engineered durability & modern architectural metal fascia',
    description:
      'We install standing seam metal roofing and metal fascia designed to withstand the harshest Arizona sun, thermal cycling, and monsoon winds. Concealed fasteners provide a sleek architectural appearance and superior weather-tight security.',
    bullets: [
      'Concealed-fastener standing seam profile',
      'Custom fabricated matching metal fascia',
      'Maximum UV reflection & thermal efficiency',
      'Exceptional lifespan with virtually zero maintenance'
    ],
    image: '/images/project-2.jpg',
    badge: 'Modern & High Performance',
    category: 'metal'
  },
  {
    id: 'tile-roofing-underlayment',
    title: 'Tile Roofing & Underlayment Replacement',
    subtitle: 'Protecting Phoenix tile roofs where heat destroys underlayment',
    description:
      'Tile roofs in Arizona can last for decades, but the underlying moisture barrier degrades under extreme summer attic heat. We install new tile and perform complete "tile R&R" (remove & replace) with premium, heat-rated underlayment.',
    bullets: [
      'Tile removal, preservation & precision relaying',
      'High-temperature rated synthetic underlayment',
      'Valley metal and perimeter flashing replacement',
      'Mortar ridge caps and bird stop installation'
    ],
    image: '/images/project-3.jpg',
    badge: 'Arizona Essential',
    category: 'tile'
  },
  {
    id: 'shingle-roofing',
    title: 'Architectural Shingle Roofing',
    subtitle: 'Proven protection for new & existing residential homes',
    description:
      'We install high-grade dimensional shingle roofs on both new construction and existing homes. Our certified installation techniques ensure optimal nail placement, storm-resistant sealing, and long-lasting curb appeal.',
    bullets: [
      'High-definition architectural dimensional shingles',
      'Complete tear-off, deck inspection & clean prep',
      'High-grade synthetic felt underlayment barrier',
      'Attic ventilation optimization to protect roofing life'
    ],
    image: '/images/project-1.jpg',
    badge: 'Popular & Cost-Effective',
    category: 'shingle'
  },
  {
    id: 'roof-inspections',
    title: 'Detailed Roof & Insurance Inspections',
    subtitle: 'Professional assessment for $75 + insurance paperwork filing',
    description:
      'Whether evaluating monsoon damage or pre-purchase condition, we provide an exhaustive, honest roof inspection for $75. If you are submitting a claim, we offer additional direct filing assistance with your insurance carrier.',
    bullets: [
      'Comprehensive $75 multi-point inspection report',
      'Detailed photographic documentation of tile, shingle, or metal condition',
      'Direct paperwork filing assistance with your insurance company',
      'Transparent estimates with zero hidden surprises'
    ],
    image: '/images/project-3.jpg',
    badge: '$75 Detailed Inspection',
    category: 'inspection'
  }
];

export const AUTHENTIC_FAQS: FaqItem[] = [
  {
    question: 'Do you provide homeowners insurance inspections?',
    answer:
      'Yes, we provide a detailed inspection for $75 with an additional cost to file the paperwork directly with your insurance company. Our thorough evaluation documents wind, hail, or heat wear and provides actionable documentation.',
    category: 'Inspections & Insurance'
  },
  {
    question: 'Do I have to replace gutters and downspouts?',
    answer:
      'As long as they are in good shape and are not in need of fixing or replacing, then we can work around them during your roof installation or replacement.',
    category: 'Installation'
  },
  {
    question: 'What if my newly installed roof leaks?',
    answer:
      'We stand by our work, so if there are any leaks in the new roof, we cover the repair cost to the roof and any damage caused by the leak. Your peace of mind and home protection are our top priorities.',
    category: 'Warranty & Guarantee'
  },
  {
    question: 'What roofing materials do you install?',
    answer:
      'We specialize in architectural shingle roofs (on both new and existing homes), standing-seam metal roofing with custom metal fascia, and Southwestern concrete or clay tile roofing including complete underlayment replacement.',
    category: 'Services'
  },
  {
    question: 'How do you help homeowners select the right roofing plan?',
    answer:
      'We provide a full consultation to explain all your available options so that you can choose the roofing plan that’s right for your home or business. We work directly with you, adhere to your personal needs, and stay in constant contact throughout the entire project.',
    category: 'Process'
  },
  {
    question: 'Who leads and manages the roofing projects?',
    answer:
      'Lawrence and Sons Roofing is led directly by company President Frank Lawrence and Vice President Ken Lawrence. You receive direct executive communication and family-owned accountability from consultation to final cleanup.',
    category: 'Company'
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: 'Frank Lawrence',
    role: 'President',
    bio: 'Founder and President of Lawrence and Sons Roofing Inc. Frank leads company operations with decades of hands-on roofing craftsmanship, ensuring every residential and commercial installation adheres to strict Arizona building standards and safety codes.'
  },
  {
    name: 'Ken Lawrence',
    role: 'Vice President',
    bio: 'Vice President overseeing customer relations, project consultations, and daily field execution. Ken serves as the primary contact for property owners, delivering transparent communication, on-site supervision, and dedicated customer care.',
    contact: '(480) 330-1646'
  }
];

export const CORE_VALUES = [
  {
    title: 'Roofing Knowledge & Quality Equipment',
    description:
      'We combine in-depth technical roofing knowledge with the highest quality parts and equipment to ensure your roof withstands extreme desert thermal cycles.'
  },
  {
    title: 'Individualized Roofing Consultations',
    description:
      'No one-size-fits-all formulas. We explain every available material, warranty, and ventilation option so you make the best decision for your property and budget.'
  },
  {
    title: 'Constant Client Communication',
    description:
      'We stay in constant communication with our customers until the job is done. You are always informed, valued, and directly connected with company leadership.'
  },
  {
    title: 'Satisfaction & Leak Repair Guarantee',
    description:
      'We do not leave the job until it is finished and you are satisfied. In the rare event of a leak on a new roof, we cover the roof repair and any resulting leak damage.'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Request a Free Quote',
    description: 'Reach out online or call/text (480) 330-1646. We respond promptly to schedule an on-site consultation or detailed inspection.'
  },
  {
    number: '02',
    title: 'Discuss Your Roofing Needs',
    description: 'We meet with you at your property, examine your existing roof condition, and discuss your functional requirements and aesthetic preferences.'
  },
  {
    number: '03',
    title: 'Review Available Options',
    description: 'We provide an individualized consultation breaking down materials (shingle, standing seam metal, or tile underlayment), timelines, and clear transparent pricing.'
  },
  {
    number: '04',
    title: 'Complete the Roofing Project',
    description: 'Our skilled craftsmen execute the installation using trained techniques, high-grade safety equipment, and respectful property protection.'
  },
  {
    number: '05',
    title: 'Review the Finished Work',
    description: 'We conduct a thorough final walkthrough and magnetic nail sweep with you, ensuring complete satisfaction before concluding the job.'
  }
];
