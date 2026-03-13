"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import CreateDoctorModal from "../../../components/modals/CreateDoctorModal";
import toast from "react-hot-toast";

export default function AdminDoctorsPage() {

  const [doctors, setDoctors] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchDoctors = async () => {
    try {
      const res = await fetch("/api/admin/doctors");
      const data = await res.json();
      setDoctors(data.doctors || []);
    } catch {
      toast.error("Failed to load doctors");
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <h1 className="text-2xl font-semibold">
          Doctors
        </h1>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
        >
          <Plus size={18} />
          Add Doctor
        </button>

      </div>

      {/* Doctors Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">Doctor</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Fees</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {doctors.map((doc) => (
              <tr key={doc.id} className="border-b">

                <td className="p-4 font-medium">
                  {doc.name}
                </td>

                <td>{doc.specialization}</td>

                <td>{doc.experience} yrs</td>

                <td>₹{doc.fees}</td>

                <td>
                  {doc.available ? "Available" : "Unavailable"}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Modal */}
      <CreateDoctorModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        refreshDoctors={fetchDoctors}
      />

    </div>
  );
}