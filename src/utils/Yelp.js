const apiKey = 'uSMJP1MPgEXxaIngGt2knk469V32cFMKEdExozcGaoKMtK_-3-CqZA9hLWU1aVP-fb6uZl7zoMQCGrfUV3mLLN8i41bJGzn1l3qsyXc_g-4s3OhXBIJW_6UlxD6dZHYx'
const Yelp = {
 search: async (term,location,sortBy) => {
try {
const yelpEndpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
const response = await fetch(yelpEndpoint,  {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
if (response.ok) {
const retrievedBusinessObject = await response.json();
if (retrievedBusinessObject.businesses) {
return retrievedBusinessObject.businesses.map((business) => ({
 id: business.id,
 imageSrc: business.image_url,
 name: business.name,
 address: business.location.address1,
 city: business.location.city,
 state: business.location.state,
 zipCode: business.location.zip_code,
 category: business.categories[0].title,
 rating: business.rating,
 reviewCount: business.review_count,
})
)
} else {
return []
}
} else {
  return []
}
} catch (error) {
console.log(error);  
}
}
}
export default Yelp;

