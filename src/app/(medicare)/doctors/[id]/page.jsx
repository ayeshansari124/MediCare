"use client";

import { useEffect, useState, use } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../../context/AuthContext";

export default function DoctorDetailPage({ params }) {

  const { id } = use(params);
  const { user } = useAuth();

  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const fetchDoctor = async () => {

    const res = await fetch(`/api/doctors/${id}`);
    const data = await res.json();

    setDoctor(data.doctor);

  };

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const bookAppointment = async () => {

    if (!date || !time) {
      return toast.error("Select date and time");
    }

    const bookingTime = new Date(`${date}T${time}`);

    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        doctorId: doctor.id,
        bookingTime
      })
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
    } else {
      toast.success("Appointment booked");
      setDate("");
      setTime("");
    }

  };

  if (!doctor) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

      {/* Doctor Profile */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex flex-col md:flex-row gap-6">

          <img
            src={doctor.profileImage || "/doctor-placeholder.png"}
            className="w-48 h-48 object-cover rounded-lg border"
          />

          <div className="space-y-2 text-sm">

            <div>
              <span className="font-semibold text-gray-700">Name:</span>{" "}
              Dr. {doctor.name}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Degree:</span>{" "}
              {doctor.degree}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Specialization:</span>{" "}
              {doctor.specialization}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Gender:</span>{" "}
              {doctor.gender}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Phone:</span>{" "}
              {doctor.phone}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Experience:</span>{" "}
              {doctor.experience} yrs
            </div>

            <div>
              <span className="font-semibold text-gray-700">Fees:</span>{" "}
              ₹{doctor.fees}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Availability:</span>{" "}
              <span
                className={`ml-1 ${
                  doctor.available
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {doctor.available ? "Available" : "Unavailable"}
              </span>
            </div>

          </div>

        </div>

        {/* About */}

        {doctor.about && (
          <div className="mt-6 text-sm">
            <span className="font-semibold text-gray-700">
              About:
            </span>
            <p className="mt-1 text-gray-700 leading-relaxed">
              {doctor.about}
            </p>
          </div>
        )}

      </div>

      {/* Booking Section */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-lg font-semibold mb-4">
          Book Appointment
        </h2>

        {!user ? (

          <div className="text-gray-500 text-sm">
            Please login to book an appointment.
          </div>

        ) : !doctor.available ? (

          <div className="text-red-500 text-sm">
            Doctor currently unavailable.
          </div>

        ) : (

          <div className="space-y-4 max-w-md">

            <div>

              <label className="text-sm text-gray-600">
                Select Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />

            </div>

            <div>

              <label className="text-sm text-gray-600">
                Select Time
              </label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />

            </div>

            <button
              onClick={bookAppointment}
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Confirm Appointment
            </button>

          </div>

        )}

      </div>

    </div>
  );
}