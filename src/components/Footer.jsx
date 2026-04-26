import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={50} height={50} alt="Foodie Logo" />
            <h1 className="text-3xl font-bold text-yellow-500">Foodie</h1>
          </Link>
          <p className="text-gray-400">
            Experience the best food with fresh ingredients and expert chefs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/food"
                className="text-gray-400 hover:text-yellow-400"
              >
                Food Items
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-yellow-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:text-black"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6H17v3h-2a1 1 0 0 0-1 1v2h3l-1 3h-2v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:text-black"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.8a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
            </a>

            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:text-black"
              >
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.2-6.6L5.3 22H2l7.3-8.4L1 2h6.8l4.7 6.1L18.9 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
}
