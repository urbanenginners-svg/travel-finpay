export const toursData = [
  {
    id: 1,
    title: "Dubai Skyline & Desert Escape",
    destination: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80",
    duration: "5 Days 4 Nights",
    price: 1499,
    rating: 4.8,
    reviews: 312,
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Marina", "Luxury Stay"],
    description: "Experience futuristic architecture, luxury shopping, and golden desert adventures in one curated trip.",
    category: "Luxury",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Hotel check-in, Dubai Mall, fountain promenade" },
      { day: 2, title: "Iconic Landmarks", description: "Burj Khalifa, Dubai Frame, Al Fahidi heritage walk" },
      { day: 3, title: "Desert Adventure", description: "Dune bashing, camel ride, live entertainment dinner" },
      { day: 4, title: "Coastal Leisure", description: "Jumeirah Beach, Palm viewpoints, marina cruise" },
      { day: 5, title: "Departure", description: "Souk shopping, airport transfer" }
    ],
    inclusions: ["Flights", "4-star Hotel", "Daily Breakfast", "Airport Transfers", "Desert Safari", "City Tour"],
    exclusions: ["Lunch & Dinner", "Personal shopping", "Optional premium attractions"]
  },
  {
    id: 2,
    title: "Bali Wellness & Beach Retreat",
    destination: "Bali",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&auto=format&fit=crop&q=80",
    duration: "7 Days 6 Nights",
    price: 1099,
    rating: 4.8,
    reviews: 276,
    highlights: ["Ubud Rice Terraces", "Beach Clubs", "Temple Trails", "Spa Therapy"],
    description: "Blend tropical relaxation with culture-rich experiences across Ubud, Seminyak, and Uluwatu.",
    category: "Wellness",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Ubud", description: "Resort check-in, evening market stroll" },
      { day: 2, title: "Nature & Wellness", description: "Tegalalang terraces, waterfall visit, spa session" },
      { day: 3, title: "Cultural Day", description: "Tirta Empul temple, local craft villages" },
      { day: 4, title: "South Bali Transfer", description: "Seminyak cafes, sunset beach walk" },
      { day: 5, title: "Uluwatu Experience", description: "Cliff temple, Kecak dance, seafood dinner" },
      { day: 6, title: "Leisure Day", description: "Optional surfing, beach club relaxation" },
      { day: 7, title: "Departure", description: "Checkout and airport transfer" }
    ],
    inclusions: ["Flights", "Resort Stay", "Daily Breakfast", "Airport Transfers", "Temple Tour", "Spa Session"],
    exclusions: ["Lunch & Dinner", "Personal purchases", "Optional adventure activities"]
  },
  {
    id: 3,
    title: "Thailand Island & Culture Explorer",
    destination: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&auto=format&fit=crop&q=80",
    duration: "6 Days 5 Nights",
    price: 1299,
    rating: 4.9,
    reviews: 338,
    highlights: ["Bangkok Temples", "Island Hopping", "Night Markets", "Thai Cuisine"],
    description: "Discover Thailand's perfect blend of buzzing city life, tropical islands, and rich heritage.",
    category: "Cultural",
    featured: true,
    itinerary: [
      { day: 1, title: "Bangkok Arrival", description: "Hotel check-in, riverside evening cruise" },
      { day: 2, title: "Temple Circuit", description: "Grand Palace, Wat Pho, local street food" },
      { day: 3, title: "Fly to Phuket", description: "Beach check-in, old town walk" },
      { day: 4, title: "Island Adventure", description: "Phi Phi day trip, snorkeling, sunset point" },
      { day: 5, title: "Leisure & Markets", description: "Spa, shopping, vibrant night market" },
      { day: 6, title: "Departure", description: "Airport transfer" }
    ],
    inclusions: ["Flights", "Hotels", "Daily Breakfast", "Intercity Transfer", "Island Tour"],
    exclusions: ["Most meals", "Optional water sports", "Personal expenses"]
  },
  {
    id: 4,
    title: "Singapore Urban Discovery",
    destination: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=80",
    duration: "5 Days 4 Nights",
    price: 1399,
    rating: 4.7,
    reviews: 221,
    highlights: ["Marina Bay", "Gardens by the Bay", "Sentosa", "Hawker Food Trail"],
    description: "Experience a seamless city break with iconic architecture, curated dining, and family-friendly attractions.",
    category: "City",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival", description: "Marina Bay check-in, skyline evening" },
      { day: 2, title: "City Icons", description: "Merlion Park, Gardens by the Bay, light show" },
      { day: 3, title: "Cultural Neighborhoods", description: "Chinatown, Kampong Glam, Little India" },
      { day: 4, title: "Sentosa Leisure", description: "Cable car, beaches, optional Universal Studios" },
      { day: 5, title: "Departure", description: "Jewel Changi visit, airport transfer" }
    ],
    inclusions: ["Flights", "Hotel", "Daily Breakfast", "City Tour", "Airport Transfers"],
    exclusions: ["Attraction tickets", "Lunch & Dinner", "Personal shopping"]
  },
  {
    id: 5,
    title: "Goa Coastal Escape",
    destination: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=80",
    duration: "4 Days 3 Nights",
    price: 899,
    rating: 4.8,
    reviews: 298,
    highlights: ["Beach Hopping", "Fort Aguada", "Sunset Cruise", "Goan Food Tour"],
    description: "Enjoy Goa's laid-back beaches, heritage forts, and vibrant local flavors in a short premium getaway.",
    category: "Beach",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in North Goa", description: "Resort check-in, beachside evening" },
      { day: 2, title: "Heritage & Coast", description: "Fort Aguada, old Latin quarter, cafe trail" },
      { day: 3, title: "South Goa Day", description: "Scenic drive, quieter beaches, sunset cruise" },
      { day: 4, title: "Departure", description: "Local market shopping, airport transfer" }
    ],
    inclusions: ["Flights", "Beach Resort", "Daily Breakfast", "Sightseeing", "Airport Transfers"],
    exclusions: ["Lunch & Dinner", "Water sports", "Personal expenses"]
  },
  {
    id: 6,
    title: "Kashmir Valley & Houseboat Journey",
    destination: "Kashmir",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&auto=format&fit=crop&q=80",
    duration: "5 Days 4 Nights",
    price: 999,
    rating: 4.9,
    reviews: 344,
    highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam Valley", "Shikara Ride"],
    description: "Take in Kashmir's serene lakes, mountain panoramas, and handpicked local experiences.",
    category: "Nature",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Houseboat check-in, evening shikara ride" },
      { day: 2, title: "Srinagar Sights", description: "Mughal gardens, old city walk, local market" },
      { day: 3, title: "Gulmarg Excursion", description: "Gondola ride, meadow views, snow activities (seasonal)" },
      { day: 4, title: "Pahalgam Day Trip", description: "River valley landscapes, scenic picnic" },
      { day: 5, title: "Departure", description: "Breakfast and airport transfer" }
    ],
    inclusions: ["Flights", "Hotel/Houseboat", "Daily Breakfast", "Transfers", "Guided Sightseeing"],
    exclusions: ["Lunch & Dinner", "Personal shopping", "Optional adventure rides"]
  },
  {
    id: 7,
    title: "Dubai Family Adventure",
    destination: "Dubai",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&auto=format&fit=crop&q=80",
    duration: "7 Days 6 Nights",
    price: 1799,
    rating: 4.7,
    reviews: 205,
    highlights: ["Theme Parks", "Aquarium", "Desert Camp", "Souk Tour"],
    description: "A family-friendly Dubai itinerary with entertainment, discovery, and premium comfort.",
    category: "Adventure",
    featured: false,
    itinerary: [
      { day: 1, title: "Arrival", description: "Hotel check-in, Dubai Marina walk" },
      { day: 2, title: "Interactive Attractions", description: "Aquarium, VR park, indoor entertainment" },
      { day: 3, title: "Theme Park Day", description: "Family rides and shows" },
      { day: 4, title: "Desert Day", description: "Soft adventure dune drive and camp activities" },
      { day: 5, title: "Cultural Quarter", description: "Souk visit, creek crossing, museum" },
      { day: 6, title: "Free Leisure", description: "Shopping or optional beach time" },
      { day: 7, title: "Departure", description: "Airport transfer" }
    ],
    inclusions: ["Flights", "Family Hotel", "Daily Breakfast", "Transfers", "Selected Activities"],
    exclusions: ["Lunch & Dinner", "Personal purchases", "Optional attraction upgrades"]
  },
  {
    id: 8,
    title: "Bali & Thailand Twin Destination Escape",
    destination: "Thailand",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&auto=format&fit=crop&q=80",
    duration: "6 Days 5 Nights",
    price: 1599,
    rating: 4.8,
    reviews: 233,
    highlights: ["Bangkok Nightlife", "Phuket Beaches", "Bali Temples", "Wellness Time"],
    description: "A fast-paced, premium route combining Thailand's islands with Bali's cultural calm.",
    category: "Adventure",
    featured: false,
    itinerary: [
      { day: 1, title: "Bangkok Arrival", description: "City exploration and local dining" },
      { day: 2, title: "Phuket Transfer", description: "Beachside leisure and sunset" },
      { day: 3, title: "Island Excursion", description: "Boat tour and snorkeling" },
      { day: 4, title: "Fly to Bali", description: "Evening in Seminyak" },
      { day: 5, title: "Ubud Highlights", description: "Rice terraces and temple trail" },
      { day: 6, title: "Departure", description: "Airport transfer" }
    ],
    inclusions: ["Flights", "Hotels", "Daily Breakfast", "Intercity Transfers", "Selected Tours"],
    exclusions: ["Most meals", "Optional activities", "Personal expenses"]
  }
]

export const getToursById = (id) => toursData.find(tour => tour.id === parseInt(id))

export const getFeaturedTours = () => toursData.filter(tour => tour.featured)

export const getToursByCategory = (category) => toursData.filter(tour => tour.category === category)

export const categories = ["All", "Beach", "Adventure", "Cultural", "Luxury", "City", "Wellness", "Nature"]
