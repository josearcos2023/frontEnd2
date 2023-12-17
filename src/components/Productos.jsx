import { useEffect, useState } from "react";
import './Productos.css';
import img10 from '../assets/images/products/elocaso.jpg';
import img2 from '../assets/images/products/huaweicell.jpg';
import img3 from '../assets/images/products/laciudadylosperros.jpg';
import img9 from '../assets/images/products/laptopacer.jpg';
import img12 from '../assets/images/products/mouselogitech.jpg';
import taza from '../assets/images/products/taza.jpg';
import img1 from '../assets/images/products/zapatillasadidas.jpg';

const imagenes = [img1,img2,img3,img9,img10,taza,img12]

function Productos(props) {
    const [listaProductos, setListaProductos] = useState([]);
    const [itemProducto, setItemProducto] = useState([]);
    useEffect(() => {
        //console.log(props.categoriaProductos);

        // eslint-disable-next-line react/prop-types
        leerServicio(props.categoriaProductos);

        // eslint-disable-next-line react/prop-types
    }, [props.categoriaProductos])


    const leerServicio = (idcategoria) => {
        if(idcategoria === undefined || idcategoria === null){
            idcategoria = 1;
        }
        const rutaServicio = "http://localhost:8080/api_int_2023/productos/getByIdCategoria/" + idcategoria;
        console.log(rutaServicio);
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListaProductos(data);
            })
    }

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-4">
                {listaProductos.map(item =>
                    <div className="col" key={item.idProducto}>
                        <div className="card h-100">
                            <figure className="image-content">
                                    <img src={imagenes[item.idProducto-1]}
                                        className="card-img-top" alt="..." />
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">S/ {parseFloat(item.precio).toFixed(2)}
                                    <i className="bi bi-basket-fill btnCarrito" title="Añadir al carrito"
                                        onClick={() => agregarCarrito(item)}></i>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    const agregarCarrito = (item) => {
        item.cantidad = 1;
        console.log(item);
        let carrito = [];
        if (sessionStorage.getItem("carritocompras")) {
            carrito = JSON.parse(sessionStorage.getItem("carritocompras"));
            let index = -1;
            for (let i = 0; i < carrito.length; i++) {
                if (item.idProducto === carrito[i].idProducto) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                carrito.push(item);
                sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
            }
            else {
                carrito[index].cantidad++
                sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
            }
        }
        else {
            carrito.push(item);
            sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
        }
    }

    return (
        <>
            {dibujarCuadricula()}
        </>
    )
}

export default Productos