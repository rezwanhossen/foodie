"use client";

export default function Home() {
  const menuItems = [
    {
      name: "Grilled Chicken",
      price: "$12",
      img: "https://i.ibb.co.com/9mzD2974/Grilled-Chicken-V1-1152x1536.jpg",
    },
    {
      name: "Beef Steak",
      price: "$18",
      img: "https://i.ibb.co.com/hVPHv3b/thai-beef-salad-1980x1320-118406-1.jpg",
    },
    {
      name: "Pasta Alfredo",
      price: "$10",
      img: "https://i.ibb.co.com/MxStjgYc/images.jpg",
    },
  ];

  const features = [
    {
      title: "Fresh Ingredients",
      desc: "We carefully select only fresh, organic, and high-quality ingredients every day to ensure the best taste and healthy dining experience for our customers.",
    },
    {
      title: "Expert Chefs",
      desc: "Our professional chefs are highly experienced in international and local cuisine, ensuring every dish is cooked to perfection with great taste and presentation.",
    },
    {
      title: "Fast Delivery",
      desc: "We provide quick, safe, and reliable delivery service so your food arrives hot and fresh at your doorstep without any delay.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      text: "The food was absolutely amazing, full of flavor and perfectly cooked. The service was fast, friendly, and made the whole dining experience very enjoyable.",
    },
    {
      name: "Sarah Khan",
      text: "One of the best restaurant experiences I’ve ever had. The atmosphere was cozy, and every dish we ordered was fresh, delicious, and beautifully presented.",
    },
    {
      name: "Alex Lee",
      text: "Highly recommended! Great taste, excellent customer service, and quick delivery. I will definitely come back again with my friends and family.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/7mpb3Vr/photo-1555396273-367ea4eb4db5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Delicious Food, Cozy Atmosphere
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Experience the best taste at your favorite restaurant
          </p>

          <a
            href="#menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gray-50 max-w-7xl mx-auto">
        {/* 1. Menu Section */}
        <section id="menu" className="py-16 px-4 ">
          <h2 className="text-3xl font-bold text-center mb-10">
            Popular Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className=" h-48 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-yellow-500 font-bold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Features */}
        <section className="py-16 bg-white px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Testimonials */}
        <section className="py-16 px-4 ">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-600 mb-4">"{t.text}"</p>
                <h4 className="font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Promo Banner */}
        <section className="py-16 bg-yellow-500 text-center text-black">
          <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
          <p className="mb-6">Get 20% off on your first order</p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Order Now
          </button>
        </section>
      </div>
    </div>
  );
}
