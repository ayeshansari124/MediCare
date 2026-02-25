"use client";

import Image from "next/image";

export default function AboutHospital() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT - Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/images/hospital-building.jpg"
            alt="Hospital"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT - Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            About Al-Moin Hospital Hospital
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            Al-Moin Hospital Hospital is dedicated to providing high-quality healthcare
            services with advanced medical technology and compassionate care.
            Our team of experienced doctors, nurses, and medical professionals
            work together to ensure every patient receives personalized
            treatment and attention.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            Equipped with modern infrastructure, fully operational ICUs,
            advanced laboratories, and 24/7 emergency support, we aim to
            deliver excellence in healthcare services.
          </p>

          <div className="mt-6">
            <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}