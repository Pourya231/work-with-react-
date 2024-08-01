import React from 'react'
import Button from '../Button/Button'
import Image from '../Image/Image'
const ProductItem = ({data}) => (
    <li> 
    <h3>{data.name}</h3>
    <Image imgsrc={data.image} />
    <span>Price: {data.price}</span>
    <Button  text="Buy Now"/> 
    
</li>
);

export default ProductItem;