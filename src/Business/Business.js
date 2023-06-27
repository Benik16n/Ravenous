import React from "react";
import styles from './Business.module.css';

const business = { 
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  Name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const Business = () => {
    

  return (
<div className={styles.business}>
  <div className={styles.imgandname}>
     <img src={business.imageSrc} />
     <h2>{business.Name}</h2>
  </div>
  <div className={styles.location}>
     <p>{business.address}</p>
     <p>{business.city}</p>
     <p>{business.state} {business.zipCode}</p>
  </div>
  <div className={styles.feedback}>
    <h2>{business.category}</h2>
    <h4>{business.rating}</h4>
    <p>{business.reviewCount}</p>
  </div>
</div>

  )
}
export default Business