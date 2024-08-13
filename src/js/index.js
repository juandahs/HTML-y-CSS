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
    //Si no esta el required se debe  validar el html
    let usuario = htmlForm.usuario;
    alert(usuario);
    console.log(usuario);


}