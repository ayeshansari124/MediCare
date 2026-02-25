"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP ROW (Logo + Auth) */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-teal-600 p-2 rounded-lg">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Medi<span className="text-teal-600">cure</span>
            </span>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-teal-600 font-medium text-sm sm:text-base"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-3 py-1.5 bg-teal-600 text-white rounded-lg text-sm sm:text-base"
            >
              Register
            </Link>
          </div>
        </div>

        {/* SECOND ROW (Nav Links) */}
        {/* SECOND ROW (Equal Distributed Nav Links) */}
<div className="border-t border-gray-200">
  <div className="grid grid-cols-5 text-center text-gray-700 font-medium">

    <Link
      href="/"
      className="py-3 hover:bg-teal-50 hover:text-teal-600 transition"
    >
      Home
    </Link>

    <Link
      href="/doctors"
      className="py-3 hover:bg-teal-50 hover:text-teal-600 transition"
    >
      Doctors
    </Link>

    <Link
      href="/gallery"
      className="py-3 hover:bg-teal-50 hover:text-teal-600 transition"
    >
      Gallery
    </Link>
 <Link
      href="/about"
      className="py-3 hover:bg-teal-50 hover:text-teal-600 transition"
    >
      About
    </Link>
    <Link
      href="/contact"
      className="py-3 hover:bg-teal-50 hover:text-teal-600 transition"
    >
      Contact
    </Link>

  </div>
</div>

      </div>
    </nav>
  );
}