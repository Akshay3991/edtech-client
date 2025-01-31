import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";

function Footer() {
  return (
    <footer className="bg-[#010801] w-[100vw]   text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                width="80px"
                height="80px"
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-center md:text-left">
              Education Mart is your one-stop destination for quality education and learning resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-yellow-400 transition-all duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition-all duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-yellow-400 transition-all duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: educationmart03@gmail.com</li>
              <li>Phone: +91 9992424806</li>
              <li>Address: Cdlsiet,Panniwala Mota ,Sirsa 125077</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Education Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;