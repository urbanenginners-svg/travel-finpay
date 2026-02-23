export const toursData = [
  {
    id: 1,
    title: "Maldives Paradise Escape",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop",
    duration: "5 Days 4 Nights",
    price: 1299,
    rating: 4.9,
    reviews: 245,
    highlights: ["Overwater Villa", "Snorkeling", "Spa Included", "All Meals"],
    description: "Experience luxury in crystal-clear waters with pristine beaches and world-class service.",
    category: "Beach",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "Transfer to resort, check-in to overwater villa, welcome dinner" },
      { day: 2, title: "Island Exploration", description: "Snorkeling tour, island hopping, sunset cruise" },
      { day: 3, title: "Relaxation Day", description: "Spa treatments, beach time, water sports" },
      { day: 4, title: "Marine Adventure", description: "Dolphin watching, scuba diving, beach BBQ" },
      { day: 5, title: "Departure", description: "Leisure breakfast, check-out, airport transfer" }
    ],
    inclusions: ["Flights", "Accommodation", "All Meals", "Transfers", "Activities", "Travel Insurance"],
    exclusions: ["Personal expenses", "Tips", "Additional activities"]
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    destination: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop",
    duration: "7 Days 6 Nights",
    price: 2499,
    rating: 4.8,
    reviews: 189,
    highlights: ["Mountain Views", "Skiing", "Train Rides", "Swiss Chocolate Tour"],
    description: "Breathtaking alpine beauty with snow-capped peaks, charming villages, and adventure.",
    category: "Adventure",
    featured: true,
    itinerary: [
      { day: 1, title: "Zurich Arrival", description: "City tour, Swiss watch museum, lake cruise" },
      { day: 2, title: "Lucerne", description: "Chapel Bridge, Mount Pilatus, chocolate factory" },
      { day: 3, title: "Interlaken", description: "Jungfrau excursion, cable car rides, adventure sports" },
      { day: 4, title: "Zermatt", description: "Matterhorn glacier paradise, skiing" },
      { day: 5, title: "Montreux", description: "Lakeside town, Chillon Castle, wine tasting" },
      { day: 6, title: "Geneva", description: "UN tour, Old Town, Jet d'Eau" },
      { day: 7, title: "Departure", description: "Last-minute shopping, airport transfer" }
    ],
    inclusions: ["Flights", "Hotels", "Daily Breakfast", "Swiss Travel Pass", "Guided Tours"],
    exclusions: ["Lunch & Dinner", "Ski equipment rental", "Travel insurance"]
  },
  {
    id: 3,
    title: "Tokyo Culture Experience",
    destination: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    duration: "6 Days 5 Nights",
    price: 1899,
    rating: 4.9,
    reviews: 312,
    highlights: ["Mt. Fuji", "Temples", "Sushi Making", "Traditional Tea Ceremony"],
    description: "Immerse yourself in ancient traditions meets modern innovation in the heart of Japan.",
    category: "Cultural",
    featured: true,
    itinerary: [
      { day: 1, title: "Tokyo Arrival", description: "Shibuya crossing, Harajuku, Tokyo Tower" },
      { day: 2, title: "Cultural Tokyo", description: "Senso-ji Temple, Imperial Palace, Akihabara" },
      { day: 3, title: "Mt. Fuji Day Trip", description: "Lake Kawaguchi, Fuji viewing, onsen experience" },
      { day: 4, title: "Kyoto", description: "Bullet train ride, Fushimi Inari, Bamboo Forest" },
      { day: 5, title: "Traditional Kyoto", description: "Tea ceremony, Geisha district, Nijo Castle" },
      { day: 6, title: "Departure", description: "Last minute shopping, airport transfer" }
    ],
    inclusions: ["Flights", "Hotels", "JR Pass", "Guided Tours", "Some Meals"],
    exclusions: ["Most meals", "Personal expenses", "Optional activities"]
  },
  {
    id: 4,
    title: "Dubai Luxury Retreat",
    destination: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    duration: "5 Days 4 Nights",
    price: 1599,
    rating: 4.7,
    reviews: 278,
    highlights: ["Burj Khalifa", "Desert Safari", "Luxury Hotels", "Shopping Malls"],
    description: "Experience opulence and extravagance in the city of gold and futuristic architecture.",
    category: "Luxury",
    featured: false,
    itinerary: [
      { day: 1, title: "Arrival", description: "Hotel check-in, Dubai Mall, fountain show" },
      { day: 2, title: "City Tour", description: "Burj Khalifa, Dubai Frame, Gold Souk" },
      { day: 3, title: "Desert Safari", description: "Dune bashing, camel ride, BBQ dinner" },
      { day: 4, title: "Beach & Leisure", description: "Jumeirah Beach, Palm Jumeirah, Atlantis" },
      { day: 5, title: "Departure", description: "Shopping, departure" }
    ],
    inclusions: ["Flights", "5-star Hotel", "Tours", "Desert Safari", "Breakfast"],
    exclusions: ["Lunch & Dinner", "Attraction tickets", "Personal shopping"]
  },
  {
    id: 5,
    title: "Santorini Romantic Getaway",
    destination: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop",
    duration: "4 Days 3 Nights",
    price: 1199,
    rating: 5.0,
    reviews: 421,
    highlights: ["Sunset in Oia", "Wine Tasting", "Beach Clubs", "White Architecture"],
    description: "Fall in love with stunning sunsets, blue-domed churches, and Aegean Sea views.",
    category: "Romance",
    featured: true,
    itinerary: [
      { day: 1, title: "Arrival", description: "Cave hotel check-in, Fira exploration, cable car ride" },
      { day: 2, title: "Oia Sunset", description: "Village tour, art galleries, sunset dinner" },
      { day: 3, title: "Beaches & Wine", description: "Red Beach, wine tasting tour, sailing" },
      { day: 4, title: "Departure", description: "Morning swim, last views, airport transfer" }
    ],
    inclusions: ["Flights", "Cave Hotel", "Breakfast", "Wine Tour", "Sunset Cruise"],
    exclusions: ["Lunches & Dinners", "ATV rental", "Personal expenses"]
  },
  {
    id: 6,
    title: "New York City Highlights",
    destination: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop",
    duration: "5 Days 4 Nights",
    price: 1699,
    rating: 4.6,
    reviews: 356,
    highlights: ["Statue of Liberty", "Broadway Show", "Central Park", "Empire State"],
    description: "The city that never sleeps awaits with iconic landmarks and endless entertainment.",
    category: "City",
    featured: false,
    itinerary: [
      { day: 1, title: "Arrival & Times Square", description: "Hotel check-in, Times Square, Broadway show" },
      { day: 2, title: "Icons Tour", description: "Statue of Liberty, Ellis Island, 9/11 Memorial" },
      { day: 3, title: "Midtown Manhattan", description: "Empire State, Rockefeller, Fifth Avenue" },
      { day: 4, title: "Museums & Parks", description: "Met Museum, Central Park, Upper East Side" },
      { day: 5, title: "Brooklyn & Departure", description: "Brooklyn Bridge walk, DUMBO, departure" }
    ],
    inclusions: ["Flights", "Hotel", "City Pass", "Broadway Tickets", "Some Tours"],
    exclusions: ["Meals", "Transportation", "Additional shows"]
  },
  {
    id: 7,
    title: "Bali Wellness Retreat",
    destination: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    duration: "7 Days 6 Nights",
    price: 999,
    rating: 4.8,
    reviews: 267,
    highlights: ["Yoga Sessions", "Temple Tours", "Rice Terraces", "Spa Treatments"],
    description: "Find your inner peace in tropical paradise with spiritual experiences and nature.",
    category: "Wellness",
    featured: false,
    itinerary: [
      { day: 1, title: "Ubud Arrival", description: "Jungle resort check-in, welcome massage" },
      { day: 2, title: "Yoga & Nature", description: "Morning yoga, Tegalalang rice terraces, waterfall" },
      { day: 3, title: "Temples", description: "Tanah Lot, Uluwatu Temple, Kecak dance" },
      { day: 4, title: "Wellness Day", description: "Spa day, meditation, healthy cooking class" },
      { day: 5, title: "Beach Day", description: "Seminyak beach, surfing lesson, beach club" },
      { day: 6, title: "Culture & Art", description: "Ubud art market, monkey forest, traditional dance" },
      { day: 7, title: "Departure", description: "Final yoga session, departure" }
    ],
    inclusions: ["Flights", "Resort", "Daily Yoga", "Spa Treatments", "All Meals"],
    exclusions: ["Personal purchases", "Optional activities", "Tips"]
  },
  {
    id: 8,
    title: "Iceland Northern Lights",
    destination: "Iceland",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&auto=format&fit=crop",
    duration: "6 Days 5 Nights",
    price: 2199,
    rating: 4.9,
    reviews: 198,
    highlights: ["Aurora Borealis", "Blue Lagoon", "Glaciers", "Waterfalls"],
    description: "Witness nature's most spectacular light show and explore dramatic landscapes.",
    category: "Nature",
    featured: true,
    itinerary: [
      { day: 1, title: "Reykjavik Arrival", description: "City tour, Hallgrimskirkja, harbor walk" },
      { day: 2, title: "Golden Circle", description: "Thingvellir, Geysir, Gullfoss waterfall" },
      { day: 3, title: "South Coast", description: "Seljalandsfoss, Skogafoss, black sand beach" },
      { day: 4, title: "Glacier Adventure", description: "Ice cave tour, glacier hiking" },
      { day: 5, title: "Blue Lagoon & Aurora", description: "Geothermal spa, Northern Lights hunt" },
      { day: 6, title: "Departure", description: "Last minute sightseeing, airport transfer" }
    ],
    inclusions: ["Flights", "Hotels", "Car Rental", "Tours", "Blue Lagoon Entry"],
    exclusions: ["Meals", "Fuel", "Optional activities"]
  }
]

export const getToursById = (id) => toursData.find(tour => tour.id === parseInt(id))

export const getFeaturedTours = () => toursData.filter(tour => tour.featured)

export const getToursByCategory = (category) => toursData.filter(tour => tour.category === category)

export const categories = ["All", "Beach", "Adventure", "Cultural", "Luxury", "Romance", "City", "Wellness", "Nature"]
