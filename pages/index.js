import Button from '../components/Button';
import Container from '../components/Container' 
import Grid from '../components/Grid'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import Filters from '../components/Filters'

import { useState } from 'react';
import { getAllRestaurants} from '../lib/api'; 
import Heading from '../components/Heading';
import {getAllRestaurantTypes} from '../lib/api'

export async function getStaticProps() {
  const restaurants = await getAllRestaurants();
  const restaurantTypes = await getAllRestaurantTypes(); 
 
  return {
    props: {
      restaurants, 
      restaurantTypes
    }, // will be passed to the page component as props
  }
}

const HomePage = ({restaurants, restaurantTypes}) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (activeCategory === 'All'){
      return restaurant
    }
    if (restaurant.node.restaurantTypes.edges.length > 0) {
      return restaurant.node.restaurantTypes.edges[0].node.name === activeCategory ? 
      restaurant: false;
    }
  }); 
return <Layout>
  
 
    <Showcase 
      title='A Guide to the Best Eating Spots in Syracuse'  
      description='With hundreds of restaurants located within the 315, there really is a little something for all tastes.'
      backgroundImage='/images/dishes.jpeg'
      cta='View all Restaurants'
    /> 

  <section> 
    
    
    <Container> 
      <Filters 
        activeCategory= {activeCategory}
        setActiveCategory={setActiveCategory}
        categories ={restaurantTypes}
      /> 
        <Grid data={filteredRestaurants}/>
    </Container>
  </section>

  </Layout>
} 
export default HomePage