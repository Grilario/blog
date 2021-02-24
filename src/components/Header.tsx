import Link from 'next/link'
import { BsSearch, BsFilterLeft } from 'react-icons/bs'

import styles from '../styles/components/Header.module.css'

export default function Header(){
  return(
    <header className={styles.headerContainer}>
    <div className="limit-app">
        <img src="Logo.svg" alt="Grilario" title="Grilario" />

        <nav>
            <button type="button">
                <BsFilterLeft />
            </button>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="#"><a>Projetos</a></Link>
                </li>
                <li>
                    <Link href="#"><a>Sobre</a></Link>
                </li>
            </ul>
        </nav>

        <div>
            <button
                type="button"
                className={styles.buttonSearch}
            >
                <BsSearch />
            </button>

            <button
                type="button"
                className={styles.buttonPerfil}
            >
                <img src="https://github.com/Grilario.png" alt=""/>
            </button>
        </div>
    </div>
    </header>
)}