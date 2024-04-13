
sessionStorage.removeItem('coffee-box')
const addCapsule = (id, image) => {
  !sessionStorage.getItem('coffee-box') && sessionStorage.setItem('coffee-box',JSON.stringify([]))
  const coffeBox = JSON.parse(sessionStorage.getItem('coffee-box'))
  if(coffeBox.map(capsule => +capsule.quantity).reduce((a,b) => a +b, 0) == 12) return

  const capsule = coffeBox.find(coffee => coffee.id == id);

  document.getElementById('btn-empty').style.display = "block"


  if(capsule){
    const coffeBoxUpdated = coffeBox.map(capsule => {
      if(capsule.id == id){
        capsule.quantity++
      }
      return capsule
    })
    sessionStorage.setItem('coffee-box',JSON.stringify(coffeBoxUpdated))
    const quantity = document.getElementById('capsule' +id)
    quantity.textContent = 'x' + capsule.quantity

  }else{
    coffeBox.push({
      id,
      quantity : 1
    })
    sessionStorage.setItem('coffee-box',JSON.stringify(coffeBox))

    const img = document.createElement('img');
    img.src = '/img/' + image;
    img.classList.add('img-fluid');
    const quantity = document.createElement('h3')
    quantity.textContent = 'x1'
    quantity.id = 'capsule' + id
    const div = document.createElement('div')
    div.style.width = "120px";
    div.classList.add('d-flex','align-items-center')
    document.getElementById('box-capsule').appendChild(div)
    div.appendChild(img)
    div.appendChild(quantity)
  }
  if(coffeBox.map(capsule => +capsule.quantity).reduce((a,b) => a +b, 0) == 6){
    document.getElementById('btn-cart').style.display = "block"
  }
  if(coffeBox.map(capsule => +capsule.quantity).reduce((a,b) => a +b, 0) > 6){
    document.getElementById('x12').setAttribute('checked', true)
    document.getElementById('btn-cart').classList.add('disabled')
  }
  if(coffeBox.map(capsule => +capsule.quantity).reduce((a,b) => a +b, 0) == 12){
    document.getElementById('btn-cart').classList.remove('disabled')
  }

}

const emptyBox = () => {
  document.getElementById('box-capsule').innerHTML = null;
  sessionStorage.removeItem('coffee-box')
  document.getElementById('btn-cart').style.display = "none"
  document.getElementById('btn-empty').style.display = "none"

}

const addBoxToCart = () => {
    const coffeBox = JSON.parse(sessionStorage.getItem('coffee-box'))

    if(coffeBox.map(capsule => +capsule.quantity).reduce((a,b) => a +b, 0) == 6) {
        addToCart(3, "Cápsulas Variadas x6",4200, "caja-seleccion-cafeinatopia.png")
    }else {
        addToCart(10, "Cápsulas Variadas x12",8200, "caja-seleccion-cafeinatopia.png")
    }

    emptyBox()
}
