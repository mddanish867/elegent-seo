const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-serif mb-4 text-orange-300">
                Elegance SEO
              </h3>
              <p className="text-gray-400">
                Elevating brands through sophisticated SEO strategies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-orange-300 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-orange-300 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-orange-300 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-orange-300 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="/process"
                    className="text-white hover:text-orange-300 transition duration-300"
                  >
                    Process
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="/journey"
                    className="text-white hover:text-orange-300 transition duration-300"
                  >
                    Journey
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">info@eleganceseo.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-300 transition duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-300 transition duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-300 transition duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-300">
            © {new Date().getFullYear()} Elegance SEO. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
