import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const token = randomUUID();

  await prismadb.dev.create({
    data: {
      token,
      createdAt: new Date(),
    },
  });

  fetch('https://api.useplunk.com/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk_177cf75b8dafc7f12f15487c5042900526eb7a06b00c79ac',
    },
    body: JSON.stringify({
      to: "tylerbeadle658@gmail.com",
      subject: 'Verify login attempt',
      text: `Hello Tyler, Are you trying to login click here to log in http://localhost:3000/dev/verify?token=${token}`,
    }),
  })

  console.log('token', token);

  return new NextResponse("Created", { status: 201 });
}

export async function GET(req: NextResponse) {

  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  
  const token = params.get('token');

  if (!token) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const dbToken = await prismadb.dev.findUnique({
    where: {
      token,
    },
  });

  if (!dbToken) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // expire token after 5 mins
  // if (new Date().getTime() - dbToken.createdAt.getTime() > 300000) {
  //   return new NextResponse("Unauthorized", { status: 401 });
  // }

  // validate token
  if (dbToken.token !== token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  console.log('token', token);

  return new NextResponse("OK", { status: 200 });
}