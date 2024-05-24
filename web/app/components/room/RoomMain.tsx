"use client"

import React from "react"
import CardsPitchComp from "./cards/CardsPitch"

type RoomMainCompProps = {
    id: string
}

const RoomMainComp = ({ id }: RoomMainCompProps) => {
    return (
        <div>
            <div>Room: {id}</div>
            <CardsPitchComp key="CardsPitchComp" />
        </div>
    )
}

export default RoomMainComp
