import { Category } from "../components/home/Category"
import { Metrics } from "../components/home/Metrics"
import { Product } from "../components/home/Product"

export const Home = () => {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

 <Metrics/>

    <div className="row">
        <Product/>

        <Category/>
    </div>
</div>  )
}
