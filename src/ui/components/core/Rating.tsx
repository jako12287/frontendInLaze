"use client"
import { FC, useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from "../../../app/styles/Rating.module.css"
import { Font_IBM } from "@/ui/fonts";

interface PropsRating {
    porcentage: number
}

const colorCircle = {
    low: {
        pathColor: "#E54545",
        trailColor: "#E5454550"
    },
    medium: {
        pathColor: "#FF8800",
        trailColor: "#FF880050"
    },
    high: {
        pathColor: "#4DA14F",
        trailColor: "#4DA14F50"
    },
}

const Rating: FC<PropsRating> = ({ porcentage = 10 }) => {
    const [color, setColor] = useState<string>("low")

    useEffect(() => {
        if (porcentage <= 30) {
            return setColor("low")
        } else if (porcentage <= 70) {
            return setColor("medium")
        } else {
            return setColor("high")
        }
    }, [porcentage])
    return (
        <div className={styles.containerCircle}>

            <CircularProgressbar
                value={porcentage}
                text={`${porcentage}%`}
                className={`${styles.circular}${Font_IBM.className}`}
                strokeWidth={7}
                styles={buildStyles({
                    textColor: "#fff",
                    pathColor: colorCircle[color].pathColor,
                    trailColor: colorCircle[color].trailColor, textSize:"28px"
                })} />
        </div>
    )
}

export default Rating