import PropTypes from 'prop-types'
import { Product } from '../home/Product'
import { Modal, Button, Row, Col } from 'react-bootstrap'


export const ModalProduct = ({show, handleClose,prod, product}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>

<Modal.Body>
    <h2>{prod.name}</h2>
    <hr />
    <Row>
        <Col sm={12} lg={4}>
            <img src={prod.image} alt={prod.name} className='img-fluid' />
        </Col>
        <Col sm={12} lg={8}>
        <p>
        <p>Precio: ${prod.price}</p>
        <p>Categoria: {prod.category}</p>
        <p>Descripcion: {prod.description}</p>

        </p>
        </Col>
    </Row>

</Modal.Body>

   <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>Close</Button>
    </Modal.Footer>

</Modal> )
}

ModalProduct.propTypes={
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    prod: PropTypes.object
}
