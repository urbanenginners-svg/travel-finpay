export const flightsData = [
  {
    id: 1,
    airline: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png",
    from: "New York (JFK)",
    to: "Dubai (DXB)",
    departureTime: "10:30 AM",
    arrivalTime: "7:45 AM +1",
    duration: "12h 15m",
    stops: "Non-stop",
    price: 789,
    class: "Economy",
    aircraft: "Boeing 777",
    baggage: "2 x 23kg",
    rating: 4.8,
    amenities: ["Wi-Fi", "Entertainment", "Meals Included", "Power Outlets"]
  },
  {
    id: 2,
    airline: "Qatar Airways",
    logo: "data:image/png;base64,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",
    from: "London (LHR)",
    to: "Tokyo (NRT)",
    departureTime: "8:00 PM",
    arrivalTime: "4:30 PM +1",
    duration: "14h 30m",
    stops: "1 Stop (Doha)",
    price: 899,
    class: "Economy",
    aircraft: "Airbus A350",
    baggage: "2 x 30kg",
    rating: 4.9,
    amenities: ["Wi-Fi", "Entertainment", "Meals Included", "Lounge Access", "Power Outlets"]
  },
  {
    id: 3,
    airline: "Singapore Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/200px-Singapore_Airlines_Logo_2.svg.png",
    from: "Los Angeles (LAX)",
    to: "Singapore (SIN)",
    departureTime: "11:45 PM",
    arrivalTime: "7:15 AM +2",
    duration: "17h 30m",
    stops: "Non-stop",
    price: 1099,
    class: "Business",
    aircraft: "Airbus A380",
    baggage: "2 x 32kg",
    rating: 5.0,
    amenities: ["Wi-Fi", "Flat Bed", "Entertainment", "Gourmet Meals", "Lounge Access", "Amenity Kit"]
  },
  {
    id: 4,
    airline: "Lufthansa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/200px-Lufthansa_Logo_2018.svg.png",
    from: "Paris (CDG)",
    to: "Mumbai (BOM)",
    departureTime: "2:15 PM",
    arrivalTime: "2:00 AM +1",
    duration: "8h 45m",
    stops: "Non-stop",
    price: 649,
    class: "Economy",
    aircraft: "Airbus A340",
    baggage: "1 x 23kg",
    rating: 4.5,
    amenities: ["Wi-Fi", "Entertainment", "Meals Included"]
  },
  {
    id: 5,
    airline: "Etihad Airways",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Bsb0r2tyxmBpzE7CwrYeCe7iW6-oqIrG7P-bqN3OmKv95otbHPRaojQ&s",
    from: "Sydney (SYD)",
    to: "London (LHR)",
    departureTime: "9:30 PM",
    arrivalTime: "5:15 AM +1",
    duration: "22h 45m",
    stops: "1 Stop (Abu Dhabi)",
    price: 1249,
    class: "Business",
    aircraft: "Boeing 787",
    baggage: "2 x 32kg",
    rating: 4.7,
    amenities: ["Wi-Fi", "Flat Bed", "Entertainment", "Gourmet Meals", "Lounge Access", "Chauffeur Service"]
  },
  {
    id: 6,
    airline: "Turkish Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019_compact.svg/200px-Turkish_Airlines_logo_2019_compact.svg.png",
    from: "Toronto (YYZ)",
    to: "Istanbul (IST)",
    departureTime: "6:00 PM",
    arrivalTime: "12:30 PM +1",
    duration: "10h 30m",
    stops: "Non-stop",
    price: 679,
    class: "Economy",
    aircraft: "Airbus A350",
    baggage: "2 x 23kg",
    rating: 4.6,
    amenities: ["Wi-Fi", "Entertainment", "Meals Included", "Power Outlets"]
  },
  {
    id: 7,
    airline: "Cathay Pacific",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AU1fj6ur7/Pzv8/NNgIL1+Pjf6OgAWFw8d3np7u4AXF/V3+AqbXAAVluMq6zH1dXO29t7nqBfjI4LZWi/z9Cov8CyxsdxmZofaGudt7hrlJY0cnVFd3pWh4mCpKYATFAqCbFQAAADG0lEQVR4nO2V25ajIBBFUQRvEEEgSjRk/v8rpyg1nW6z5jW91tR+8EIVcjgUyBhBEARBEARBEARBEARBEARBEARBEARBEARBEMT/jfy0gHfY36hK2U8reEN9+4VWdY/waQln+GPoPq3hzNVdPy3hjBLu9mkNZxbtfl9Z2T6uw2kLylqpvdhqfC03eFXWkCzLsnsGIVbBratzU5WzqmcMKZUqOeO5D8ev1FKWNSZ1GDqzeB1d+b0tiOiEHvA5Qcz0QrStaNfOrC5/LcXNXgHBq27z+NM9X5WGtDvWqdt0d2MUTouKzfrK+LgKkXpVilW9hE50bdSxf9QvTWOR9XRLfp4aqDmYO7+0MPlKxTnPzBWYP2Hi0MCVJ4Vf8wlkFrc8kRFXomizuLFmQ2FyLhzXUkrRVsw2R+iM8lFrv87TYaRqWrznGXDnIzbLCzaCKPYUJV30+RZ9zW6br50X0KmHi/Mr2CjBFuwud1E9/kOyKC6aI/ROFXildfTFn8dmVP91TIRlKm6bKIG52lml6oSigkMfmfXJCv4lquodbOtQwOeMT8eYu6irMhZFmZj+9TspXcyixP4jXPqv/ZhMteKiP0WtKSW3NlmUMN0WHPy6rwGI4vzRBDZPTHvJQj8fhbyJ8mlJA4oK/fKuxl+88nF+/ptfnDJ6Cg5fD1ERK2XJTn0Fq8KxQ5R2bQpM9SEs/cCCX3449Vy+FxPfwAcfh5edGS7bELJiy3C93vz6KgpnjqJy8NrrLKVIT1GJVzDWOELHta1gGx2Hxy7KHKKq1n+dKz8Jepm++7g0N2ioZ3AQXy/TO1F2CzbTd1GY1rXZhAEqLhT5aJDjSVTHQpNy6HEWJYdb/XNp5eDF7OKNJazx0IiOlZdsCRSuy8OJwjKxBXsIqqLdu5b9HeJ8xkVWFw1D63VZ7ne+yR/zBc8hkBLWdZnv67my1BvvoEjCFDpWG4zWFu5wyWYra6CyK2vVHlQ5qKzdT8Da5LTSKI4dbc4x0wQ3afKuswZrqjMG/bEYIgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiC+M/5C0AqK6UHE8ClAAAAAElFTkSuQmCC",
    from: "Hong Kong (HKG)",
    to: "San Francisco (SFO)",
    departureTime: "4:45 PM",
    arrivalTime: "1:15 PM",
    duration: "12h 30m",
    stops: "Non-stop",
    price: 879,
    class: "Premium Economy",
    aircraft: "Boeing 777",
    baggage: "2 x 23kg",
    rating: 4.8,
    amenities: ["Wi-Fi", "Extra Legroom", "Entertainment", "Meals Included", "Power Outlets"]
  },
  {
    id: 8,
    airline: "Air France",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/200px-Air_France_Logo.svg.png",
    from: "Amsterdam (AMS)",
    to: "Buenos Aires (EZE)",
    departureTime: "10:00 AM",
    arrivalTime: "6:30 PM",
    duration: "13h 30m",
    stops: "1 Stop (Paris)",
    price: 949,
    class: "Economy",
    aircraft: "Boeing 787",
    baggage: "1 x 23kg",
    rating: 4.5,
    amenities: ["Wi-Fi", "Entertainment", "Meals Included", "Power Outlets"]
  },
  {
    id: 9,
    airline: "Japan Airlines",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGNXWF4K3YuMisHfHdgqb5VkKdHOf-qqVljZEgW_NezbrTi7gNhkgoXU&s",
    from: "Tokyo (NRT)",
    to: "Los Angeles (LAX)",
    departureTime: "5:00 PM",
    arrivalTime: "10:30 AM",
    duration: "9h 30m",
    stops: "Non-stop",
    price: 799,
    class: "Economy",
    aircraft: "Boeing 787",
    baggage: "2 x 23kg",
    rating: 4.9,
    amenities: ["Wi-Fi", "Entertainment", "Japanese Cuisine", "Power Outlets"]
  },
  {
    id: 10,
    airline: "British Airways",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/British_Airways_Logo.svg/200px-British_Airways_Logo.svg.png",
    from: "London (LHR)",
    to: "New York (JFK)",
    departureTime: "8:30 AM",
    arrivalTime: "11:15 AM",
    duration: "7h 45m",
    stops: "Non-stop",
    price: 599,
    class: "Economy",
    aircraft: "Boeing 747",
    baggage: "1 x 23kg",
    rating: 4.4,
    amenities: ["Wi-Fi", "Entertainment", "Meals Included"]
  }
]

export const popularRoutes = [
  { from: "New York", to: "London", basePrice: 499 },
  { from: "Dubai", to: "Singapore", basePrice: 399 },
  { from: "Paris", to: "Tokyo", basePrice: 799 },
  { from: "Los Angeles", to: "Sydney", basePrice: 899 },
  { from: "Mumbai", to: "Dubai", basePrice: 299 },
  { from: "Istanbul", to: "New York", basePrice: 599 }
]

export const cabinClasses = ["Economy", "Premium Economy", "Business", "First Class"]

export const airlines = ["All Airlines", "Emirates", "Qatar Airways", "Singapore Airlines", "Lufthansa", "Etihad Airways", "Turkish Airlines"]

export const getFlightById = (id) => flightsData.find(flight => flight.id === parseInt(id))

export const filterFlights = (filters) => {
  return flightsData.filter(flight => {
    if (filters.airline && filters.airline !== "All Airlines" && flight.airline !== filters.airline) return false
    if (filters.stops && filters.stops === "Non-stop" && flight.stops !== "Non-stop") return false
    if (filters.maxPrice && flight.price > filters.maxPrice) return false
    return true
  })
}
