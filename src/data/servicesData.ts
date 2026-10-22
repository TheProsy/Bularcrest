export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  longDescription: string;
  highlights: string[];
  features: string[];
  icon: string;
  imagePrompt: string;
  sampleDeliverables: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "building-construction",
    slug: "building-construction",
    title: "Building Construction",
    shortDescription: "We help you build and improve buildings.",
    tagline: "Quality building from foundation to roof, without cutting corners.",
    longDescription:
      "Whether you are building your family home, a block of rental flats, a duplex, or commercial offices in Nigeria, Bularcrest manages your building project from start to finish. We work with certified site engineers, use solid tested building materials, and give you honest progress reports so your money is well spent.",
    highlights: [
      "Residential duplexes & bungalows",
      "Commercial & office construction",
      "Structural renovations & extensions",
      "Rigorous quality supervision",
    ],
    features: [
      "Proper soil test and foundation planning suitable for Nigerian terrain",
      "Direct sourcing of genuine Dangote/BUA cement, quality sharp sand, and tested steel rods",
      "Weekly video and photographic site updates for diaspora and busy clients",
      "Clear milestone-based budget stages — no sudden surprises",
    ],
    icon: "Hammer",
    imagePrompt: "Active construction site of a modern Nigerian home with concrete columns, quality blockwork, and professional site engineers in safety gear",
    sampleDeliverables: [
      "Solid Foundation & DPC",
      "Reinforced Columns & Lintels",
      "German Floor Casting",
      "Solid Blockwork & Roofing",
    ],
  },
  {
    id: "building-design",
    slug: "building-design",
    title: "Building Design",
    shortDescription: "We help plan how your building should look and work.",
    tagline: "Practical architectural designs built for Nigerian climate, natural ventilation, and everyday living.",
    longDescription:
      "A good building begins with a practical plan. We create modern 2D and 3D architectural drawings that maximize your plot of land, catch the natural breeze to reduce cooling costs, and make your space comfortable for your family or tenants.",
    highlights: [
      "Modern 2D architectural working drawings",
      "Realistic 3D exterior & interior visualizations",
      "Structural, mechanical & electrical engineering plans",
      "State government building approval documentation",
    ],
    features: [
      "Smart room layouts that don't waste space or construction cost",
      "Generous window placement for cross-ventilation and natural daylight",
      "Realistic 3D photo renders so you see your building before laying a single block",
      "Complete documentation prepared ready for state planning approval",
    ],
    icon: "Compass",
    imagePrompt: "Architectural blueprints and 3D computer model of a contemporary contemporary Nigerian home on an architect's desk",
    sampleDeliverables: [
      "Architectural Working Drawings",
      "Structural Engineering Calculations",
      "Electrical & Plumbing Layouts",
      "3D Visual Renders",
    ],
  },
  {
    id: "solar-installation",
    slug: "solar-installation",
    title: "Solar Installation",
    shortDescription: "We help with solar power and related energy solutions.",
    tagline: "Say goodbye to noisy generators and high fuel costs with reliable, clean solar power.",
    longDescription:
      "Enjoy 24/7 quiet electricity for your home or business. We design and install durable solar inverter systems with Tier-1 solar panels, smart pure sine wave inverters, and long-lasting Lithium LiFePO4 batteries tailored to your appliances.",
    highlights: [
      "Custom residential solar setups (3kVA to 20kVA+)",
      "Commercial solar power for offices & retail",
      "Long-lasting Lithium (LiFePO4) battery upgrades",
      "Professional surge protection & earthing",
    ],
    features: [
      "Accurate power audit so you don't overspend or buy undersized equipment",
      "High-efficiency monocrystalline solar panels for maximum charging even on cloudy days",
      "Lithium battery installations with 5 to 10 years lifespan",
      "Seamless automatic switchover — zero blinking on your TVs, computers, or deep freezers",
    ],
    icon: "Sun",
    imagePrompt: "Rooftop solar panel installation on a modern home with bright blue sky and neatly organized battery inverter setup",
    sampleDeliverables: [
      "Energy Audit & Sizing Report",
      "Tier-1 Monocrystalline Solar Array",
      "Pure Sine Wave Inverter & Lithium Battery",
      "Lightning & Surge Protection System",
    ],
  },
  {
    id: "cctv-security",
    slug: "cctv-security",
    title: "CCTV and Security",
    shortDescription: "We help you install systems to monitor and protect your property.",
    tagline: "Monitor your property live from your smartphone, wherever you are in the world.",
    longDescription:
      "Protect your family, tenants, and business with modern security installations. From crystal-clear HD/4K CCTV cameras with night vision to electric perimeter fencing and automated access control, we ensure your premises remain secure around the clock.",
    highlights: [
      "High-definition night-vision CCTV cameras",
      "Live remote viewing on your iPhone or Android",
      "Electric fence installation & alarm systems",
      "Smart video intercoms & biometric door locks",
    ],
    features: [
      "Colour-at-night camera technology for clear recognition in total darkness",
      "Phone notifications whenever someone enters sensitive areas",
      "Backup battery power for CCTV so it continues recording during power outages",
      "Clean conduit wiring that doesn't spoil your walls or building aesthetics",
    ],
    icon: "ShieldCheck",
    imagePrompt: "Modern dome CCTV camera mounted under roof soffit protecting a modern compound with smartphone live feed screen",
    sampleDeliverables: [
      "Full HD/4K IP Camera System",
      "Mobile App Remote Monitoring Setup",
      "High-Voltage Electric Perimeter Fence",
      "Smart Video Intercom & Access Locks",
    ],
  },
  {
    id: "electrical-lighting",
    slug: "electrical-lighting",
    title: "Electrical and Lighting",
    shortDescription: "We help with electrical installations and lighting.",
    tagline: "Safe, fire-resistant conduit wiring and beautiful architectural lighting that elevates your space.",
    longDescription:
      "Electrical safety is not something to gamble with. We handle full residential and commercial wiring using genuine, standard-gauge copper cables, certified distribution boards, and surge protectors. We also install aesthetic ambient lighting, chandeliers, strip lights, and outdoor floodlights.",
    highlights: [
      "Full conduit wiring for new buildings & revamps",
      "Architectural LED & warm accent lighting",
      "Consumer unit & distribution board upgrades",
      "Proper grounding & lightning arrester installation",
    ],
    features: [
      "100% genuine pure copper cables (Coleman, Nigerchin standards) to prevent electrical fires",
      "Even load balancing across phases to prevent tripping and transformer issues",
      "Energy-saving LED lighting designs that reduce your electricity bill",
      "Exterior security floodlights and decorative facade uplighting",
    ],
    icon: "Zap",
    imagePrompt: "Warm luxury living room with recessed warm LED ceiling cove lighting, stylish switches, and neat conduit panel",
    sampleDeliverables: [
      "Certified Conduit Wiring",
      "Modern Consumer Unit / DB Box",
      "Cove & Chandelier Lighting Setup",
      "Industrial Earthing & Arrester",
    ],
  },
  {
    id: "interior-finishing",
    slug: "interior-finishing",
    title: "Interior and Finishing",
    shortDescription: "We help make your space look good and feel complete.",
    tagline: "From bare walls to a breathtaking, move-in-ready home you will be proud of.",
    longDescription:
      "The finishing is what transforms a concrete structure into a home you love. We carry out meticulous POP ceiling casting, flawless wall screeding and painting, precision tiling, modern fitted kitchens, and high-security security doors that give your property that premium touch.",
    highlights: [
      "Modern POP ceilings with hidden cove light troughs",
      "Wall screeding and satin/washable emulsion painting",
      "Vitrified floor tiles, marble, and granite installation",
      "Custom fitted kitchens, wardrobes, and modern sanitary wares",
    ],
    features: [
      "Smooth, crack-free screeding that feels like glass before painting",
      "Level tile alignment without hollow sounds or crooked grout lines",
      "High-grade moisture-resistant materials for bathrooms and kitchens",
      "Attention to trim, architraves, skirtings, and corner finishes",
    ],
    icon: "Paintbrush",
    imagePrompt: "Elegantly finished living room with sleek POP ceiling, warm light strips, polished porcelain tiles, and flawless painted walls",
    sampleDeliverables: [
      "Custom POP Ceiling Designs",
      "Precision Wall Screeding & Painting",
      "Porcelain & Granite Floor Tiling",
      "Fitted Kitchen & Wardrobe Joinery",
    ],
  },
];

