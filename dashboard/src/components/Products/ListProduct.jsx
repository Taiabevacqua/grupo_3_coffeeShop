import PropTypes from 'prop-types'
import { Table } from "react-bootstrap"

export const ListProduct = ({ products}) => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Producto</th>
        <th>Descripcion</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
        {products.map((prod) => {
                return( 
                <tr key={prod.id}>
                    <td>112a12</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                  </tr>)
            })}
      <tr>
        <td>1</td>
        <td>a</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>  )

};
  ListProduct.propTypes = {
    products: PropTypes.array.isRequired
  }
