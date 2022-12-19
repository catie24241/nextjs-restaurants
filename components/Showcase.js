import styles from './Showcase.module.scss'
import Button from './Button' 
import Container from './Container';
import Heading from './Heading'; 
import Paragraph from './Paragraph'; 
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Showcase = ({
    backgroundImage='/images/dishes.jpeg',
    cta,
    description,
    halfHeight,
    title
    }) => {
    let showcaseClasses = cx({
        showcase: true, 
        'half-height': halfHeight
    });
    return <section className={showcaseClasses}
    style={{backgroundImage:`url(${backgroundImage})`}}>
        <Container> 
            {title && 
                <Heading level='2' marginBottom='1'>
                    {title}
                </Heading>
            }
            {description &&
                <Paragraph marginBottom='1'> 
                    {description}
                </Paragraph>
            }
            {cta &&
                <Button label='View Restaurant'/> 
            }
            
       </Container> 
    </section>
}
export default Showcase 