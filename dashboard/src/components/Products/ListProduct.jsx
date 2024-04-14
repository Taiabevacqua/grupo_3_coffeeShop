import PropTypes from 'prop-types'
import { useState } from 'react';
import { Button, Modal, Table } from "react-bootstrap"
import { ModalProduct } from './ModalProduct';
import { getProduct } from '../../services';
import { ModalFormProduct } from './ModalFormProduct';

export const ListProduct = ({ products}) => {

  const [show, setShow] = useState(false);
  const [productDetail, setProdDetail]= useState({});

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    
    const product = await getProduct(id);
    setProdDetail(product)
    setShow(true)
  }
  
  const [showForm, setShowForm] = useState(false);
  
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = async (id) => {

   if (id) {
  setShowForm(true)

   }
  }

  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Producto</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Acciones</th>

      </tr>
    </thead>
    <tbody>
        {products.map((prod) => {
                return( 
                <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.description}</td>
                    <td>{prod.price}</td>
                    <td>
                      <div className='d-flex'>
                      <Button  className='btn-sm'  onClick={ () => handleShow(prod.id)}>
                        <i className="fa-solid fa-eye"></i>
                        </Button>

                      <Button variant='success'  className='btn-sm'  onClick={ () => handleShowForm(prod.id)}>
                      <i className="fa-solid fa-pencil"></i> 
                       </Button>
                    </div>
                    </td>
                  </tr>)
            })}
     
    </tbody>
  </Table> 
  
  <ModalProduct show={show} handleClose={handleClose} prod={productDetail}/>
  <ModalFormProduct show={showForm} handleClose={handleCloseForm} prod={productDetail}/>

  </>
)

};
  ListProduct.propTypes = {
    products: PropTypes.array
  }
