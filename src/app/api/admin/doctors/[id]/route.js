import { prisma } from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

  const { id } = await params; // ✅ FIX

  const doctor = await prisma.doctor.findUnique({
    where: { id },
    include: {
      user: true,
      appointments: {
        include: {
          patient: true
        },
        orderBy: {
          bookingTime: "desc"
        }
      }
    }
  });

  if (!doctor) {
    return NextResponse.json(
      { message: "Doctor not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ doctor });
}


export async function PATCH(req, { params }) {

  const { id } = await params;

  const formData = await req.formData();

  const data = {
    name: formData.get("name"),
    gender: formData.get("gender"),
    degree: formData.get("degree"),
    specialization: formData.get("specialization"),
    experience: Number(formData.get("experience")),
    fees: Number(formData.get("fees")),
    about: formData.get("about"),
    phone: formData.get("phone"),
    available: formData.get("available") === "true"
  };

  const doctor = await prisma.doctor.update({
    where: { id },
    data
  });

  return NextResponse.json({ doctor });

}

export async function DELETE(req, { params }) {

  const { id } = await params; // ✅ FIX

  await prisma.doctor.delete({
    where: { id }
  });

  return NextResponse.json({
    message: "Doctor deleted"
  });
}