import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export async function POST(req: NextRequest) {
    //extract the body

    const body = await req.json()

    //store the body in t he database

    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    //send response to user

    return Response.json({
        message: "You are logged in"
    })

}

export function GET() {
    return Response.json({
        name: "himani",
        email: "himanin@gmail.com"
    })
}