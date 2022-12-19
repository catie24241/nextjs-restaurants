import styles from './Header.module.scss'

import Container from './Container.js'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return <header className={styles.header}>
        <Container>
            <Link href='/'>
            <Image 
                src='/images/syracuse-restaurants-logo.svg'
                alt='Syracuse Restaurant Logo'
                width= {537}
                height={86}
                className={styles.logo}
            /> 
            </Link> 
        </Container>
    </header>
}
export default Header 