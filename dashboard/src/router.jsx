import {createBrowserRouter} from 'react-router-dom';
import { App } from './layouts/app'; 
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';

export const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[{
                index:true,
                element:<Home/>

                 },
                 {
                    path:'/product',
                    element:<ProductPage/>
                 }
        ]
    }
])