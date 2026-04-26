"use clint";
export default function ContactPage() {
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
            Contact Us
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Have a question, feedback, or want to place a custom order? We are
            here to help you anytime.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto  items-center">
          {/* Text Side */}
          <div className="bg-white p-8 text-center rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Us</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              123 Food Street, Dhaka, Bangladesh
              <br />
              We are open every day from 10 AM to 10 PM.
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-full transition">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
