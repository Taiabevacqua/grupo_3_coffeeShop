import PropTypes from 'prop-types'
import { Modal, Button, Form } from 'react-bootstrap'


export const ModalFormProduct = (show, handleClose) => {
  return (
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
    </Form>
    </Modal.Body>

   )
}

ModalFormProduct.propTypes={
    show: PropTypes.bool,
    handleClose: PropTypes.func,
}
