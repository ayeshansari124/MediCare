import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

  const { id } = params;

  const doctor = await prisma.doctor.findUnique({
    where: { id }
  });

  return NextResponse.json({ doctor });

}