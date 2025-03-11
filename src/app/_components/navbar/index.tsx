/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { useState } from "react";
// import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { ClashDisplay } from "@/fonts";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Registration", href: "/register" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full bg-transparent bg-opacity-80 shadow-md backdrop-blur-md ${ClashDisplay.className} z-50 text-white`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className={`text-2xl font-bold`}>
            <Link href="/">Soiree</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl text-brown"
            >
              {isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-brown`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`h-dvh md:hidden`}>
          <div className="flex h-4/5 flex-col items-center justify-evenly space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brown"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
