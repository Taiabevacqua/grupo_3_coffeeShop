import PropTypes from 'prop-types'
import { useState } from 'react';
import { Button, Table } from "react-bootstrap"
import { ModalProduct } from './ModalProduct';
import { getProduct } from '../../services';
import { ModalFormProduct } from './ModalFormProduct';

export const ListProduct = ({ products}) => {

  const [show, setShow] = useState(false);
  const [productDetail, setProdDetail]= useState({});

  const [showForm, setShowForm] = useState(false);

  const [formValue, setFormValues]= useState({});


  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    
    const product = await getProduct(id);
    setProdDetail(product)
    setShow(true)
  }
  
  
  
 const handleCloseForm= () => setShowForm(false);
  const handleShowForm = async (id) =>{
     
    if (id) {
      const product = await getProduct(id);

      setFormValues(product)

      setShowForm(true)
    }else{
      setShowForm(true)
    }
    }
 
  return (
    <>
    <div className="d-flex justify-content-end my-3 ">
    <Button variant='dark' className='btn- d-flex'  onClick={handleShowForm}>
    <i className="fa-solid fa-plus"></i> 
    
     </Button>
     </div>
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
                      <Button variant='primary' className='btn-sm'  onClick={ () => handleShow(prod.id)}>
                        <i className="fa-solid fa-eye"></i>
                        </Button>
                        <ModalProduct show={show} handleClose={handleClose} prod={productDetail}/>

                      <Button variant='success' className='btn-sm d-flex'  onClick={ () => handleShowForm(prod.id)}>
                      <i className="fa-solid fa-pencil"></i> 
                       </Button>
                       <ModalFormProduct show={showForm} handleClose={handleCloseForm} prod={formValue}/>

                    </div>
                    </td>
                  </tr>)
            })}
     
    </tbody>
  </Table> 
  
  </>
  
)

};
  ListProduct.propTypes = {
    products: PropTypes.array
  }
