"use client";

import {
  Ambulance,
  Stethoscope,
  Microscope,
  Pill,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";

const facilities = [
  {
    icon: Ambulance,
    title: "Emergency Care",
    description: "24/7 rapid emergency response services.",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description: "Highly qualified and experienced professionals.",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "Advanced diagnostic and pathology testing.",
  },
  {
    icon: Pill,
    title: "In-House Pharmacy",
    description: "Complete medicine support within hospital.",
  },
  {
    icon: HeartPulse,
    title: "ICU & Critical Care",
    description: "Fully equipped intensive care units.",
  },
  {
    icon: CalendarCheck,
    title: "Online Appointments",
    description: "Quick and easy appointment booking system.",
  },
];

export default function Facilities() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Medical Facilities
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Advanced healthcare services with modern technology and expertise.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-sm transition"
              >
                {/* Icon */}
                <div className="bg-teal-100 p-2 rounded-md">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {facility.description}
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