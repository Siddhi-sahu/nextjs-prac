"use client"

import { signup } from "@/app/actions/user"
import axios from "axios"
import { useState } from "react"

export function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return <div className="flex flex-col justify-center h-screen bg-slate-300">
        <div className="flex justify-center">
            <div className="border rounded-md p-6 bg-pink-100">
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} className="p-2 m-2 rounded-sm" type="text" placeholder="email" />
                <br />
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} className="p-2 m-2 rounded-sm" type="text" placeholder="password" />
                <br />
                <div className="flex justify-center ">

                    <button onClick={async () => {
                        const res = await signup(email, password)
                        console.log(res)
                    }} className="mt-4  bg-pink-700 py-2 px-10 text-white rounded-lg">sign up</button>
                </div>

            </div>

        </div>
    </div>
}