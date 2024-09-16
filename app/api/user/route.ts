import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient()

// export async function GET() {
//     //do validation here 
//     //hit the database here
//     const user = await client.user.findFirst()
//     return NextResponse.json({
//         name: "himani",
//         email: user?.email
//     })
// }

export async function POST(req: NextRequest) {


    const body = await req.json();

    try {
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })


        return NextResponse.json({
            body
        })


    } catch (e) {

        console.log(e)
        return NextResponse.json({
            msg: "error while signing up"
        }, {
            status: 411
        })

    }


}

//example
// export async function POST(req: NextRequest) {

//     //body
//     const body = await req.json();
//     console.log(body)

//     //headers
//     console.log(req.headers.get("authorization"))

//     //query parameter
//     console.log(req.nextUrl.searchParams.get("name"))

//     //hit the database with username, password

//     return NextResponse.json({
//         msg: "you are signed up"
//     })

// }