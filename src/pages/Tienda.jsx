import { useEffect, useState } from "react";
import Productos from "../components/Productos";

function Tienda() {

  const [listaCategorias, setListaCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
      const rutaServicio = "http://localhost:8080/api_int_2023/categorias/getAll";
      fetch(rutaServicio)
          .then(response => response.json())
          .then(data => {
              //console.log(data);
              setListaCategorias(data);
          })
  }

  const dibujarLista = () => {
    return (
        <ul className="list-group" id="lista-categorias" style={{backgroundColor: '#1870c2'}}>
            {listaCategorias.map( item => 
                <li className="list-group-item" 
                    style={{ marginBottom: '10px' }}    
                    key={item.idcategoria} 
                    title = {item.descripcion} 
                    onClick = {(event) => seleccionarCategoria(event, item)}>
                    {item.nombre}
                </li>
            )}
        </ul>
    )
}

    const seleccionarCategoria = (event, item) => {
      //console.log(item);
      setCategoriaSeleccionada(item)

      let itemsLista = document.querySelectorAll("#lista-categorias li")
      itemsLista.forEach( item =>{
          item.classList.remove("active");
      })

      event.currentTarget.classList.add("active");
      //event.currentTarget hace referencia al objeto que recibió el evento
      //classList.add("active") añade la clase active a la lista de clases
  }

  return (
    <section className="padded">
            <div className="container">
                <h2>Tienda</h2>
                <div className="row">
                    <div className="col-md-2" style={{ backgroundColor: '#1870c2', borderRadius: '10px' }}>
                        <h4 className="p-2" style={{ color: '#333' }}>Categorías</h4>
                        <hr />
                        {dibujarLista()}
                    </div>
                    <div className="col-md-10">
                        <h3>{categoriaSeleccionada.nombre}</h3>
                        <small>{categoriaSeleccionada.descripcion}</small>
                        <Productos categoriaProductos = {categoriaSeleccionada.idCategoria}/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Tienda