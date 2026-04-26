export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/7mpb3Vr/photo-1555396273-367ea4eb4db5.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Foodie
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Foodie is a modern restaurant web application designed to bring
            delicious meals, fast service, and a smooth online ordering
            experience to your fingertips.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We aim to deliver high-quality food experiences by combining fresh
            ingredients, expert chefs, and modern technology. Our platform makes
            ordering food simple, fast, and enjoyable for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're dining at home or on the go, Foodie ensures that your
            favorite meals are just a click away.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co.com/7mpb3Vr/photo-1555396273-367ea4eb4db5.jpg"
            alt="Restaurant"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white items-center  my-6  px-4">
        <div className="bg-white max-w-6xl mx-auto p-8 text-center rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fresh food, fast delivery, and excellent customer service — all in
            one place. We focus on quality and customer satisfaction above
            everything else.
          </p>
        </div>
      </section>
    </div>
  );
}
