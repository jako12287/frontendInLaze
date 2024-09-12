import { FC } from "react"
import styles from "../../../app/styles/selectFilter.module.css"
import Image from "next/image"
import IconSearch from "../../../assets/icons/icon-arrow-down.png"

const SelectFilter: FC<{ label: string }> = ({ label = "Gender" }) => {
    return (
        <>
            <h3 className={styles.textLabel}>{label}</h3>
            <div className={styles.containerInput}>

                <select  className={styles.inputField} />
            </div>
        </>
    )
}

export default SelectFilter