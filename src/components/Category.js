import React from 'react'
import { Button, Card, Container, Row, Dropdown } from 'react-bootstrap';
import drink from '../images/drink.jpg'
import burger from '../images/burger.jpg'
import pizza from '../images/pizza.jpg'
import dessert from '../images/dessert.jpg'
import fruit_juices from '../images/fruit_juices.jpg'
import sandwich from '../images/sandwich.jpeg'

const Category = (props) => {

  const imageMapping = {
    dessert: dessert,
    drink: drink,
    burger: burger,
    pizza: pizza,
    fruit_juices: fruit_juices,
    sandwich: sandwich
  };

  const imageUrl = imageMapping[props.title];
  return (
    <div style={{ position: 'relative', width: '16rem', marginBottom: '2rem' }}>
      <img src={imageUrl} class="card-img-top" alt="..." />
      <div style={{ position: 'absolute', bottom: '0', left: '12px', padding: '10px', background: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
        {props.title}
      </div>
    </div>

  )
}

export default Category