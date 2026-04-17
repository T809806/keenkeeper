import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#244D3F] to-[#1d3f34] text-white mt-16">

      {/* Top Section */}
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-2">KeenKeeper</h1>

        <p className="text-sm mb-6 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <FontAwesomeIcon icon={faFacebook} className="hover:scale-110 cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="hover:scale-110 cursor-pointer" />
          <FontAwesomeIcon icon={faYoutube} className="hover:scale-110 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-white/20 text-sm">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Terms of Service</span>
          <span className="cursor-pointer hover:underline">Cookies</span>
        </div>
      </div>

    </footer>
  );
}