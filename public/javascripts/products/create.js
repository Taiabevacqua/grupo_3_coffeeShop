
window.onload = function() {
    var nombre = document.querySelector('#form-create');
    nombre.focus();
  
    var selects = ['#falvor', '#category','#name','#discount', '#price', '#description'];
  
    selects.forEach(function(selectId) {
        var select = document.querySelector(selectId);
        var options = Array.from(select.options);
        
        options.sort(function(a, b) {
          if (a.text > b.text) return 1;
          if (a.text < b.text) return -1;
          return 0;
        });
        
        options.forEach(function(option) {
          select.add(option);
        });
    });
  };
  
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.querySelector('#name');
    var price = document.querySelector('#price');
    var category = document.querySelector('#category')
    var flavor = document.querySelector('#flavor');
    var description = document.querySelector('#description');
     
    function validarCampo(campo, validacion, mensajeError) {
        var errorSpan = document.querySelector('#error-' + campo);
        if (validacion) {
          campo.style.borderColor = 'green';
          errorSpan.style.display = 'none';
        } else {
          campo.style.borderColor = 'red';
          errorSpan.textContent = mensajeError;
          errorSpan.style.display = 'block';
          event.preventDefault();
        }
    }
    
    validarCampo(name, nombre.value.length >= 4, 'El nombre debe tener al menos 4 caracteres.');
    validarCampo(price, precio.value > 0, 'Por favor, introduce un precio válido mayor a 0.');
    validarCampo(category, categoria.value, 'Por favor, selecciona una categoría.');
    validarCampo(flavor, sabores.value, 'Por favor, selecciona un sabor.');
    validarCampo(description, descripcion.value.length >= 30, 'La descripción debe tener al menos 30 caracteres.');
    
    if (!event.defaultPrevented) {
        document.querySelector('form').submit();
    }
});

var campos = ['name', 'price', 'category', 'flavor', 'description', 'image', 'discount'];
campos.forEach(function(campo) {
    var input = document.querySelector('#' + campo);
    input.addEventListener('blur', function() {
        var errorSpan = document.querySelector('#error-' + campo);
        if (!this.value || (campo === 'name' && this.value.length < 4) || (campo === 'description' && this.value.length < 30) || ((campo === 'price' || campo === 'discount') && (this.value <= 0 ))) {
            this.style.borderColor = 'red';
            errorSpan.textContent = getErrorMessage(campo);
            errorSpan.style.display = 'block';
            errorSpan.style.color = 'red';
        } else {
            this.style.borderColor = 'green';
            errorSpan.style.display = 'none';
        }
    });
});

function getErrorMessage(campo) {
    switch (campo) {
        case 'name':
            return 'El nombre debe tener al menos 4 caracteres.';
        case 'price':
            return 'Por favor, introduce un precio válido mayor a 0.';
        case 'category':
            return 'Por favor, selecciona una categoría.';
        case 'flavor':
            return 'Por favor, selecciona un sabor.';
        case 'discount':
            return 'El descuento debe ser un número menor o igual a 99.';
        case 'description':
            return 'La descripción debe tener al menos 30 caracteres.';
        case 'image':
            return 'El archivo debe tener formato imagen.';
        default:
            return 'Por favor, completa este campo correctamente.';
    }
}
