import React from "react";
import styles from './Business.module.css';



const Business = ({business}) => {
     

  return (
<div className={styles.business}>
  <div className={styles.imgandname}>
     <img src={business.imageSrc} />
     <h2>{business.name}</h2>
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