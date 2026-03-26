"use client";

import { useEffect, useState, use } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { Phone, Clock, User, IndianRupee } from "lucide-react";

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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                doctorId: doctor.id,
                bookingTime
            })
        });

        const data = await res.json();

        if (!res.ok) toast.error(data.message);
        else {
            toast.success("Appointment booked");
            setDate("");
            setTime("");
        }
    };

    if (!doctor) return null;

    return (
        <div className="bg-gray-50 min-h-screen py-15 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

                <div className="space-y-12">
                    <div className="relative">
                        <img
                            src={doctor.profileImage || "/doctor-placeholder.png"}
                            className="w-full h-120 object-cover rounded-3xl shadow-lg"
                        />
                        <div
                            className={`absolute bottom-4 right-4 px-5 py-2 rounded-full text-base font-semibold shadow-md ${doctor.available ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                }`}
                        >
                            {doctor.available ? "Available" : "Unavailable"}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Dr. {doctor.name}
                        </h1>
                        <p className="text-2xl font-semibold text-gray-600 mt-3">
                            {doctor.degree}
                        </p>
                        <p className="text-xl text-teal-600 mt-2 font-bold">
                            {doctor.specialization}
                        </p>
                    </div>

                    <div className="space-y-8 text-2xl">
                        <div className="flex items-start gap-4">
                            <Phone className="text-teal-600 mt-1" />
                            <div>
                                <p className="text-gray-500 font-semibold">Phone</p>
                                <p className="text-gray-900 font-bold">{doctor.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-teal-600 mt-1" />
                            <div>
                                <p className="text-gray-500 font-semibold">Experience</p>
                                <p className="text-gray-900 font-bold">
                                    {doctor.experience} years
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <IndianRupee className="text-teal-600 mt-1" />
                            <div>
                                <p className="text-gray-500 font-semibold">Consultation Fee</p>
                                <p className="text-gray-900 font-bold">₹{doctor.fees}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <User className="text-teal-600 mt-1" />
                            <div>
                                <p className="text-gray-500 font-semibold">Gender</p>
                                <p className="text-gray-900 font-bold capitalize">
                                    {doctor.gender}
                                </p>
                            </div>
                        </div>
                    </div>

                    {doctor.about && (
                        <div className="text-gray-800 font-semibold text-xl leading-relaxed">
                            {doctor.about}
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 h-fit lg:sticky lg:top-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                        Book Appointment
                    </h2>

                    {!user && (
                        <div>
                            <button className="w-full py-3 sm:py-4 bg-gray-900 text-white rounded-xl sm:rounded-2xl text-base sm:text-lg hover:bg-black transition">
                                Login to Continue
                            </button>
                        </div>
                    )}

                    {user && !doctor.available && (
                        <div className="text-red-500 text-base sm:text-lg font-semibold">
                            Doctor is currently unavailable
                        </div>
                    )}

                    {user && doctor.available && (
                        <div className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="text-sm sm:text-base text-gray-600">
                                    Select Date
                                </label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="mt-2 w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base sm:text-lg"
                                />
                            </div>

                            <div>
                                <label className="text-sm sm:text-base text-gray-600">
                                    Select Time
                                </label>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="mt-2 w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base sm:text-lg"
                                />
                            </div>

                            <button
                                onClick={bookAppointment}
                                className="w-full py-3 sm:py-4 bg-teal-600 text-white rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:bg-teal-700 transition active:scale-[0.98]"
                            >
                                Confirm Appointment
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}