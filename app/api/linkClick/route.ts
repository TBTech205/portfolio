// pages/api/users.ts
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url) {
    return new NextResponse("URL is required", { status: 400 });
  }

  const link = await prismadb.linkClick.create({
    data: {
      url,
      clickedAt: new Date(),
    }
  });

  return NextResponse.json(link);
}

export async function GET() {
  const links = await prismadb.linkClick.findMany();

  return NextResponse.json(links);
}