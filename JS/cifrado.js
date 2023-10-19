var numFilas = 0
      var numColumnas = 0

      
      function generarTabla() {
          numFilas = parseInt($('#filas').val());
          numColumnas = parseInt($('#columnas').val());
          
          var tabla = $('#tablaDinamica');
          var input = $('#input');
  
          tabla.empty().addClass('table table-bordered table-custom');
  
          for (var i = 0; i < numFilas; i++) {
              var fila = $('<tr>');
              for (var j = 0; j < numColumnas; j++) {
                  fila.append($('<td>').css('width', '30px').css('height', '30px').text(''));
              }
              tabla.append(fila);
          }
  
          // Limitar la cantidad de caracteres en el input a filas * columnas
          var maxLength = numFilas * numColumnas;
          input.attr('maxlength', maxLength);
          input.attr('placeholder', 'Máximo ' + maxLength + ' caracteres');
      }

      function cifrarTexto() {
        numFilas = parseInt($('#filas').val());
        numColumnas = parseInt($('#columnas').val());
        var input = $('#input').val();
        var output = '';

        // Verificar si el texto cabe en la tabla
        if (input.length > numFilas * numColumnas) {
            alert('El texto es demasiado largo para la tabla proporcionada.');
            return;
        }

        // Llenar la tabla y el campo de salida
        for (var i = 0; i < numColumnas; i++) {
            for (var j = 0; j < numFilas; j++) {
                var index = j * numColumnas + i;
                if (index < input.length) {
                    $('#tablaDinamica tr:eq(' + j + ') td:eq(' + i + ')').text(input[index]);
                    output += input[index];
                }
            }
        }

        $('#output').val(output);
    }

    $('#filas, #columnas').on('input', generarTabla);

    function descifrarTexto() {
        var numFilas = parseInt($('#filas').val());
        var numColumnas = parseInt($('#columnas').val());
        var input = $('#input').val();
        var output = '';

        if (input.length !== numFilas * numColumnas) {
            alert('La longitud del texto cifrado no coincide con el tamaño de la tabla.');
            return;
        }

        // Leer la tabla y decifrar el texto
        for (var i = 0; i < numFilas; i++) {
            for (var j = 0; j < numColumnas; j++) {
                var index = j * numFilas + i;
                output += $('#tablaDinamica tr:eq(' + i + ') td:eq(' + j + ')').text();
            }
        }

        $('#output').val(output);
    }

    $('#filas, #columnas').on('input', generarTabla);