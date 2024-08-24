//Para que funcione este se debe colocar en la parte inferior después que el DOM haya cargado
// document.getElementById('formulario')
//         .addEventListener('submit', event => 
//         {event.preventDefault();})

//Espera que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formulario"); 
    form.addEventListener('submit', event => {
      event.preventDefault();
      
    })
  })

function validarFormulario(htmlForm)
{
    //obtiene toda la etiqueta (trabaja como variable)
    let usuario = htmlForm.usuario;    
    if(usuario.value == '' || usuario.value != 'admin')
    {
        alert('El nombre es usuario no es valido');
        usuario.focus();
        usuario.select();
        return false;
    }
    
    let password = htmlForm.password;
    if(password.value == '' || password.value != 'Admin123')
    {
        alert('contraseña no valida');
        password.focus();
        password.select();
        return false;
    }

    let setTecnologias = htmlForm.tecnologia;
    //console.log(setTecnologias);
    if(!isAnyChecked(setTecnologias))
    {
        alert('No se selecciono ninguna tecnología.')
        return false;
    }

    let setGenero = htmlForm.genero;
    //console.log(setGenero);
    if(!isAnyChecked(setGenero))
    {
        alert('No se selecciono ningún genero.');
        return false;
    }

    let ocupacion =  htmlForm.ocupacion;
    if(ocupacion.value === "")
    {
        alert("No se selecciono ninguna ocupación.")
        ocupacion.focus();
    }
    //console.log(ocupacion.value);
    let comentarios = htmlForm.comentarios;
    console.log(comentarios);


    //const checkboxes = document.querySelectorAll('input[name="tecnologia"]:checked');    
    // Obtener los valores seleccionados
    // const selectedValues = [];
    // checkboxes.forEach((checkbox) => {
    //   selectedValues.push(checkbox.value);
    // });
    
    
    
}

function isAnyChecked (array) 
{
    let isValid = false;
    for(let i = 0; i< array.length; i++)
    {
        if(array[i].checked)
        {
            isValid = true;
        }
    }

    return isValid;

}