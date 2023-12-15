import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/images/cg-logo.svg";

export default function NavBar() {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto py-5">
      <div className="logo-wrapper">
        <Link href="/">
          <Image src={Logo} alt="Chainguard Logo" width={146} height={28} />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5 items-center">
          <Link href="/chainguard-images">Products</Link>
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
