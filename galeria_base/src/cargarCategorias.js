import dataCategorias from "./data/categorias";

const {categorias} = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');
categorias.forEach(categoria => 
    {
        //const nuevaCategoria = document.createElement('a');
        // const plantilla = `
        //     <img class="categoria__img" src="${categoria.imagenPortada}" alt="${categoria.nombre}" />
        //     <div class="categoria__datos">
        //         <p class="categoria__nombre">${categoria.nombre}</p>
        //         <p class="categoria__numero-fotos">${categoria.numeroFotos}</p>
        //     </div>`;
        //nuevaCategoria.classList.add('categoria');
        //nuevaCategoria.href = '#';
        //nuevaCategoria.dataset.categoria = `${categoria.nombre}`;
        //contenedorCategorias.append(nuevaCategoria);
        contenedorCategorias.innerHTML +=
            `
                <a href="#" class="categoria" data-categoria="${categoria.id}">
                    <img class="categoria__img" src="${categoria.imagenPortada}" alt="${categoria.nombre}" />
                    <div class="categoria__datos">
                        <p class="categoria__nombre">${categoria.nombre}</p>
                        <p class="categoria__numero-fotos">${categoria.numeroFotos}</p>
                    </div>
                </a>
            `
    });