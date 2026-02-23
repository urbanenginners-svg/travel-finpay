export const insurancePlans = [
  {
    id: 1,
    name: "Basic Traveler",
    price: 29,
    duration: "Per Trip (up to 7 days)",
    popular: false,
    description: "Essential coverage for short trips",
    coverage: {
      medical: "$50,000",
      evacuation: "$100,000",
      baggage: "$500",
      cancellation: "$1,000",
      delay: "Not Covered"
    },
    features: [
      "Emergency medical coverage",
      "Medical evacuation",
      "Lost/stolen baggage",
      "Trip cancellation",
      "24/7 assistance",
      "COVID-19 coverage"
    ],
    exclusions: [
      "Pre-existing conditions",
      "Adventure sports",
      "Flight delays"
    ],
    color: "skyblue"
  },
  {
    id: 2,
    name: "Standard Shield",
    price: 59,
    duration: "Per Trip (up to 14 days)",
    popular: true,
    description: "Comprehensive protection for most travelers",
    coverage: {
      medical: "$100,000",
      evacuation: "$250,000",
      baggage: "$1,500",
      cancellation: "$3,000",
      delay: "$500"
    },
    features: [
      "Everything in Basic",
      "Higher coverage limits",
      "Trip delay coverage",
      "Missed connection coverage",
      "Rental car damage",
      "Adventure sports (basic)",
      "Pre-existing conditions (waiver)",
      "Emergency dental"
    ],
    exclusions: [
      "Extreme sports",
      "Non-refundable bookings (certain conditions)"
    ],
    color: "teal"
  },
  {
    id: 3,
    name: "Premium Elite",
    price: 99,
    duration: "Per Trip (up to 30 days)",
    popular: false,
    description: "Maximum protection for worry-free travel",
    coverage: {
      medical: "$250,000",
      evacuation: "$500,000",
      baggage: "$3,000",
      cancellation: "$10,000",
      delay: "$1,500"
    },
    features: [
      "Everything in Standard",
      "Maximum coverage limits",
      "Cancel for any reason (50%)",
      "Adventure & extreme sports",
      "Business equipment",
      "Pet care coverage",
      "Concierge service",
      "Identity theft assistance",
      "Legal assistance",
      "Home protection while away"
    ],
    exclusions: [
      "War zones",
      "Illegal activities"
    ],
    color: "gold"
  },
  {
    id: 4,
    name: "Annual Multi-Trip",
    price: 299,
    duration: "Annual (unlimited trips)",
    popular: false,
    description: "Best value for frequent travelers",
    coverage: {
      medical: "$150,000",
      evacuation: "$300,000",
      baggage: "$2,000",
      cancellation: "$5,000",
      delay: "$1,000"
    },
    features: [
      "Unlimited trips up to 30 days each",
      "Worldwide coverage",
      "Family coverage available",
      "Pre-existing conditions covered",
      "Adventure sports included",
      "No deductibles",
      "Automatic renewal option",
      "Priority claims processing"
    ],
    exclusions: [
      "Trips over 30 days",
      "Extreme sports (add-on available)"
    ],
    color: "navy"
  }
]

export const insuranceFAQ = [
  {
    question: "What does travel insurance typically cover?",
    answer: "Travel insurance typically covers trip cancellation/interruption, medical emergencies, emergency evacuation, lost or stolen baggage, travel delays, and 24/7 travel assistance. Coverage varies by plan."
  },
  {
    question: "When should I purchase travel insurance?",
    answer: "It's best to purchase travel insurance soon after booking your trip. Some benefits, like pre-existing condition waivers and cancel for any reason coverage, require purchase within 14-21 days of your initial trip deposit."
  },
  {
    question: "Does travel insurance cover COVID-19?",
    answer: "Yes, all our plans include COVID-19 coverage for medical expenses and trip interruption if you test positive before or during your trip. However, general pandemic-related travel restrictions may not be covered."
  },
  {
    question: "Are pre-existing medical conditions covered?",
    answer: "Pre-existing conditions can be covered if you purchase insurance within the specified time frame (usually 14-21 days) after your initial trip deposit and meet other requirements. Check individual plan details."
  },
  {
    question: "Can I cancel my insurance policy?",
    answer: "Yes, you can cancel your policy for a full refund within the free look period (typically 10-14 days), provided you haven't started your trip or filed a claim. After that, refunds may not be available."
  },
  {
    question: "Does insurance cover adventure activities?",
    answer: "Standard and Premium plans cover many adventure activities like snorkeling, hiking, and skiing. Extreme sports like skydiving may require additional coverage or upgrading to our Premium plan."
  },
  {
    question: "How do I file a claim?",
    answer: "You can file a claim online through our portal or mobile app. You'll need to provide documentation such as receipts, medical reports, police reports (for theft), and proof of trip cancellation. Claims are typically processed within 10-15 business days."
  },
  {
    question: "Is my family covered under one policy?",
    answer: "Families can be covered together under certain plans. Children under 18 are often included at no additional cost when traveling with an insured adult. Contact us for family plan options."
  }
]

export const claimProcess = [
  {
    step: 1,
    title: "Notify Us",
    description: "Contact our 24/7 assistance line as soon as possible",
    icon: "phone"
  },
  {
    step: 2,
    title: "Gather Documents",
    description: "Collect all relevant receipts, reports, and documentation",
    icon: "document"
  },
  {
    step: 3,
    title: "File Online",
    description: "Submit your claim through our online portal with documents",
    icon: "upload"
  },
  {
    step: 4,
    title: "Review Process",
    description: "Our team reviews your claim (typically 5-10 business days)",
    icon: "search"
  },
  {
    step: 5,
    title: "Get Reimbursed",
    description: "Receive payment via direct deposit or check",
    icon: "money"
  }
]

export const getPlanById = (id) => insurancePlans.find(plan => plan.id === parseInt(id))

export const getPopularPlan = () => insurancePlans.find(plan => plan.popular)
