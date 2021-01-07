import React from 'react';

import image1 from '../images/pc1.jpg';
import image2 from '../images/pc2.jpg';
import image3 from '../images/pc3.jpg';
import image4 from '../images/pc4.jpg';
import image5 from '../images/pc5.jpg';
import image6 from '../images/pc6.jpg';


const MyProducts = () => {

  // Array with content which is mapped out in cards further down //
const products = [
  { key: '1', text: 'Modern Design', image: image1 },
  { key: '2', text: 'Clean and Elegant', image: image2 },
  { key: '3', text: 'Great Support', image: image3 },
  { key: '4', text: 'Easy to customize', image: image4 },
  { key: '5', text: 'Unlimited Features', image: image5 },
  { key: '6', text: 'Advanced Options', image: image6 }
]

  const productmap = products.map(product => {

    return (

      <section key={product.key} className="col-12 col-md-6 col-lg-4 my-1 ml-md-0">

        <div class="card my-3 mx-3">
          <div class="card-body">
            <h4 class="card-title producttitle">{product.text}</h4>
          </div>
          <img class="card-img-top" src={product.image} alt="Product Cover" />

        </div>

      </section>

    )

  })


  return (

    <div className="container">
      <div class="card-deck">
        {productmap}
      </div>
    </div>


  )
}

export default MyProducts
