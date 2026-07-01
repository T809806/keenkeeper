import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  return (

    <footer className="bg-[#244D3F] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

     
        <div className="text-center">

          <h1 className="text-3xl font-bold mb-3"> KeenKeeper </h1>

          <p className="text-gray-200 max-w-2xl mx-auto leading-7">
            Your personal shelf of meaningful connections.
            Browse, tend, and nurture the relationships
            that matter most.
          </p>

          <div className="flex justify-center gap-6 text-2xl mt-8">

            <FontAwesomeIcon
              icon={faYoutube}
              className="cursor-pointer hover:text-red-400 transition duration-300 hover:scale-110"
            />

            <FontAwesomeIcon
              icon={faFacebook}
              className="cursor-pointer hover:text-blue-400 transition duration-300 hover:scale-110"
            />

            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer hover:text-sky-400 transition duration-300 hover:scale-110"
            />

          </div>

        </div>

       
 <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-center">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>

            <span className="cursor-pointer hover:underline">
              Cookies
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}