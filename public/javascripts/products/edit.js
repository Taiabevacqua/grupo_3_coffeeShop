

window.onload = function() {
    var nombre = document.querySelector('#form-edit');
    nombre.focus();
    
  
    var selects = ['#flavor', '#category','#name','#discount', '#price', '#description'];
  
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
  o
      event.preventDefault();
  
      var name = document.querySelector('#name');
      var precio = document.querySelector('#precio');
      var category = document.querySelector('#category');
      var flavor = document.querySelector('#flavor');
      var discount = document.querySelector('#discount');
      var description = document.querySelector('#description');
     
      function validarCampo(campo, validacion, mensajeError) {
        var errorSpan = document.querySelector('#error-' + campo.id);
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
      validarCampo(discount, descuento.value <= 100, 'El descuento debe ser menor a 99.');
      validarCampo(description, descripcion.value.length >= 30, 'La descripción debe tener al menos 30 caracteres.');
    
      
      if (!event.defaultPrevented) {
        document.querySelector('form').submit();
      }
    });
    
    var campos = ['name', 'price', 'category', 'flavor', 'description', 'image'];
    campos.forEach(function(campo) {
      var input = document.querySelector('#' + campo);
      input.addEventListener('input', function() {
        var errorSpan = document.querySelector('#error-' + campo);
        var invalidFeedback = document.querySelector('#' + campo + ' ~ .invalid-feedback');
        if ((campo === 'name' && this.value.length >= 4) || (campo === 'description' && this.value.length >= 30)) {
          this.style.borderColor = 'green';
          this.classList.remove('is-invalid');
          errorSpan.style.display = 'none';  
          if (invalidFeedback) invalidFeedback.style.display = 'none';
        } else if ((campo === 'price' || campo === 'value') && this.value > 0 ) {
          this.style.borderColor = 'green';
          this.classList.remove('is-invalid');
          errorSpan.style.display = 'none';
          if (invalidFeedback) invalidFeedback.style.display = 'none';
       
        } else if (campo === 'image') {
          var file = this.files[0];
          if (file && file.type.startsWith('image/')) {
            this.style.borderColor = 'green';
            this.classList.remove('is-invalid');
            errorSpan.style.display = 'none';
            if (invalidFeedback) invalidFeedback.style.display = 'none';
          } else {
            this.style.borderColor = 'red';
            errorSpan.textContent = 'El archivo debe ser una imagen.';
            errorSpan.style.display = 'block';
            errorSpan.style.color = 'red';
            if (invalidFeedback) invalidFeedback.style.display = 'block';
          }
        } 
      });
        
      });
    
    function getErrorMessage(campo) {
      switch (campo) {
        case 'name':
          return 'El nombre debe tener al menos 4 caracteres.';
        case 'precio':
          return 'Por favor, introduce un precio válido mayor a 0.';
        case 'category':
          return 'Por favor, selecciona una categoría.';
        case 'flavors':
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