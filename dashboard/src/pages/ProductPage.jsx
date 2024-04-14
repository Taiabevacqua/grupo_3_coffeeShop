import {Container, Col, Row} from 'react-bootstrap'
import { FormProduct } from '../components/Products/FormProduct'
import { useEffect, useState } from 'react'
import { ListProduct } from '../components/Products/ListProduct'
import { getAllProducts } from '../services'

export const ProductPage = () => {

  const [products, setProduts]= useState([])
  
  useEffect(()=> {
    getAllProducts()
   .then((products) =>{
    setProduts(products)
   })
   .catch((error) => console.log(error))
  }, [])
   

  return (
    <Container>
      <Row>
       
        <Col sm={12}>
        <ListProduct products={products}/>
        </Col>
      </Row>
</Container>
)
}
