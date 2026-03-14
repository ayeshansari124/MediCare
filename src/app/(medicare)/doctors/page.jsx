"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DoctorsPage() {

  const [doctors, setDoctors] = useState([]);
  const router = useRouter();

  const fetchDoctors = async () => {
    const res = await fetch("/api/doctors");
    const data = await res.json();
    setDoctors(data.doctors || []);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Doctors
        </h1>
        <p className="text-gray-500 mt-2">
          Experienced specialists ready to help you
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {doctors.map((doctor) => (

          <div
            key={doctor.id}
            onClick={() => router.push(`/doctors/${doctor.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
          >

            {/* Image */}
            <div className="h-60 bg-gray-100 flex items-center justify-center">
              <img
                src={doctor.profileImage || "/doctor-placeholder.png"}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-5 space-y-2 text-sm">
          
          
              <div>
                <span className="font-semibold text-gray-700">Name:</span>{" "}
                <span className="text-gray-800 font-medium">
                  Dr. {doctor.name}
                </span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Degree:</span>{" "}
                <span className="text-gray-600">{doctor.degree}</span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Specialization:</span>{" "}
                <span className="text-gray-600">{doctor.specialization}</span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Experience:</span>{" "}
                <span className="text-gray-600">
                  {doctor.experience} yrs
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Fees:</span>{" "}
                <span className="text-teal-600 font-semibold">
                  ₹{doctor.fees}
                </span>
              </div>

              <div className="pt-2">
                <span className="font-semibold text-gray-700">
                  Availability:
                </span>{" "}
                <span
                  className={`text-xs px-2 py-1 rounded-full ml-1 ${
                    doctor.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {doctor.available ? "Available" : "Unavailable"}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}