import awura from "../assets/awura.svg";
import { MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-neutral-900 px-10 py-10 border-neutral-700 border-t text-white">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {/* Logo & Title Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3">
            <img src={awura} alt="Awura Logo" className="w-14 h-14" />
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Awura</h1>
              <h2 className="font-light text-neutral-400 text-lg uppercase">
                Technology
              </h2>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="mb-4 font-semibold text-xl">Our Services</h3>
          <ul className="space-y-1 text-neutral-300">
            <li>Software Development</li>
            <li>Web & Mobile Apps</li>
            <li>AI & Cloud Solutions</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-4 font-semibold text-xl">Contact Us</h3>
          <div className="space-y-2 text-neutral-300">
            <p className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-white" />
              <span>Addis Ababa, Bole, Ethiopia</span>
            </p>

            <p className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-white" />
              <span>+251 944751027 </span>
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="mb-4 font-semibold text-xl">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100092874956734"
              className="hover:text-blue-500"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/awura_et"
              className="hover:text-pink-500"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/awura/"
              className="hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-neutral-400 text-sm text-center">
        © 2025 Awura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