export const COMPANY_INFO = {
  name: "Bularcrest",
  tagline: "Building Excellence. Designing Legacies.",
  subtagline: "CONSTRUCTION · DESIGN · HOME SOLUTIONS",
  phone: "+234 814 000 2852",
  phoneRaw: "+2348140002852",
  whatsappNumber: "+2348140002852",
  whatsappLink: "https://wa.me/2348140002852?text=Hello%20Bularcrest%2C%20I%20am%20interested%20in%20discussing%20a%20project%20for%20my%20property.",
  email: "info@bularcrest.com",
  officeAddress: "Plot 12, Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  serviceAreas: [
    "Lagos (Lekki, Ikoyi, Victoria Island, Ikeja, Mainland & environs)",
    "Abuja (FCT & surrounding areas)",
    "Port Harcourt & Rivers State",
    "Ogun & Oyo States (Ibadan, Abeokuta)",
    "Nationwide Consultation & Site Assessment Across Nigeria",
  ],
  workingHours: "Monday – Saturday: 8:00 AM – 6:00 PM (Emergency & WhatsApp enquiries 24/7)",
};

export const VALUE_PROPOSITIONS = [
  {
    title: "We take quality seriously.",
    description: "We use genuine, tested building materials and follow standard engineering practices. No cheap shortcuts that cause cracks, leaks, or electrical hazards later.",
    icon: "Shield",
  },
  {
    title: "We communicate clearly.",
    description: "You will always know what is happening on your site. We send regular photo, video, and milestone updates so you have peace of mind even if you are in the diaspora.",
    icon: "MessageSquare",
  },
  {
    title: "We pay attention to the details.",
    description: "From straight blockwork and smooth screeding to neat conduit wiring and level tiles, we make sure the finishing looks clean, durable, and premium.",
    icon: "CheckCircle2",
  },
  {
    title: "We work with you to understand your needs.",
    description: "Every building and budget is different. We listen to what you want to achieve, discuss realistic options, and provide a clear quote before starting.",
    icon: "Users",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell us what you need.",
    description: "Call us, chat with us on WhatsApp, or send a quick enquiry online telling us about your building, renovation, solar, or security requirement.",
  },
  {
    step: "02",
    title: "We discuss your plans.",
    description: "We review your requirements, inspect the site or drawings, and discuss the best approach suitable for your budget and timeline.",
  },
  {
    step: "03",
    title: "We agree on the work and cost.",
    description: "We provide a transparent, itemized quotation. Everything is clear upfront — no unexpected hidden fees or surprise demands midway.",
  },
  {
    step: "04",
    title: "We get started once everything is agreed.",
    description: "Our engineers and craftsmen mobilize to site and execute the job according to agreed milestones and standard quality guidelines.",
  },
];
