import {Container, Col, Row, Table} from 'react-bootstrap'
import { ListProduct } from '../components/Products/ListProduct'
import { FormProduct } from '../components/Products/FormProduct'
import { useEffect, useState } from 'react'

export const ProductPage = () => {

  const [products, setProduts]= useState([])
  useEffect(()=>{
    const getAllProducts= async () =>{
      try {
        const response= await fetch('http://localhost:3000/apis/products');
        const result= await response.json();
        if (result.ok) {
          console.log(result);
          setProduts(result.products)
        }

      } catch (error) {
        console.error
      }

      getAllProducts()
    }
  }, [])

  return (
    <Container>
      <Row>
       
        <Col sm={12}>
        <FormProduct/>
        </Col>
        <Col sm={12}>
        <ListProduct products={products}/>
        </Col>
      </Row>
</Container>
)
}
