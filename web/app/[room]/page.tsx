import RoomMainComp from "../components/room/RoomMain"
import React from "react"

export default function Room({ params }) {
    return <RoomMainComp key="RoomMainComp" id={params.room} />
}
