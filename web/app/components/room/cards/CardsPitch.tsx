import React from "react"
import "./index.scss"
import { VOCAB_BASIC_01, WORD_COLOR } from "../../../../globals"
import CardsItemComp from "./CardsItem"

type CardsPitchCompProps = {}

const CardsPitchComp = ({}: CardsPitchCompProps) => {
    const words = (amount: number): { title: string; color: WORD_COLOR }[] => {
        let result: { title: string; color: WORD_COLOR }[] = []
        let wordsArray = [...VOCAB_BASIC_01]
        let color: WORD_COLOR[] = [
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.red,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.blue,
            WORD_COLOR.black,
            WORD_COLOR.white,
            WORD_COLOR.white,
            WORD_COLOR.white,
            WORD_COLOR.white,
            WORD_COLOR.white,
            WORD_COLOR.white,
            WORD_COLOR.white,
        ]

        while (result.length !== amount) {
            let id = Math.floor(Math.random() * (wordsArray.length - 1))
            let colorId = Math.floor(Math.random() * (color.length - 1))
            result.push({ title: wordsArray[id], color: color[colorId] })
            wordsArray = wordsArray.filter(
                (str: string) => str !== wordsArray[id]
            )
        }

        return result
    }

    return (
        <div className="cards__wrapper">
            <div className="cards__container">
                {words(25).map((str: any) => (
                    <CardsItemComp
                        key={str.title}
                        title={str.title}
                        color={str.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardsPitchComp
