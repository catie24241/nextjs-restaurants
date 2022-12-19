// the waterfall 
import Button from '../../components/Button';
import Col from '../../components/Col';
import Link from 'next/link';
import Layout from '../../components/Layout';
import MenuItem from '../../components/MenuItem';
import Heading from '../../components/Heading';
import Showcase from '../../components/Showcase';
import Row from '../../components/Row';
import { getAllRestaurantSlugs, getSingleRestaurantBySlug } from "../../lib/api"
import Paragraph from '../../components/Paragraph';
import { Fragment } from 'react';

// the waterfall 

// 1. getStaticPaths 
export async function getStaticPaths() {
    const restaurantSlugs = await getAllRestaurantSlugs();
    const paths = restaurantSlugs.map((restaurant) => {
        return {
            params: {
                id: restaurant.node.slug
            }
        }
    });
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}
// 2. getStaticProps 
export async function getStaticProps({params}) {
    const { id } = params;
    const restaurantData = await getSingleRestaurantBySlug(id);
    return {
        props: {
            restaurantData
        }, // will be passed to the page component as props
    }
}
// 3. Render the page component 
const RestaurantPage = ({restaurantData}) => {
    const { title, excerpt, featuredImage, restaurantInformation} = restaurantData;
    const {location, contact, hours, menu } = restaurantInformation; 
    const {streetAddress, city, state, zipCode} = location; 
    const {phoneNumber, email} = contact; 
    const {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = hours; 

    return <Layout>
        <Showcase
            backgroundImage={featuredImage ? featuredImage.node.sourceUrl : null}
 
        />
        <Row> 
        <Col width='9'>
            <Heading level='1' marginBottom='1'>{title}</Heading>
            <Paragraph marginBottom='1'>{excerpt}</Paragraph>
            {menu.menuItems &&
                <Fragment> 
                    <Heading level='2' marginBottom='1' marginTop='1'>Menu</Heading>
                        {menu.menuItems.map((menuItemObj) => {
                            const {menuItem} = menuItemObj; 
                            return <MenuItem data={menuItem}/> 
                        })}
                </Fragment>
            }
            

        </Col>
        <Col width='3'> 
            <Button label='Order Takeout'></Button> 
            <Button label='Make a Reservation'></Button>
            
            
                {streetAddress && city && state && zipCode &&
                <Fragment>
                <Heading level='2' marginBottom='1'>Location</Heading>
                <Paragraph marginBottom='2'>
                {streetAddress}<br/> 
                {city}, {state} {zipCode}
                </Paragraph>
                </Fragment>}
            
                { email || phoneNumber ? 
                <Fragment> 
                    <Heading level='2' marginBottom='1'>Contact</Heading>
                    {phoneNumber &&
                        <Fragment>
                            <Paragraph marginBottom='2'>
                            {phoneNumber}<br/> 
                            </Paragraph>
                        </Fragment>}
                        <Paragraph marginBottom='2'>
                        {email && 
                            <a href={`mailto:${email}`}>{email}
                            </a>} <br/>
                            </Paragraph> 
                </Fragment> 
                : ''}


            <Heading level='2' marginBottom='1'>Hours</Heading>
            <Paragraph marginBottom='2'>
                {monday.openTime ? 
                <Fragment>
                    Monday: {monday.openTime} - {monday.closeTime} <br/> 
                </Fragment>
                : 'Monday: Closed'}
                {tuesday.openTime ? 
                <Fragment>
                    Tuesday: {tuesday.openTime} - {tuesday.closeTime} <br/> 
                </Fragment>
                : 'Tuesday: Closed'}
                {wednesday.openTime ? 
                <Fragment>
                    Wednesday: {wednesday.openTime} - {wednesday.closeTime} <br/> 
                </Fragment>
                : 'Wednesday: Closed'}
                {thursday.openTime ? 
                <Fragment>                    
                    Thursday: {thursday.openTime} - {thursday.closeTime} <br/>
                </Fragment>
                : 'Thursday: Closed'}
                {friday.openTime ? 
                <Fragment>
                    Friday: {friday.openTime} - {friday.closeTime} <br/> 
                </Fragment>
                : 'Friday: Closed'}
                {saturday.openTime ? 
                <Fragment>     
                    Saturday: {saturday.openTime} - {saturday.closeTime} <br/> 
                </Fragment>
                : 'Saturday: Closed'}
                {sunday.openTime ? 
                <Fragment>
                    Sunday: {sunday.openTime} - {sunday.closeTime} <br/> 
                </Fragment>
                : 'Sunday: Closed'}
                </Paragraph>
  
        </Col>
        </Row>
        </Layout>
}
export default RestaurantPage