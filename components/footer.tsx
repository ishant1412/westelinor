import Image from "next/image";
import footerBg from "@/assets/westelinor/texture.jpeg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative min-h-[500px] z-50  text-white overflow-hidden">
      {/* Background */}
      <Image
        src={footerBg}
        alt="footer background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-16">

          {/* WHY US */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              WHY US ?
            </h3>

            <p className="leading-8 text-gray-100 text-justify">
              WESTELINOR aims to accelerate your business productivity
              and profitability through intelligent digital solutions.
              Our experienced team helps organizations streamline
              operations, improve efficiency, and leverage AI-driven
              technologies to achieve sustainable growth.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">
              SOCIAL NETWORKS
            </h3>

            <div className="flex justify-center gap-6 text-5xl text-cyan-400">

              <a href="https://www.facebook.com/westelinorTECH">
                <FaFacebookF className="hover:scale-110 transition" />
              </a>

              <a href="x.com">
                <FaXTwitter className="hover:scale-110 transition" />
              </a>

              <a href="https://www.instagram.com/westelinortech/">
                <FaInstagram className="hover:scale-110 transition" />
              </a>

              <a href="https://www.linkedin.com/company/westelinor/">
                <FaLinkedinIn className="hover:scale-110 transition" />
              </a>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              CONTACT US
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <FaLocationDot className="text-cyan-400 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Head Office :
                  </h4>

                  <p>
                    5125 W. Oquendo Rd<br />
                    Ste 12<br />
                    Las Vegas, NV 89118<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaLocationDot className="text-cyan-400 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Branch Office :
                  </h4>

                  <p>
                    Govindpuri<br />
                    Kalkaji, New Delhi<br />
                    India - 110019
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400" />
                <span>+91-982-912-9549</span>
              </div>

              <div className="flex items-center gap-4">
                <MdEmail className="text-cyan-400 text-xl" />
                <span>info@westelinor.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-20 text-gray-300">
          © 2026 SUPERAI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}