// pages/api/users.ts
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  // todo get the user's ip address

  const visitor = await prismadb.visitor.create({
    data: {
      ip: "",
      visitedAt: new Date(),
    },
  });

  return NextResponse.json(visitor);
}

export async function GET() {
  const visitors = await prismadb.visitor.findMany();

  return NextResponse.json(visitors);
}