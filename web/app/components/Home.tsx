"use client"

import { useRouter } from "next/navigation"
import React from "react"

type HomeCompProps = {}

const HomeComp = ({}: HomeCompProps) => {
    const router = useRouter()

    return (
        <div>
            <div>hi, there</div>
            <button
                onClick={() => {
                    router.push(
                        `${Math.floor(Math.random() * 900000) + 100000}`
                    )
                }}
            >
                Створити каточку
            </button>
        </div>
    )
}

export default HomeComp
