"use client";

import { useEffect, useState } from "react";

export default function ContactSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-stretch">

        {/* LEFT - Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps?q=Al+Moin+Hospital+Bhiwandi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT - Form */}
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
  );
}