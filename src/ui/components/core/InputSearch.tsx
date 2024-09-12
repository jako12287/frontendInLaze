import { FC } from "react"
import styles from "../../../app/styles/inputSearch.module.css"
import Image from "next/image"
import IconSearch from "../../../assets/icons/Icon-search.png"

const InputSearch: FC<{ label: string }> = ({ label = "Search" }) => {
    return (
        <>
            <h3 className={styles.textLabel}>{label}</h3>
            <div className={styles.containerInput}>

                <input type="text" placeholder="Keywords" className={styles.inputField} />
                <Image alt="search" src={IconSearch} width={2} height={2} className={styles.iconSearch} />
            </div>
        </>
    )
}

export default InputSearch