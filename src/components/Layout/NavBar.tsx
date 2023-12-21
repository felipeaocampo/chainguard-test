import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/images/cg-logo.svg";
import { useState } from "react";

export default function NavBar() {
  const [hovered, setHovered] = useState(false);

  const handleDropdownHoverToggle = () => {
    setHovered((prev) => !prev);
  };

  return (
    <header className="flex justify-between max-w-screen-xl mx-auto py-5">
      <div className="logo-wrapper">
        <Link href="/">
          <Image src={Logo} alt="Chainguard Logo" width={146} height={28} />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5 items-center">
          <div
            className="relative"
            onMouseEnter={handleDropdownHoverToggle}
            onMouseLeave={handleDropdownHoverToggle}
          >
            <Link href="/chainguard-images">Products</Link>
            <div
              className={`absolute transition-all duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-56 h-7"></div>
              <div className={`p-4 bg-red-300 leading-none w-56 rounded-lg`}>
                <div className="p-2 hover:bg-green-300 rounded-lg">
                  Chainguard Images
                </div>
                <div className="p-2 hover:bg-green-300 rounded-lg">
                  Chainguard Services
                </div>
              </div>
            </div>
          </div>
          <Link href="/open-source">Open Source</Link>
          <Link href="/unchained">Unchained</Link>
          <Link href="/about">Company</Link>
          <Link
            href="https://console.enforce.dev/auth/login"
            target="_blank"
            className="bg-red-500 py-2 px-4 border border-solid border-black rounded-md text-white"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="bg-red-500 py-2 px-4 border border-solid border-black rounded-md text-white"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
