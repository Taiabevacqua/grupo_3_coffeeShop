console.log("cart connected!!");
if (!sessionStorage.getItem("cart-cafeinotopia")) {
  sessionStorage.setItem("cart-cafeinotopia", JSON.stringify([]));
}

var cart = JSON.parse(sessionStorage.getItem("cart-cafeinotopia"));
const cartTotalItems = document.getElementById("cart-total-items");

window.onload = () => {
  showCartTotalItems(cart.length);
  if (document.getElementById("cart-box")) {
    showProductInCart(cart);
  }
};

const calcCost = (products) => {
  const cartTotal = document.getElementById("cart-total");

 cartTotal.innerHTML = ` $ ${products
 .map((item) => item.quantity * item.price)
 .reduce((a, b) => a + b, 0)}`
   
};

const showProductInCart = (products = []) => {
  const cartBox = document.getElementById("cart-box");
  cartBox.innerHTML = null;

  if (products.length) {
    products.forEach(({ id, name, image, price, quantity }) => {
      cartBox.innerHTML += `
      <tr>
      <td style="vertical-align:middle;" colspan="2">
        <div class="d-flex flex-wrap align-items-center">
          <img style="width: 100px;" src="/img/${image}" alt="">
          <p style="font-weight: normal;">${name}</p>
        </div>
      </th>
      <td style="vertical-align:middle;">
        <div class="border rounded d-flex justify-content-around align-items-center gap-2" style="width: 100px;">
            <h5 onclick="decrementQuantity(${id})" class="pt-2" style="cursor: pointer;">-</h5>
            <h5 class="pt-2" id="contador${id}">${quantity}</h5>
            <h5 onclick="incrementQuantity(${id})" class="pt-2" style="cursor: pointer;">+</h5>
        </div>
      </td>
      <td style="vertical-align:middle;">
        <h5 style=text-align="left">$ ${price.toFixed(2)}</h5>
      </td>
      <td style="vertical-align:middle;">
        <button style="border: none;background: none; font-size: larger; text-align: center;" onclick="removeProduct(${id})">
            X
        </button>
      </td>
    </tr>
            `;
    });
    document.getElementById("form-cart").style.display = "block";

    calcCost(products);
  } else {
    cartBox.innerHTML += `
    <article class="productCart_section_article">
    <div class="">

            <p class="alert alert-warning">No hay productos en el carrito</p>
            </div>
            </article>
        `;
    document.getElementById("form-cart").style.display = "none";
  }
};

const showCartTotalItems = (count) => {
  if (!count) {
    cartTotalItems.style.display = "none";
  } else {
    cartTotalItems.style.display = "block";
    cartTotalItems.innerHTML = count;
  }
};

const addToCart = (id, name, price, image, quantity = 1) => {
  const product = cart.find((item) => item.id == id);

  if (product) {
    const cartUpdated = cart.map((item) => {
      if (item.id == id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    sessionStorage.setItem("cart-cafeinotopia", JSON.stringify(cartUpdated));
  } else {
    const newProduct = {
      id,
      name,
      price : +price,
      image,
      quantity,
    };
    cart.push(newProduct);
    sessionStorage.setItem("cart-cafeinotopia", JSON.stringify(cart));

    showCartTotalItems(
      JSON.parse(sessionStorage.getItem("cart-cafeinotopia")).length
    );
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Producto agregado"
  });
};

const removeProduct = (id) => {
  const cart = JSON.parse(sessionStorage.getItem("cart-cafeinotopia"));
  const cartUpdated = cart.filter((item) => item.id != id);
  sessionStorage.setItem("cart-cafeinotopia", JSON.stringify(cartUpdated));

  showCartTotalItems(
    JSON.parse(sessionStorage.getItem("cart-cafeinotopia")).length
  );
  showProductInCart(cartUpdated);
};

const incrementQuantity = (id) => {
  const counter = document.getElementById("contador" + id);
  let currentValue = parseInt(counter.textContent);
  counter.textContent = currentValue + 1;
  modifyQuantity(id, currentValue + 1);
};

const decrementQuantity = (id) => {
  const counter = document.getElementById("contador" + id);
  let currentValue = parseInt(counter.textContent);
  if (currentValue > 1) {
    counter.textContent = currentValue - 1;
    modifyQuantity(id, currentValue - 1);
  }
};

const modifyQuantity = (id, quantity) => {
  const cart = JSON.parse(sessionStorage.getItem("cart-cafeinotopia"));
  const cartUpdated = cart.map((item) => {
    if (item.id == id) {
      item.quantity = quantity;
    }
    return item;
  });
  sessionStorage.setItem("cart-cafeinotopia", JSON.stringify(cartUpdated));
  calcCost(cartUpdated);
};

const sendCart = () => {
  sessionStorage.setItem("cart-cafeinotopia", JSON.stringify([]));

  Swal.fire({
    title: "Gracias por tu compra",
    text: "En breve recibirás la información de tu pedido",
    icon: "info",
    confirmButtonAriaLabel: "Volver al Home",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      location.href = "/";
    }
  });
};
