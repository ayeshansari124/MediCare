"use client";

import { ShieldCheck, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Certified",
    description: "Accredited hospital with certified medical professionals.",
  },
  {
    icon: Users,
    title: "Experienced Staff",
    description: "Highly trained doctors and support staff ensuring quality care.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency and patient care services.",
  },
  {
    icon: Award,
    title: "Modern Technology",
    description: "Advanced medical equipment and digital healthcare systems.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why Choose Al-Moin Hospital?
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            We prioritize patient safety, advanced treatment methods,
            and compassionate care. Our hospital integrates technology
            and expertise to provide reliable healthcare services.
          </p>

          <div className="mt-6">
            <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE FEATURES */}
        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}