import Image from "next/image";
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

import Container from "../templates/Container";
import logo from "@/assets/icons/logo-white.svg"

const Footer = () => {
  return (
    <Container htmlTag="footer" className="px-6 py-12 mt-20 bg-sky-950 sm:px-8 sm:py-15">
      <div className="flex flex-col justify-start items-start gap-10 lg:flex-row lg:gap-32">
        <div className="flex flex-col gap-y-6">
          <Image src={logo} width={64} height={64} alt="logo" />
        </div>
        <div className="grid grid-cols-1 gap-x-28 gap-y-10 xs:grid-cols-2 sm:grid-cols-3 sm:gap-28">
          <div className="flex flex-col items-start">
            <h3 className="mb-4 font-heading font-semibold text-lg ![leading-1.3] text-neutral-1">
                Sosial Media
            </h3>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                  <FaFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                  <FaInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                  <FaTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                  <FaTiktok />
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                  <FaYoutube />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
              <h3 className="mb-4 font-heading font-semibold text-lg ![leading-1.3] text-neutral-1">
                  Kontak
              </h3>
              <ul className="flex flex-col items-start gap-4">
                <li>
                  <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                    <FaWhatsapp />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="flex items-center gap-1.5 text-base text-neutral-1">
                    <BiLogoGmail />
                    Gmail
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
