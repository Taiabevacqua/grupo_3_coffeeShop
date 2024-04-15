import PropTypes from 'prop-types'
import { Modal, Button, Form } from 'react-bootstrap'


export const ModalFormProduct = ({show, handleClose, prod}) => {
  return (
<Modal show={show} onHide={handleClose} size='lg' centered>

<Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre del producto" value={prod.name}/>
       
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" placeholder="precio del producto" value={prod.price}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="discount">
        <Form.Label>Descuento</Form.Label>
        <Form.Control type="text" placeholder="Descuento del producto" value={prod.discount}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Descripcion del producto" value={prod.description}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" placeholder="Categoria del producto" value={prod.category}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="origin">
        <Form.Label>Origen</Form.Label>
        <Form.Control type="text" placeholder="origen del producto" value={prod.origin?.country}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="flavor">
        <Form.Label>sabor</Form.Label>
        <Form.Control type="text" placeholder="Sabor del producto" value={prod.flavor?.name}/>
       
      </Form.Group>


    </Form>
    </Modal.Body>

    <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>Close</Button>
    </Modal.Footer>

</Modal>

   

   )
}

ModalFormProduct.propTypes={
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  prod: PropTypes.object

}

