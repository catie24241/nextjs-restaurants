import Image from 'next/image'
import Paragraph from './Paragraph';
import Heading from './Heading'
import styles from './MenuItem.module.scss'

const MenuItem = ({data}) => {
    const {image, title, price, description} = data; 
    return <article className={styles.menuItem}>
        <Image 
            src= {image.sourceUrl}
            alt= {image.altText}
            width={image.mediaDetails.width}
            height={image.mediaDetails.height}
            className={styles.image}
        />
        <div className={styles.content}>
        <Heading level='3' marginBottom='1'>{title}</Heading>
        <Heading level='4' marginBottom='1'>${price}</Heading>
        <Paragraph>{description}</Paragraph>
        </div> 
        </article>
        

}
export default MenuItem