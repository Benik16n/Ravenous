import React from "react";
import styles from './BusinessList.module.css';
import Business from "../Business/Business";

const BusinessList = (businesses) => {

return (
<div className={styles.businessList}>
  <Business />
  <Business />
  <Business />  
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
</div>
)
}
export  default BusinessList