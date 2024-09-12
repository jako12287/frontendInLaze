"use client"
import { useFetchMovies } from "@/hooks/useFetchMovies"
import styles from "../../app/styles/banner.module.css"
import Image from "next/image"
import IconHeart from "../../assets/icons/icon-heart.png"
import Rating from "./core/Rating"
import { Font_IBM } from "../fonts"
import { baseUrl } from "@/utils/axiosInstance"

const Banner = () => {

    const { loading, error, nowPlaying } = useFetchMovies()
    console.log("TCL: Banner -> nowPlaying", nowPlaying)

    


    return (
        <article className={styles.containerBanner}>
            {nowPlaying.slice(1, 2).map((movie: any) => (
                <div key={movie.id}>
                    <Image alt="banner" src={`${baseUrl}${movie.backdrop_path}`} className={styles.imageBanner} width={"100"} height={"100"} />
                   
                    <div className={styles.containerInfo}>

                        <div className={`${styles.textContainer}`}>
                            <h4 className={styles.textTitle}>{movie.title}</h4>
                            <h5 className={styles.textDescripcion}>{movie.overview}</h5>
                        </div>
                        <div className={styles.iconContainer}>
                            <Image alt="Icon heart" src={IconHeart} width={2} height={2} className={styles.iconHeart} />
                            <Rating porcentage={80} />
                        </div>
                    </div>

                </div>
            ))}

            <div className={styles.shadowDown} />

        </article>
    )
}

export default Banner