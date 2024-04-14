const getAllProducts= async () =>{
    try {
      const response= await fetch('http://localhost:3000/apis/products');
      const result= await response.json();
      
      if (result.ok) {
        return result.products
      }

    } catch (error) {
      console.error
    }

  }

  const getProduct= async (id) => {

    try {
      const response= await fetch(`http://localhost:3000/apis/products/${id}`);
      const result= await response.json();
      
      if (result.ok) {
        return result.product
      }

    } catch (error) {
      console.error
    }

  } 

export {getAllProducts,
getProduct}