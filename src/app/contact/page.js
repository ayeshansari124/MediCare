"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <main>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-white to-teal-50 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Al-Moin Hospital Hospital
        </h1>
        <p className="mt-4 text-gray-600">
          We’re here to assist you anytime.
        </p>
      </section>

      {/* Contact Info + Map Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <MapPin className="text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600 text-sm">
                  Al Moin Hospital, Bhiwandi,<br />
                  Maharashtra, India - 421302
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">
                  info@Al-Moin Hospital.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Working Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 9:00 AM - 9:00 PM <br />
                  Sunday: Emergency Only
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT MAP + QR */}
          <div className="space-y-6">

            <div className="h-64 rounded-xl overflow-hidden shadow-sm border">
              <iframe
                src="https://www.google.com/maps?q=Al+Moin+Hospital+Bhiwandi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border">
              <Image
                src="/images/map-qr.png"
                alt="QR Code"
                width={100}
                height={100}
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Scan for Directions
                </h4>
                <p className="text-gray-600 text-sm">
                  Scan this QR code to open Google Maps instantly.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Send Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">

            <h2 className="text-3xl font-bold text-gray-800">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Have questions? We’d love to hear from you.
            </p>

            <form className="mt-6 space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                ></textarea>
              </div>

              <button
                type="button"
                disabled={!isLoggedIn}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  isLoggedIn
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                {isLoggedIn ? "Send Message" : "Login Required to Send"}
              </button>

            </form>

          </div>
        </div>
      </section>

    </main>
  );
}