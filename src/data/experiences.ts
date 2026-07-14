export interface Experience {
  id: number;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Sunset Sailing in the Adriatic",
    description: "Set sail along the stunning Dalmatian coast as the sun dips below the horizon. Enjoy local wine and fresh seafood while cruising past historic islands.",
    category: "Adventure",
    destination: "Dubrovnik, Croatia",
    price: 189,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
  },
  {
    id: 2,
    title: "Bangkok Street Food Tour",
    description: "Weave through the bustling streets of Bangkok tasting authentic Pad Thai, mango sticky rice, and tom yum goong at hidden local gems.",
    category: "Food",
    destination: "Bangkok, Thailand",
    price: 59,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 3,
    title: "Yoga Retreat in Ubud",
    description: "Rejuvenate your mind and body with daily yoga sessions amidst lush rice terraces and spiritual temples in the heart of Bali.",
    category: "Wellness",
    destination: "Ubud, Indonesia",
    price: 349,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 4,
    title: "Machu Picchu Sunrise Trek",
    description: "Hike the Inca Trail to Machu Picchu at dawn and witness the ancient citadel emerge from the clouds in golden light.",
    category: "Adventure",
    destination: "Cusco, Peru",
    price: 499,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"
  },
  {
    id: 5,
    title: "Florence Art & History Walk",
    description: "Step into the Renaissance with a guided walk through Florence's Uffizi Gallery, Duomo, and hidden artisan workshops.",
    category: "Culture",
    destination: "Florence, Italy",
    price: 89,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1543429257-3eb0b65d6c48?w=600&q=80"
  },
  {
    id: 6,
    title: "Northern Lights Chase in Tromsø",
    description: "Chase the aurora borealis on a guided snowmobile expedition under the Arctic sky. Hot chocolate and campfire stories included.",
    category: "Adventure",
    destination: "Tromsø, Norway",
    price: 299,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=600&q=80"
  },
  {
    id: 7,
    title: "Tokyo Ramen Workshop",
    description: "Learn the art of ramen from a master chef. Make your own broth, noodles, and toppings in a cozy Shibuya kitchen.",
    category: "Food",
    destination: "Tokyo, Japan",
    price: 79,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80"
  },
  {
    id: 8,
    title: "Santorini Wine Sunset Tour",
    description: "Visit three family-owned wineries on Santorini, sampling Assyrtiko while overlooking the caldera at sunset.",
    category: "Food",
    destination: "Santorini, Greece",
    price: 129,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"
  },
  {
    id: 9,
    title: "Amazon Rainforest Expedition",
    description: "Explore the Amazon by canoe and jungle trek. Spot wildlife, visit indigenous communities, and sleep in an eco-lodge.",
    category: "Nature",
    destination: "Manaus, Brazil",
    price: 599,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
  },
  {
    id: 10,
    title: "Hot Air Balloon in Cappadocia",
    description: "Float above fairy chimneys and ancient cave dwellings as the sunrise paints the Cappadocian landscape in pastel hues.",
    category: "Adventure",
    destination: "Cappadocia, Turkey",
    price: 219,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 11,
    title: "Marrakech Souk & Cooking Class",
    description: "Navigate the vibrant souks of Marrakech with a local guide, then learn to cook tagine and couscous in a traditional riad.",
    category: "Food",
    destination: "Marrakech, Morocco",
    price: 69,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1590944396658-0f1e1f0f0b0b?w=600&q=80"
  },
  {
    id: 12,
    title: "Angkor Wat Sunrise Tour",
    description: "Watch the sunrise over Angkor Wat's iconic spires, then explore the jungle-covered temples of Ta Prohm and Bayon.",
    category: "Culture",
    destination: "Siem Reap, Cambodia",
    price: 45,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80"
  },
  {
    id: 13,
    title: "Icelandic Glacial Lagoon Kayak",
    description: "Paddle between icebergs in Jökulsárlón glacier lagoon, surrounded by floating ice crystals and seals.",
    category: "Adventure",
    destination: "Reykjavik, Iceland",
    price: 179,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&q=80"
  },
  {
    id: 14,
    title: "Bali Rice Terrace Cycling",
    description: "Cycle through Tegallalang rice terraces and tranquil villages, stopping at waterfalls and local warungs along the way.",
    category: "Nature",
    destination: "Ubud, Indonesia",
    price: 49,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80"
  },
  {
    id: 15,
    title: "Parisian Patisserie Workshop",
    description: "Master the art of French pâtisserie with a class on croissants, macarons, and éclairs led by a Parisian chef.",
    category: "Food",
    destination: "Paris, France",
    price: 99,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80"
  },
  {
    id: 16,
    title: "Great Barrier Reef Snorkeling",
    description: "Discover vibrant coral gardens and marine life on a catamaran snorkeling tour of the Great Barrier Reef.",
    category: "Nature",
    destination: "Cairns, Australia",
    price: 159,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&q=80"
  },
  {
    id: 17,
    title: "Lisbon Fado Night Experience",
    description: "Spend an evening in Alfama listening to soulful Fado music while enjoying Portuguese wine and pastéis de nata.",
    category: "Culture",
    destination: "Lisbon, Portugal",
    price: 55,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 18,
    title: "Himalayan Meditation Retreat",
    description: "Find inner peace in a Himalayan ashram with guided meditation, pranayama breathing, and panoramic mountain views.",
    category: "Wellness",
    destination: "Rishikesh, India",
    price: 269,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 19,
    title: "Venice Gondola & Secret Canals",
    description: "Glide through Venice's hidden canals on a private gondola, passing under centuries-old bridges and quiet palazzos.",
    category: "Culture",
    destination: "Venice, Italy",
    price: 89,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80"
  },
  {
    id: 20,
    title: "Costa Rica Zip-line Canopy Tour",
    description: "Soar through the Monteverde cloud forest canopy on a zip-line course with breathtaking views of the rainforest below.",
    category: "Adventure",
    destination: "Monteverde, Costa Rica",
    price: 89,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80"
  },
  {
    id: 21,
    title: "Mongolian Yurt Stay & Steppe Ride",
    description: "Live like a nomad in a traditional ger, ride horses across the endless steppe, and share stories around the campfire.",
    category: "Adventure",
    destination: "Ulaanbaatar, Mongolia",
    price: 399,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 22,
    title: "Barcelona Tapas & Flamenco",
    description: "Hop between tapas bars in the Gothic Quarter, then watch a passionate flamenco show in a historic tablao.",
    category: "Food",
    destination: "Barcelona, Spain",
    price: 75,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 23,
    title: "Petra by Night",
    description: "Walk through the Siq lit by candlelight to reach the Treasury, where a traditional Bedouin music performance awaits.",
    category: "Culture",
    destination: "Petra, Jordan",
    price: 65,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1575881875475-31023242e5f9?w=600&q=80"
  },
  {
    id: 24,
    title: "Swiss Alps Ski Weekend",
    description: "Hit the slopes of Zermatt with a guide, ski the Matterhorn glacier, and relax in a mountain chalet with fondue.",
    category: "Adventure",
    destination: "Zermatt, Switzerland",
    price: 649,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&q=80"
  },
  {
    id: 25,
    title: "Korean BBQ & Soju Night",
    description: "Grill premium beef at a trendy BBQ spot in Myeongdong, paired with soju and an array of banchan sides.",
    category: "Food",
    destination: "Seoul, South Korea",
    price: 49,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 26,
    title: "Okavango Delta Safari",
    description: "Glide through the Okavango Delta in a mokoro canoe, spotting elephants, hippos, and African fish eagles.",
    category: "Nature",
    destination: "Maun, Botswana",
    price: 799,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
  },
  {
    id: 27,
    title: "Havana Classic Car Tour",
    description: "Ride in a vintage Chevrolet through Havana's colorful streets, visiting the Malecón, Old Havana, and local salsa bars.",
    category: "Culture",
    destination: "Havana, Cuba",
    price: 49,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80"
  },
  {
    id: 28,
    title: "Thai Massage & Spa Day",
    description: "Indulge in a full-day spa experience with traditional Thai massage, herbal steam, and aromatic oil treatments.",
    category: "Wellness",
    destination: "Chiang Mai, Thailand",
    price: 69,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 29,
    title: "Dubai Desert Safari & Dune Bashing",
    description: "Race over golden dunes in a 4x4, ride a camel at sunset, and feast under the stars at a Bedouin camp.",
    category: "Adventure",
    destination: "Dubai, UAE",
    price: 119,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 30,
    title: "Prague Craft Beer Tour",
    description: "Visit hidden microbreweries and historic beer halls in Prague, sampling Czech lagers and learning about brewing traditions.",
    category: "Food",
    destination: "Prague, Czech Republic",
    price: 45,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 31,
    title: "Maasai Mara Migration Safari",
    description: "Witness the Great Migration of wildebeest and zebras across the Mara River, with expert Maasai guides.",
    category: "Nature",
    destination: "Nairobi, Kenya",
    price: 899,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
  },
  {
    id: 32,
    title: "Reykjavik Thermal Baths & Northern Lights",
    description: "Soak in geothermal hot springs under the stars and wait for the aurora to dance across the sky.",
    category: "Wellness",
    destination: "Reykjavik, Iceland",
    price: 139,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 33,
    title: "NYC Broadway & Dine Experience",
    description: "Enjoy a pre-theatre dinner at a Michelin-starred restaurant followed by a Broadway musical in Times Square.",
    category: "Culture",
    destination: "New York, USA",
    price: 249,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80"
  },
  {
    id: 34,
    title: "Tuscany Truffle Hunting",
    description: "Join a truffle hunter and his trained dog in the Tuscan hills, then enjoy a truffle-infused farm-to-table lunch.",
    category: "Food",
    destination: "Florence, Italy",
    price: 159,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 35,
    title: "Halong Bay Overnight Cruise",
    description: "Sleep on a traditional junk boat surrounded by emerald waters and limestone karsts in Halong Bay.",
    category: "Nature",
    destination: "Hanoi, Vietnam",
    price: 179,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 36,
    title: "Seville Flamenco Workshop",
    description: "Learn the basics of flamenco footwork and arm movements from a professional dancer in a historic Triana studio.",
    category: "Culture",
    destination: "Seville, Spain",
    price: 55,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 37,
    title: "Torres del Paine W Trek",
    description: "Trek the iconic W circuit in Patagonia past glaciers, turquoise lakes, and the towering horns of Torres del Paine.",
    category: "Adventure",
    destination: "Punta Arenas, Chile",
    price: 549,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"
  },
  {
    id: 38,
    title: "Kerala Ayurvedic Retreat",
    description: "Detox with a week-long Ayurvedic program in Kerala's backwaters, including herbal treatments and yoga.",
    category: "Wellness",
    destination: "Kerala, India",
    price: 449,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 39,
    title: "Cape Town & Table Mountain Hike",
    description: "Hike up Table Mountain at sunrise for panoramic views of Cape Town, then explore the nearby penguin colony.",
    category: "Adventure",
    destination: "Cape Town, South Africa",
    price: 69,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"
  },
  {
    id: 40,
    title: "Mexican Street Food Crawl",
    description: "Taste your way through Mexico City's best street food: tacos al pastor, tlacoyos, elotes, and churros.",
    category: "Food",
    destination: "Mexico City, Mexico",
    price: 39,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 41,
    title: "Lagos Surf & Beach Camp",
    description: "Catch waves on the Algarve coast, with surf lessons, beachside yoga, and fresh seafood dinners.",
    category: "Adventure",
    destination: "Lagos, Portugal",
    price: 199,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 42,
    title: "Kyoto Tea Ceremony & Temple Walk",
    description: "Experience a traditional matcha tea ceremony in a Zen temple, then stroll through bamboo groves and golden pavilions.",
    category: "Culture",
    destination: "Kyoto, Japan",
    price: 85,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80"
  },
  {
    id: 43,
    title: "Maldives Overwater Bungalow Stay",
    description: "Stay in a private overwater villa with glass floors, snorkel with manta rays, and dine on a sandbank.",
    category: "Wellness",
    destination: "Malé, Maldives",
    price: 999,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80"
  },
  {
    id: 44,
    title: "Vienna Classical Concert Night",
    description: "Attend a Mozart and Strauss concert at the Musikverein, followed by a slice of Sachertorte at a traditional café.",
    category: "Culture",
    destination: "Vienna, Austria",
    price: 99,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 45,
    title: "Bora Bora Jet Ski Tour",
    description: "Jet ski across the turquoise lagoon of Bora Bora, stopping at motus for snorkeling and fresh coconut water.",
    category: "Adventure",
    destination: "Bora Bora, French Polynesia",
    price: 229,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 46,
    title: "Colombian Coffee Farm Tour",
    description: "Visit a coffee finca in the Zona Cafetera, pick beans, learn the roasting process, and taste the freshest cup.",
    category: "Food",
    destination: "Salento, Colombia",
    price: 59,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 47,
    title: "Dead Sea Float & Mud Bath",
    description: "Float effortlessly in the hypersaline Dead Sea and cover yourself in mineral-rich mud for the ultimate spa experience.",
    category: "Wellness",
    destination: "Dead Sea, Israel",
    price: 89,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 48,
    title: "Edinburgh Whisky & Ghost Tour",
    description: "Explore Edinburgh's haunted closes and underground vaults, with whisky tastings at historic pubs along the way.",
    category: "Culture",
    destination: "Edinburgh, Scotland",
    price: 55,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 49,
    title: "Galapagos Island Hopping",
    description: "Snorkel with sea lions, giant tortoises, and blue-footed boobies across the pristine Galapagos Islands.",
    category: "Nature",
    destination: "Quito, Ecuador",
    price: 1299,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
  },
  {
    id: 50,
    title: "Buenos Aires Tango Lessons",
    description: "Learn the sensual steps of Argentine tango in a San Telmo milonga, with live bandoneón music and wine.",
    category: "Culture",
    destination: "Buenos Aires, Argentina",
    price: 49,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 51,
    title: "Plitvice Lakes National Park Walk",
    description: "Walk the wooden boardwalks of Plitvice Lakes, a wonderland of cascading turquoise waterfalls and lush forest.",
    category: "Nature",
    destination: "Zagreb, Croatia",
    price: 79,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 52,
    title: "Phuket Island Cooking School",
    description: "Cook your way through a Thai menu in a beachfront kitchen, from green curry to mango sticky rice.",
    category: "Food",
    destination: "Phuket, Thailand",
    price: 65,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 53,
    title: "Sahara Desert Camel Trek",
    description: "Ride a camel across the Erg Chebbi dunes, sleep in a Berber camp, and watch the Milky Way in the desert sky.",
    category: "Adventure",
    destination: "Merzouga, Morocco",
    price: 159,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 54,
    title: "Hong Kong Dim Sum & Skyline",
    description: "Savor authentic dim sum in a Michelin-starred restaurant, then take the Star Ferry for a stunning skyline view.",
    category: "Food",
    destination: "Hong Kong, China",
    price: 89,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 55,
    title: "Lake Bled Island Visit",
    description: "Row to the tiny island in Lake Bled, ring the wishing bell, and enjoy cream cake with alpine views.",
    category: "Nature",
    destination: "Bled, Slovenia",
    price: 45,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 56,
    title: "Jaipur Maharaja Palace Tour",
    description: "Explore the Amber Fort, City Palace, and Hawa Mahal with a royal historian, including a traditional Rajasthani lunch.",
    category: "Culture",
    destination: "Jaipur, India",
    price: 69,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80"
  },
  {
    id: 57,
    title: "Antarctica Cruise Expedition",
    description: "Cross the Drake Passage and explore the White Continent by zodiac, with penguin colonies and icebergs.",
    category: "Adventure",
    destination: "Ushuaia, Argentina",
    price: 4999,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
  },
  {
    id: 58,
    title: "Bali Sound Healing & Yoga",
    description: "Immerse yourself in a sound healing session with crystal bowls and gongs, followed by sunset yoga in Ubud.",
    category: "Wellness",
    destination: "Ubud, Indonesia",
    price: 39,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 59,
    title: "Cinque Terre Coastal Hike",
    description: "Hike the scenic trail connecting the five colorful fishing villages of Cinque Terre, with swimming stops along the way.",
    category: "Adventure",
    destination: "La Spezia, Italy",
    price: 49,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 60,
    title: "Singapore Hawker Center Food Tour",
    description: "Eat your way through Singapore's famous hawker centers, from Hainanese chicken rice to chili crab.",
    category: "Food",
    destination: "Singapore, Singapore",
    price: 45,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 61,
    title: "Great Ocean Road Road Trip",
    description: "Drive the iconic Great Ocean Road past the Twelve Apostles, ancient rainforests, and koala-spotted eucalyptus trees.",
    category: "Nature",
    destination: "Melbourne, Australia",
    price: 129,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 62,
    title: "Cartagena Street Art & Rum Tour",
    description: "Explore Cartagena's vibrant Getsemani street art scene, then taste premium Colombian rum in a colonial courtyard.",
    category: "Culture",
    destination: "Cartagena, Colombia",
    price: 49,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 63,
    title: "Swiss Alpine Yoga Retreat",
    description: "Practice yoga on a mountain meadow above Interlaken, with views of the Eiger, Mönch, and Jungfrau peaks.",
    category: "Wellness",
    destination: "Interlaken, Switzerland",
    price: 499,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 64,
    title: "Bavarian Castle & Beer Tour",
    description: "Visit Neuschwanstein Castle, then enjoy a traditional Bavarian beer hall with pretzels and schnitzel.",
    category: "Culture",
    destination: "Munich, Germany",
    price: 89,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 65,
    title: "Whitsundays Sailing Adventure",
    description: "Sail the turquoise waters of the Whitsunday Islands, visit Whitehaven Beach, and snorkel the Great Barrier Reef.",
    category: "Adventure",
    destination: "Airlie Beach, Australia",
    price: 299,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
  },
  {
    id: 66,
    title: "Amsterdam Canal & Cheese Tour",
    description: "Cruise Amsterdam's canals by boat, then taste Gouda and Edam at a historic cheese market.",
    category: "Food",
    destination: "Amsterdam, Netherlands",
    price: 69,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 67,
    title: "Zhangjiajie Glass Skywalk",
    description: "Walk the glass-bottomed bridge suspended over the stunning quartzite pillars that inspired Avatar's floating mountains.",
    category: "Adventure",
    destination: "Zhangjiajie, China",
    price: 119,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 68,
    title: "Raja Ampat Diving Expedition",
    description: "Dive the most biodiverse marine habitat on Earth, with pristine coral reefs and encounters with manta rays and sharks.",
    category: "Nature",
    destination: "Raja Ampat, Indonesia",
    price: 699,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&q=80"
  },
  {
    id: 69,
    title: "Budapest Thermal Baths Night",
    description: "Visit the Széchenyi Baths after dark, soaking in warm thermal pools under the stars with a Hungarian wine.",
    category: "Wellness",
    destination: "Budapest, Hungary",
    price: 49,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 70,
    title: "Moscow Red Square & Borscht",
    description: "Tour St. Basil's Cathedral and the Kremlin, then warm up with authentic borscht and vodka in a Russian tavern.",
    category: "Culture",
    destination: "Moscow, Russia",
    price: 79,
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 71,
    title: "Zanzibar Spice Island Tour",
    description: "Explore Zanzibar's spice plantations, swim with dolphins, and relax on pristine white-sand beaches.",
    category: "Nature",
    destination: "Zanzibar, Tanzania",
    price: 149,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80"
  },
  {
    id: 72,
    title: "Lake Como Villa & Wine Tour",
    description: "Visit historic villas on Lake Como, cruise past George Clooney's house, and taste Lombardy wines.",
    category: "Culture",
    destination: "Lake Como, Italy",
    price: 149,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80"
  },
  {
    id: 73,
    title: "New Zealand Milford Sound Cruise",
    description: "Cruise through Milford Sound's dramatic fjords, surrounded by towering waterfalls and wild dolphins.",
    category: "Nature",
    destination: "Queenstown, New Zealand",
    price: 89,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 74,
    title: "Oaxaca Mole & Mezcal Workshop",
    description: "Learn to make seven varieties of mole, then tour a mezcal palenque with tastings of artisanal agave spirits.",
    category: "Food",
    destination: "Oaxaca, Mexico",
    price: 79,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 75,
    title: "Dubai Indoor Ski & Après",
    description: "Ski indoors at Ski Dubai's slope, then enjoy cocktails at an alpine-themed lounge with views of the city.",
    category: "Adventure",
    destination: "Dubai, UAE",
    price: 89,
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&q=80"
  },
  {
    id: 76,
    title: "Sri Lanka Tea Plantation Stay",
    description: "Stay in a colonial tea planter's bungalow in Nuwara Eliya, tour the tea factory, and taste Ceylon tea at source.",
    category: "Food",
    destination: "Nuwara Eliya, Sri Lanka",
    price: 119,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 77,
    title: "Atacama Desert Stargazing",
    description: "Stargaze from the Atacama Desert, home to the clearest skies on Earth, with a professional astronomer and telescope.",
    category: "Nature",
    destination: "San Pedro de Atacama, Chile",
    price: 89,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 78,
    title: "Copenhagen Hygge & Bike Tour",
    description: "Cycle through Copenhagen's colorful Nyhavn, visit Tivoli Gardens, and embrace hygge in a cozy café.",
    category: "Culture",
    destination: "Copenhagen, Denmark",
    price: 55,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 79,
    title: "Fiji Private Island Escape",
    description: "Escape to a private island resort with overwater bures, coral reef snorkeling, and a traditional kava ceremony.",
    category: "Wellness",
    destination: "Nadi, Fiji",
    price: 799,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80"
  },
  {
    id: 80,
    title: "Ibiza Sunset Boat Party",
    description: "Party on a luxury catamaran as the sun sets over the Mediterranean, with DJs, drinks, and dancing.",
    category: "Adventure",
    destination: "Ibiza, Spain",
    price: 89,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
  },
  {
    id: 81,
    title: "Provence Lavender Fields & Wine",
    description: "Photograph endless lavender fields in bloom, then taste rosé at a Provençal vineyard in the Luberon valley.",
    category: "Nature",
    destination: "Avignon, France",
    price: 109,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 82,
    title: "Bogotá Coffee & Street Art Tour",
    description: "Explore Bogotá's vibrant street art in La Candelaria, then taste Colombian coffee at a specialty roastery.",
    category: "Culture",
    destination: "Bogotá, Colombia",
    price: 39,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 83,
    title: "Hawaii Volcano Helicopter Tour",
    description: "Fly over Kīlauea's active volcanic crater, cascading waterfalls, and the dramatic Na Pali coastline.",
    category: "Adventure",
    destination: "Hilo, USA",
    price: 329,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 84,
    title: "Tel Aviv Hummus & Falafel Walk",
    description: "Walk through Tel Aviv's Carmel Market tasting the best hummus, falafel, and sabich from legendary vendors.",
    category: "Food",
    destination: "Tel Aviv, Israel",
    price: 49,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 85,
    title: "Lofoten Islands Midnight Sun Hike",
    description: "Hike under the midnight sun in the Lofoten Islands, with dramatic peaks, fjords, and fishing villages.",
    category: "Adventure",
    destination: "Lofoten, Norway",
    price: 249,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"
  },
  {
    id: 86,
    title: "Bruges Chocolate & Beer Tour",
    description: "Indulge in Belgian chocolate-making and sample Trappist beers in the medieval canals of Bruges.",
    category: "Food",
    destination: "Bruges, Belgium",
    price: 59,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 87,
    title: "Nepal Annapurna Base Camp Trek",
    description: "Trek to the Annapurna Base Camp through rhododendron forests, suspension bridges, and Himalayan villages.",
    category: "Adventure",
    destination: "Pokhara, Nepal",
    price: 449,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"
  },
  {
    id: 88,
    title: "San Sebastian Pintxos & Surf",
    description: "Surf the waves of La Concha beach, then hop between pintxos bars in the old town of San Sebastián.",
    category: "Food",
    destination: "San Sebastián, Spain",
    price: 99,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 89,
    title: "Sedona Vortex Healing Retreat",
    description: "Experience the energy vortexes of Sedona with guided hikes, meditation, and crystal healing sessions.",
    category: "Wellness",
    destination: "Sedona, USA",
    price: 399,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  },
  {
    id: 90,
    title: "Patagonia Glacier Ice Hike",
    description: "Hike on the Perito Moreno Glacier with crampons, drink whiskey with glacial ice, and watch ice calve into the lake.",
    category: "Adventure",
    destination: "El Calafate, Argentina",
    price: 189,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"
  },
  {
    id: 91,
    title: "Seoul Temple Stay & Kimchi Class",
    description: "Stay overnight at a Buddhist temple, learn meditation, and make kimchi with a Korean grandmother.",
    category: "Culture",
    destination: "Seoul, South Korea",
    price: 79,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80"
  },
  {
    id: 92,
    title: "Mauritius Underwater Waterfall Flight",
    description: "Take a scenic helicopter flight over the incredible underwater waterfall illusion, then swim with dolphins.",
    category: "Adventure",
    destination: "Port Louis, Mauritius",
    price: 299,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 93,
    title: "Siem Reap Khmer Cooking Class",
    description: "Learn to cook classic Khmer dishes like fish amok and lok lak in a local's home near Siem Reap.",
    category: "Food",
    destination: "Siem Reap, Cambodia",
    price: 39,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 94,
    title: "Scottish Highlands Castle Tour",
    description: "Visit dramatic castles, lochside ruins, and perhaps spot Nessie on a scenic drive through the Highlands.",
    category: "Culture",
    destination: "Inverness, Scotland",
    price: 119,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 95,
    title: "Bora Bora Lagoon Snorkel Safari",
    description: "Snorkel with stingrays, blacktip reef sharks, and colorful fish in the crystal-clear lagoon of Bora Bora.",
    category: "Nature",
    destination: "Bora Bora, French Polynesia",
    price: 149,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&q=80"
  },
  {
    id: 96,
    title: "Reykjavik Food & Culture Walk",
    description: "Sample Icelandic specialties like fermented shark, rye bread ice cream, and lamb soup on a guided walk.",
    category: "Food",
    destination: "Reykjavik, Iceland",
    price: 89,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80"
  },
  {
    id: 97,
    title: "Bali Waterfall & Jungle Swing",
    description: "Visit hidden waterfalls in the Bali jungle, swing over the treetops, and cool off in natural pools.",
    category: "Nature",
    destination: "Ubud, Indonesia",
    price: 49,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80"
  },
  {
    id: 98,
    title: "Dubrovnik Game of Thrones Tour",
    description: "Walk the streets of King's Landing with a professional guide, visiting iconic filming locations from the series.",
    category: "Culture",
    destination: "Dubrovnik, Croatia",
    price: 59,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80"
  },
  {
    id: 99,
    title: "Tulum Cenote & Ruins Exploration",
    description: "Swim in ancient Mayan cenotes and explore clifftop ruins overlooking the Caribbean Sea in Tulum.",
    category: "Adventure",
    destination: "Tulum, Mexico",
    price: 79,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: 100,
    title: "Bali Full Moon Beach Yoga",
    description: "Practice yoga on the beach under the full moon, with the sound of waves and a fire dance performance.",
    category: "Wellness",
    destination: "Ubud, Indonesia",
    price: 29,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80"
  }
];