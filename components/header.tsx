"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/elinor.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router= useRouter()
  const links = [
    {
      title: "HOME",
      address: "/",
      onhoverlist: [],
    },
    {
      title: "ABOUT",
      address: "/about-us",
      onhoverlist: [],
    },
    {
      title: "SOLUTION",
      address: "#",
      onhoverlist: [
        {
          title: "Web Application",
          address: "/solutions/web-application",
        },
        {
          title: "Mobile Application",
          address: "/solutions/mobile-application",
        },
        {
          title: "Learning and Development",
          address: "/solutions/learning",
        },
        {
          title: "Training Solutions",
          address: "/solutions/training-solutions",
        },
        {
          title: "Business Development",
          address: "/solutions/business-development",
        },
      ],
    },
    {
      title: "SERVICES",
      address: "#",
      onhoverlist: [
        {
          title: "Web Development",
          address: "/services/web-development",
        },
        {
          title: "Mobile Development",
          address: "/services/mobile-development",
        },
        {
          title: "E-Learning Services",
          address: "/services/elearning",
        },
        {
          title: "Digital Marketing",
          address: "/services/digital-marketing",
        },
        {
          title: "LMS Service",
          address: "/services/lms",
        },
      ],
    },
    {
      title: "SHOWCASE",
      address: "/projects",
      onhoverlist: [],
    },
    {
      title: "BLOGS",
      address: "/blogs",
      onhoverlist: [],
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gradient-to-b from-white to-blue-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Elinor Logo"
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <div key={link.title} className="group relative">
                  <Link
                    href={link.address}
                    className="relative py-2 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
                  >
                    {link.title}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        w-0
                        bg-blue-600
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>

                  {link.onhoverlist.length > 0 && (
                    <div
                      className="
                        invisible
                        absolute
                        left-0
                        top-full
                        z-50
                        mt-2
                        min-w-64
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        opacity-0
                        shadow-xl
                        translate-y-3
                        transition-all
                        duration-300
                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <div className="p-2">
                        {link.onhoverlist.map((child) => (
                          <Link
                            key={child.address}
                            href={child.address}
                            className="
                              block
                              rounded-lg
                              px-4
                              py-3
                              text-sm
                              text-gray-700
                              transition-all
                              duration-200
                              hover:bg-blue-50
                              hover:text-blue-600
                            "
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <button
                className="
                  rounded-md
                  bg-blue-600
                  px-5
                  py-2
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 py-4 lg:hidden">
              {links.map((link) => (
                <div key={link.title}>
                  {link.onhoverlist.length > 0 ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.title
                              ? null
                              : link.title
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          py-3
                          text-left
                          font-medium
                          text-gray-700
                        "
                      >
                        {link.title}

                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.title
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === link.title && (
                        <div className="pl-4">
                          {link.onhoverlist.map((child) => (
                            <Link
                              key={child.address}
                              href={child.address}
                              className="
                                block
                                py-2
                                text-sm
                                text-gray-600
                                hover:text-blue-600
                              "
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.address}
                      className="
                        block
                        py-3
                        font-medium
                        text-gray-700
                        hover:text-blue-600
                      "
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}

              <button
                className="
                  mt-4
                  w-full
                  rounded-md
                  bg-blue-600
                  py-3
                  font-medium
                  text-white
                  hover:bg-blue-700
                "
                
              >
                Get in Touch
              </button>

            </div>
          )}
        </div>
      </header>
    </>
  );
}