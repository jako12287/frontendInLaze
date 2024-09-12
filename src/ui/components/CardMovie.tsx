import Link from "next/link"
import { FC } from "react"
import styles from "../../app/styles/cardMovie.module.css"
import Image from "next/image"
import IconHeart from "../../assets/icons/icon-heart.png"
import Rating from "./core/Rating"
import { Font_IBM, Font_Inter } from "../fonts"
import { baseUrl, baseUrlW500 } from "@/utils/axiosInstance"

interface PropsCardMovie {
    id: string
    title: string
    release_date: string
    vote_average: number
    backdrop_path:string



}

const CardMovie: FC<PropsCardMovie> = ({ id, title, release_date, vote_average, backdrop_path
}) => {
    return (
        <div className={styles.conatinerCard}>
            <Link href={`/movies/${id}`} >
                <div className={styles.containerImage}>
                    <Image alt="background" src={`${baseUrlW500}${backdrop_path}`} width={100} height={100} className={styles.imageBG}/>
                </div>
                <div className={styles.containerData}>
                    <div>
                        <span className={`${styles.titleCard} ${Font_Inter.className}`}>

                        {title}
                        </span>
                        <span>

                        {release_date}
                        </span>
                    </div>
                    <div>
                        <div>
                            <span>Rating</span>
                            <span>{vote_average}</span>
                        </div>
                        <div>
                            <span>Favorite</span>
                            <span><Image alt="favorite" src={IconHeart} width={12} height={12} /></span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardMovie