"use client"
import React, { useState } from "react"
import { WORD_COLOR } from "../../../../globals"

type CardItemCompProps = {
    title: string
    color: WORD_COLOR
}

const CardsItemComp = ({ title, color }: CardItemCompProps) => {
    const [hidden, setHidden] = useState<boolean>(false)

    return (
        <div
            className={
                "carditem__container " +
                (hidden && `carditem__container-${color}`)
            }
            onClick={() => {
                setHidden((state: Boolean) => !state)
            }}
        >
            <div
                className={
                    "carditem__text " +
                    (hidden &&
                        color === WORD_COLOR.white &&
                        `carditem__text-${color}`)
                }
            >
                {title}
            </div>
        </div>
    )
}

export default CardsItemComp
