import Button from "./Button";
import Image from 'next/image'
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import styles from './Card.module.scss';

const Card = ({data}) => {
    const {title, excerpt, slug, featuredImage, restaurantTypes} =data; 

    const restaurantTpyeString = restaurantTypes.edges.map((edge) => {
        return edge.node.name; 
    }); 

    return <div className={styles.card}>
        {featuredImage &&
        <Image 
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            width= {featuredImage.node.mediaDetails.width}
            height={featuredImage.node.mediaDetails.height}
            className={styles.image}
        />  } 

        <div className={styles.card_content}> 
    {restaurantTpyeString && 
        <Heading level='4' marginBottom='1'>
            {restaurantTpyeString}
        </Heading>
    }
    {title && 
      <Heading level='3' marginBottom='1'>
        {title}</Heading> 
    }
    {excerpt &&
        <Paragraph marginBottom='1'>{excerpt}</Paragraph>
    }
    {slug&& 
        <Button 
            label='View Restaurant'
            path={`/restaurants/${slug}`}>
    </Button>} 
    </div>
    </div> 
}
export default Card; 