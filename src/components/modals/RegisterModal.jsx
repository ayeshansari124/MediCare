"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function RegisterModal({
  isOpen,
  onClose,
  switchToLogin,
}) {
  const { fetchUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.phone) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      await fetchUser(); // 🔥 auto login

      toast.success("Account created & logged in");
      onClose();

      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
      });

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="relative bg-white w-[400px] rounded-2xl shadow-2xl p-8">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={20} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Join Al-Moin Hospital
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-2.5 rounded-lg hover:bg-teal-700 transition font-medium disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already a user?{" "}
          <button
            onClick={switchToLogin}
            className="text-teal-600 hover:underline font-medium"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
}