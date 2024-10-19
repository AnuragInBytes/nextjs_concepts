import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest){
  //extract body
  const body = await req.json();

  //store body in db
  console.log(body);
  await client.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })

  return Response.json({
    message: "You are logged in",
  })
}