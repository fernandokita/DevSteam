import Image from "next/image"
import style from './logo.module.css'

export default function Logo(){
    return(
        <nav className={style.logo}>
            <Image src='/logo.svg' height={60} width={60}/>
            <h1>DevSteam</h1>
        </nav>
    )
}