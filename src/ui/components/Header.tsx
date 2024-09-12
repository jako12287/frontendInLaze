import styles from "../../app/styles/header.module.css"
import Image from "next/image"
import Logo from "../../assets/logo/Logo.png"
import IconUser from "../../assets/icons/icon-no-user.png"
import Link from "next/link"

const Header = () => {
    return (
        <nav className={styles.headerContainer}>
            <Link href={"/"} className={styles.containerLogo}>
                <Image alt="logo" src={Logo} height={50} width={100} className={styles.imageLogo} />
            </Link>
            <div>

                <ul className={styles.containerList}>
                    <li><Link href="/">Popular</Link></li>
                    <li><Link href="/favorites">Favorites</Link></li>

                </ul>
            </div>
            <Link href={"/"} className={styles.containerIcon}>
                <Image alt="Icon user" src={IconUser} className={styles.imageLogo} />
            </Link>

        </nav>
    )
}

export default Header