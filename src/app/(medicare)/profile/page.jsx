"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Pencil, Save } from "lucide-react";

export default function ProfilePage() {

  const [profile, setProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchAll = async () => {
    const [p, a] = await Promise.all([
      fetch("/api/profile"),
      fetch("/api/appointments")
    ]);

    const pData = await p.json();
    const aData = await a.json();

    setProfile(pData.profile);
    setAppointments(aData.appointments || []);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const updateProfile = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
      });

      if (!res.ok) throw new Error();

      toast.success("Updated");
      setEditing(false);

    } catch {
      toast.error("Failed");
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (id) => {
    if (!confirm("Cancel appointment?")) return;

    const res = await fetch(`/api/appointments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "CANCELLED" })
    });

    if (res.ok) {
      toast.success("Cancelled");
      fetchAll();
    }
  };

  if (!profile) return null;

  const input =
    "w-full mt-1 px-3 py-2 border rounded-md text-base focus:ring-2 focus:ring-teal-500 outline-none";

  const statusColor = (s) => {
    if (s === "PENDING") return "text-yellow-600";
    if (s === "CONFIRMED") return "text-green-600";
    if (s === "CANCELLED") return "text-red-500";
    return "text-blue-600";
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-8">

      {/* ===== PROFILE SECTION ===== */}

      <div className="bg-white rounded-xl shadow-sm p-5 space-y-5">

        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            My Profile
          </h1>

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="text-teal-600 flex items-center gap-1 text-sm"
            >
              <Pencil size={16}/> Edit
            </button>
          ) : (
            <button
              onClick={updateProfile}
              className="bg-teal-600 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1"
            >
              <Save size={16}/> {loading ? "Saving..." : "Save"}
            </button>
          )}

        </div>

        {/* FIELDS */}
        <div className="space-y-3 text-[15px]">

          <Row label="Name">
            {editing ? (
              <input
                className={input}
                value={profile.name}
                onChange={(e)=>setProfile({...profile,name:e.target.value})}
              />
            ) : profile.name}
          </Row>

          <Row label="Email">{profile.email}</Row>

          <Row label="Phone">
            {editing ? (
              <input
                className={input}
                value={profile.phone}
                onChange={(e)=>setProfile({...profile,phone:e.target.value})}
              />
            ) : profile.phone}
          </Row>

          <Row label="Gender">
            {editing ? (
              <select
                className={input}
                value={profile.gender}
                onChange={(e)=>setProfile({...profile,gender:e.target.value})}
              >
                <option>MALE</option>
                <option>FEMALE</option>
                <option>OTHER</option>
              </select>
            ) : profile.gender}
          </Row>

          <Row label="DOB">
            {editing ? (
              <input
                type="date"
                className={input}
                value={profile.dob?.split("T")[0]}
                onChange={(e)=>setProfile({...profile,dob:e.target.value})}
              />
            ) : new Date(profile.dob).toLocaleDateString()}
          </Row>

          <Row label="Address">
            {editing ? (
              <textarea
                rows={2}
                className={input}
                value={profile.address}
                onChange={(e)=>setProfile({...profile,address:e.target.value})}
              />
            ) : profile.address}
          </Row>

        </div>

      </div>

      {/* ===== APPOINTMENTS SECTION ===== */}

      <div className="bg-white rounded-xl shadow-sm p-5">

        <h2 className="text-2xl font-bold mb-4">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No appointments yet
          </p>
        ) : (

          <div className="space-y-3">

            {appointments.map((a) => {

              const date = new Date(a.bookingTime).toLocaleString();

              return (
                <div
                  key={a.id}
                  className="flex justify-between items-center px-3 py-3 bg-gray-50 rounded-lg"
                >

                  {/* LEFT */}
                  <div className="leading-tight">

                    <p className="font-medium text-[18px]">
                      Dr. {a.doctor.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {date}
                    </p>

                  </div>

                  {/* RIGHT */}
                  <div className="text-right">

                    <p className={`text-lg font-medium ${statusColor(a.status)}`}>
                      {a.status}
                    </p>

                    {a.status === "PENDING" && (
                      <button
                        onClick={()=>cancelAppointment(a.id)}
                        className="text-red-500 text-xs mt-1"
                      >
                        Cancel
                      </button>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

        )}

      </div>

    </div>
  );
}

/* ROW */

function Row({ label, children }) {
  return (
    <div className="flex gap-2">

      <p className="text-gray-800 text-lg w-24 font-semibold">
        {label} :
      </p>

      <div className="flex-1 text-gray-900 font-semibold">
        {children}
      </div>

    </div>
  );
}