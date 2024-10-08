const sampleProducts = [
    {
      title: 'Smartphone',
      description: 'Latest model smartphone with advanced features, 128GB storage, 6GB RAM, and an impressive camera.',
      price: 60999.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/41hmUyFtwdL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 50,
    },
    {
      title: 'Laptop',
      description: 'High performance laptop for professionals with 16GB RAM, 512GB SSD, and a sleek design.',
      price: 90999.99,
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craigmdennis-205421.jpg&fm=jpg',
      quantity: 30,
    },
    {
      title: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones with 30 hours of battery life and comfortable design.',
      price: 2099.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/31ztpzzaDSL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 100,
    },
    {
      title: 'Gaming Console',
      description: 'Next-gen gaming console with 4K gaming capabilities and a wide range of exclusive games.',
      price: 4099.99,
      category: 'Electronics',
      image: 'https://elitehubs.com/cdn/shop/products/CosmicByte_Ares_1-min_result-2.jpg?v=1695327080&width=360',
      quantity: 20,
    },
    {
      title: 'Men\'s T-Shirt',
      description: '100% cotton casual t-shirt available in various colors and sizes.',
      price: 1000.99,
      category: 'Clothing',
      image: 'https://assets.ajio.com/medias/sys_master/root/20230609/LsJG/6483127cd55b7d0c635cdc79/-473Wx593H-466230217-offwhite-MODEL.jpg',
      quantity: 200,
    },
    {
      title: 'Women\'s Jacket',
      description: 'Stylish and warm jacket perfect for winter, available in multiple colors.',
      price: 2000.99,
      category: 'Clothing',
      image: 'https://m.media-amazon.com/images/I/51e6dNvl5DL._SX679_.jpg',
      quantity: 150,
    },
    {
      title: 'Running Shoes',
      description: 'Comfortable running shoes with excellent grip and support, perfect for daily workouts.',
      price: 5099.99,
      category: 'Footwear',
      image: 'https://m.media-amazon.com/images/I/81cPy3CpDxL._SX695_.jpg',
      quantity: 75,
    },
    {
      title: 'Wristwatch',
      description: 'Elegant wristwatch with a classic design, suitable for both casual and formal occasions.',
      price: 2099.99,
      category: 'Accessories',
      image: 'https://m.media-amazon.com/images/I/71DSA+AvbVL._SX679_.jpg',
      quantity: 40,
    },
    {
      title: 'Coffee Maker',
      description: 'Automatic coffee maker with programmable settings and a built-in grinder for fresh coffee.',
      price: 1029.99,
      category: 'Home Appliances',
      image: 'https://m.media-amazon.com/images/I/41+9i7GxM0L._SY300_SX300_.jpg',
      quantity: 25,
    },
    {
      title: 'Blender',
      description: 'High-speed blender perfect for smoothies, soups, and sauces with a durable glass pitcher.',
      price: 4799.99,
      category: 'Home Appliances',
      image: 'https://m.media-amazon.com/images/I/41dvv3rtqlL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 35,
    },
    {
      title: 'Gaming Mouse',
      description: 'Ergonomic gaming mouse with customizable DPI settings and RGB lighting.',
      price: 3659.99,
      category: 'Electronics',
      image: 'https://www.thevaluestore.in/image/cache/wp/gj/2020/Logitech/logitech-g502-hero-gaming-mouse-1-1000x1000.webp',
      quantity: 60,
    },
    {
      title: 'Mechanical Keyboard',
      description: 'Mechanical keyboard with RGB backlighting and customizable keys for gamers.',
      price: 4089.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/41SD3xJj7rL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 50,
    },
    {
      title: 'Smartwatch',
      description: 'Feature-packed smartwatch with fitness tracking, heart rate monitor, and notifications.',
      price: 1399.99,
      category: 'Electronics',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch7-l310-sm-l310nzsains-542366980?$730_584_PNG$',
      quantity: 75,
    },
    {
      title: 'Tablet',
      description: 'Portable tablet with a vibrant display and long battery life, perfect for work and play.',
      price: 40999.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/31reJbshTLL._SY445_SX342_QL70_FMwebp_.jpg',
      quantity: 40,
    },
    {
      title: 'Bluetooth Speaker',
      description: 'Compact Bluetooth speaker with powerful sound and a waterproof design.',
      price: 3988.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/31GfiUjXtoL._SY300_SX300_QL70_FMwebp_.jpg',
      quantity: 100,
    },
    {
      title: '4K TV',
      description: 'Ultra HD 4K television with smart features and stunning picture quality.',
      price: 73990.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/51eiFYQhwBL._SY300_SX300_QL70_FMwebp_.jpg',
      quantity: 20,
    },
    {
      title: 'E-Reader',
      description: 'Lightweight e-reader with adjustable lighting and a vast library of books.',
      price: 4138.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/512V-4x-GBL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 30,
    },
    {
      title: 'Drones',
      description: 'High-performance drone with 4K camera and GPS features for stunning aerial photography.',
      price: 3499.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/41PwIJtFe0L._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 15,
    },
   
    
    {
      title: 'Baseball Glove',
      description: 'Durable baseball glove designed for optimal performance and comfort.',
      price: 2698.99,
      category: 'Sports',
      image: 'https://m.media-amazon.com/images/I/51FCi69xkoL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 60,
    },
    {
      title: 'Yoga Blocks',
      description: 'Set of two yoga blocks to enhance flexibility and stability during practice.',
      price: 615.99,
      category: 'Fitness',
      image: 'https://m.media-amazon.com/images/I/41J6+n7GZ0L._SY300_SX300_.jpg',
      quantity: 80,
    },
    {
      title: 'Resistance Bands',
      description: 'Set of resistance bands for strength training and physical therapy.',
      price: 1099.99,
      category: 'Fitness',
      image: 'https://m.media-amazon.com/images/I/51N+KCxOFNS._SX300_SY300_.jpg',
      quantity: 70,
    },
    {
      title: 'Protein Powder',
      description: 'High-quality protein powder for muscle recovery and building strength.',
      price: 6149.99,
      category: 'Fitness',
      image: 'https://m.media-amazon.com/images/I/616cI2pfTOL._SL1200_.jpg',
      quantity: 50,
    },
    {
      title: 'Jump Rope',
      description: 'Durable jump rope for cardio workouts and improving coordination.',
      price: 299.99,
      category: 'Fitness',
      image: 'https://m.media-amazon.com/images/I/41w4vrnZsrL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 90,
    },
    {
      title: 'Balance Board',
      description: 'Fun balance board for improving core strength and stability.',
      price: 3759.99,
      category: 'Fitness',
      image: 'https://m.media-amazon.com/images/I/81PLslvJ5DL.SS700.jpg',
      quantity: 40,
    },
    {
      title: 'Travel Pillow',
      description: 'Comfortable travel pillow for long journeys, providing neck support.',
      price: 299.99,
      category: 'Travel',
      image: 'https://m.media-amazon.com/images/I/51Xanhl3m4L._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 100,
    },
    {
      title: 'Luggage Set',
      description: 'Durable luggage set with multiple compartments and a sleek design.',
      price: 4499.99,
      category: 'Travel',
      image: 'https://m.media-amazon.com/images/I/41RnOYN7cML._SY300_SX300_.jpg',
      quantity: 20,
    },
    {
      title: 'Portable Charger',
      description: 'High-capacity portable charger to keep devices powered on the go.',
      price: 2649.99,
      category: 'Travel',
      image: 'https://m.media-amazon.com/images/I/41fKerpIaGL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 70,
    },
    {
      title: 'Travel Backpack',
      description: 'Versatile travel backpack with multiple pockets for organization and comfort.',
      price: 3299.99,
      category: 'Travel',
      image: 'https://m.media-amazon.com/images/I/61hFOcrPYbL._SX679_.jpg',
      quantity: 40,
    },

    {
      title: 'Sunglasses',
      description: 'Stylish UV-protected sunglasses for outdoor activities and beach days.',
      price: 2099.99,
      category: 'Beach',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMZkmBFlaTnSYfdCuv6hFftdi08a5krCO31TODj0gDyFJTCW0p05NrglpPN9H3skFwRen2_jxDZbR_1V1zmrbbb3K8YNW1M3nl9HowrOupcwomkJt-bK0oxQ',
      quantity: 100,
    },

    {
      title: 'Beach Umbrella',
      description: 'Large beach umbrella providing shade and protection from the sun.',
      price: 1498.99,
      category: 'Beach',
      image: 'https://m.media-amazon.com/images/I/51vfh0iIKFL._SX679_.jpg',
      quantity: 30,
    },
 
    {
      title: 'Camping Chair',
      description: 'Portable camping chair with cup holder, perfect for outdoor relaxation.',
      price: 5224.99,
      category: 'Outdoor',
      image: 'https://m.media-amazon.com/images/I/41xRcZsFtGL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 80,
    },
    {
      title: 'Fire Pit',
      description: 'Outdoor fire pit for cozy evenings and gatherings with friends.',
      price: 1999.99,
      category: 'Outdoor',
      image: 'https://meubon.com/cdn/shop/files/outland-portable-24-fire-pits-outdoor-wood-burning-weather-resistant-easy-to-clean-547_931x931.jpg?v=1702666239',
      quantity: 25,
    },
    {
      title: 'Portable Grill',
      description: 'Compact portable grill for outdoor cooking and barbecues.',
      price: 1248.99,
      category: 'Outdoor',
      image: 'https://m.media-amazon.com/images/I/51uAQX5sQQL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 40,
    },
    {
      title: 'Tent',
      description: 'Weather-resistant camping tent for outdoor adventures and family trips.',
      price: 12000.99,
      category: 'Outdoor',
      image: 'https://theadaptaffairs.com/wp-content/uploads/2024/07/51pxtTi9KyL.jpg',
      quantity: 20,
    },
    {
      title: 'Camping Stove',
      description: 'Lightweight camping stove for cooking meals in the great outdoors.',
      price: 3199.99,
      category: 'Outdoor',
      image: 'https://m.media-amazon.com/images/I/51lklsPRBrL._SY300_SX300_QL70_FMwebp_.jpg',
      quantity: 50,
    },
    
    {
      title: 'Pet Carrier',
      description: 'Comfortable pet carrier for safe travel with your furry friend.',
      price: 5099.99,
      category: 'Pets',
      image: 'https://m.media-amazon.com/images/I/51ac4RPIErL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 60,
    },
    {
      title: 'Dog Bed',
      description: 'Cozy dog bed with a soft cushion for ultimate comfort.',
      price: 2049.99,
      category: 'Pets',
      image: 'https://m.media-amazon.com/images/I/419aPs0pKlL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 70,
    },
    {
      title: 'Pet Food Bowl',
      description: 'Stylish and durable pet food bowl for your furry friends.',
      price: 599.99,
      category: 'Pets',
      image: 'https://m.media-amazon.com/images/I/415gq65AMML._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 120,
    },
    {
      title: 'Smartphone Case',
      description: 'Protective smartphone case with shock-absorbent technology.',
      price: 4169.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/31Bml5blkYL._SY445_SX342_QL70_FMwebp_.jpg',
      quantity: 150,
    },
    {
      title: 'Wireless Earbuds',
      description: 'High-quality wireless earbuds with noise-cancellation features.',
      price: 5000.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/61KVX-MbIUL._SX569_.jpg',
      quantity: 80,
    },
    {
      title: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with excellent sound quality and battery life.',
      price: 1498.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/41b77upnZFL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 100,
    },
    {
      title: 'Smartwatch',
      description: 'Stylish smartwatch with fitness tracking and notification features.',
      price: 2498.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/51TCUvsXSWL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 50,
    },
    {
      title: 'Laptop Stand',
      description: 'Ergonomic laptop stand to improve posture and comfort during work.',
      price: 849.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/41fdaPWib+L._SY300_SX300_.jpg',
      quantity: 70,
    },
    {
      title: 'HDMI Cable',
      description: 'High-speed HDMI cable for connecting devices with 4K support.',
      price: 149.99,
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/41toj7eQWmL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 200,
    },
    {
      title: 'Camera Tripod',
      description: 'Adjustable camera tripod for stable photography and videography.',
      price: 798.99,
      category: 'Photography',
      image: 'https://m.media-amazon.com/images/I/41Fm0YcrDqL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 60,
    },
    {
      title: 'Ring Light',
      description: 'Adjustable ring light for professional-quality lighting in photos and videos.',
      price: 898.99,
      category: 'Photography',
      image: 'https://m.media-amazon.com/images/I/31rrPBKdohL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 40,
    },
    {
      title: 'Camera Backpack',
      description: 'Specialized backpack for carrying camera gear safely and securely.',
      price: 4018.99,
      category: 'Photography',
      image: 'https://img.kentfaith.com/cache/catalog/products/us/813010019V1/813010019V1-1-518x518.jpg',
      quantity: 30,
    },
    {
      title: 'Photography Backdrops',
      description: 'Versatile photography backdrops for studio and outdoor shoots.',
      price: 50000.99,
      category: 'Photography',
      image: 'https://meubon.com/cdn/shop/files/photography-studio-lighting-kit-upgraded-100polyester-backdrop-umbrella-softbox-lights-854_931x931.jpg?v=1702660670',
      quantity: 50,
    },

    {
      title: 'Fiction Novel',
      description: 'Captivating fiction novel that explores themes of love and adventure.',
      price: 2000.99,
      category: 'Books',
      image: 'https://m.media-amazon.com/images/I/51Fu5Uo5wZL._SX342_SY445_.jpg',
      quantity: 200,
    },
    {
      title: 'Vinyl Record',
      description: 'Collectible vinyl record featuring classic songs and artists.',
      price: 4693.99,
      category: 'Music',
      image: 'https://m.media-amazon.com/images/I/41jCuqoydCL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 70,
    },
    {
      title: 'Bluetooth Record Player',
      description: 'Stylish record player with Bluetooth connectivity for modern listening.',
      price: 22099.99,
      category: 'Music',
      image: 'https://m.media-amazon.com/images/I/41w9BbkYzyL._SY300_SX300_QL70_FMwebp_.jpg',
      quantity: 30,
    },
    {
      title: 'Headphones',
      description: 'High-quality headphones with noise-cancellation for immersive listening.',
      price: 3988.99,
      category: 'Music',
      image: 'https://m.media-amazon.com/images/I/31eo70r2NWL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 50,
    },
    {
      title: 'Concert Tickets',
      description: 'Tickets to live concerts featuring popular artists and bands.',
      price: 500.99,
      category: 'Music',
      image: 'https://marketplace.canva.com/EAFaZtYIWW4/2/0/1600w/canva-beige-modern-music-event-concert-ticket-fKCEAdUX3_0.jpg',
      quantity: 100,
    },
    {
      title: 'Music Subscription',
      description: 'Monthly subscription for unlimited music streaming and downloads.',
      price: 589.99,
      category: 'Music',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQB7lU7IQ6qrAxv7xh99Tj5ctRYRkPQIkzM_xM00_UT7baLpqngHaQ609Sk_uR0t_E6d82dXHeIPspUpazu-cXl03t-JON3CZ7E7nZZYAKW3uwiTABo16_MyQ&usqp=CAE',
      quantity: 200,
    },
    {
      title: 'Agaro Coffee Maker',
      description: 'Automatic coffee maker with programmable settings for fresh coffee anytime.',
      price: 8999.99,
      category: 'Home Appliances',
      image: 'https://m.media-amazon.com/images/I/41+9i7GxM0L._SY300_SX300_.jpg',
      quantity: 40,
    },
    {
      title: 'Blender',
      description: 'High-performance blender for smoothies and meal preparation.',
      price: 4999.99,
      category: 'Home Appliances',
      image: 'https://www.offandon.in/cdn/shop/files/HamiltonBeachBulletMixer2_679x679.jpg?v=1717154178',
      quantity: 60,
    },
    {
      title: 'Air Fryer',
      description: 'Versatile air fryer for healthier cooking with less oil.',
      price: 13099.99,
      category: 'Home Appliances',
      image: 'https://m.media-amazon.com/images/I/51oA1ZDaPnL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 30,
    },
    {
      title: 'Microwave Oven',
      description: 'Compact microwave oven for quick meals and snacks.',
      price: 7999.99,
      category: 'Home Appliances',
      image: 'https://m.media-amazon.com/images/I/41PLpARn5XL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 50,
    },
    {
      title: 'Toaster',
      description: 'Easy-to-use toaster for perfect toast every time.',
      price: 4179.99,
      category: 'Home Appliances',
      image: 'https://m.media-amazon.com/images/I/61Ll40Jd0NL._SX679_.jpg',
      quantity: 80,
    },
  ];
  module.exports = sampleProducts;