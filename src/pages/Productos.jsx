import { useEffect, useState } from "react";


function Productos() {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [ascendente, setAscendente] = useState(1);
    const [columnaAnterior, setColumnaAnterior] = useState('nombre');
    const [textoBuscar, setTextoBuscar] = useState('');
    const [pagina, setPagina] = useState(0);
    const [filasPagina] = useState(20);
    const [numPaginas, setNumPaginas] = useState(0);

    useEffect(() => {
        leerProductos();
    }, []);

    const leerProductos = async () => {
        // Cambia la URL de la API según tu configuración
        const res = await fetch('/api/productos');
        const data = await res.json();
        setProductos(data);
        setProductosFiltrados(data);
        setCargando(false);
        setNumPaginas(Math.ceil(data.length / filasPagina));
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th columna="nombre" onClick={(event) => seleccionarColumna(event)}>
                        Nombre
                    </th>
                    <th columna="precio" onClick={(event) => seleccionarColumna(event)}>
                        Precio
                    </th>
                    {/* Agrega más encabezados según las propiedades proporcionadas */}
                    <th columna="imagen" onClick={(event) => seleccionarColumna(event)}>
                        Imagen
                    </th>
                    <th columna="descripcionBreve" onClick={(event) => seleccionarColumna(event)}>
                        Descripción Breve
                    </th>
                    <th columna="nuevoOUsado" onClick={(event) => seleccionarColumna(event)}>
                        Nuevo o Usado
                    </th>
                    <th columna="categorias" onClick={(event) => seleccionarColumna(event)}>
                        Categorías
                    </th>
                </tr>
                </thead>
                <tbody>
                {productosFiltrados
                    .slice(pagina * filasPagina, (pagina + 1) * filasPagina)
                    .map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            {/* Agrega más celdas según las propiedades proporcionadas */}
                            <td>{producto.imagen}</td>
                            <td>{producto.descripcionBreve}</td>
                            <td>{producto.nuevoOUsado}</td>
                            <td>{producto.categorias.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const seleccionarColumna = (event) => {
        const columnaSeleccionada = event.target.getAttribute('columna');
        let ascendentex = ascendente;
        if (columnaAnterior === columnaSeleccionada) {
            ascendentex = -ascendentex;
        } else {
            ascendentex = 1;
        }
        setAscendente(ascendentex);
        setColumnaAnterior(columnaSeleccionada);

        setProductosFiltrados(
            [...productosFiltrados].sort((a, b) => {
                const valorA = a[columnaSeleccionada];
                const valorB = b[columnaSeleccionada];
                if (valorA < valorB) {
                    return -ascendentex;
                }
                if (valorA > valorB) {
                    return ascendentex;
                }
                return 0;
            })
        );
    };

    const buscarTexto = (event) => {
        const textoB = event.target.value;
        setTextoBuscar(textoB);
        const resultado = productos.filter((producto) =>
            producto[columnaAnterior].toUpperCase().includes(textoB.toUpperCase())
        );
        setProductosFiltrados(resultado);
    };

    const avanzar = () => {
        if (pagina < numPaginas - 1) {
            setPagina(pagina + 1);
        }
    };

    const retroceder = () => {
        if (pagina > 0) {
            setPagina(pagina - 1);
        }
    };

    const generarPaginacion = () => {
        const items = [];
        for (let i = 0; i < numPaginas; i++) {
            items.push(
                <li
                    key={i}
                    className={`page-item ${pagina === i ? 'active' : ''}`}
                    aria-current={pagina === i ? 'page' : null}
                >
                    <button className="page-link" onClick={() => setPagina(i)}>
                        {i + 1}
                    </button>
                </li>
            );
        }
        return items;
    };

    return (
        <section className="padded">
            <div className="container">
                <h2>Productos</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        value={textoBuscar}
                        onChange={buscarTexto}
                        className="form-control"
                        placeholder="Nombre del producto a buscar"
                    />
                </div>
                {cargando ? (
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    dibujarTabla()
                )}
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${pagina === 0 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={retroceder}>
                                Previous
                            </button>
                        </li>
                        {generarPaginacion()}
                        <li className={`page-item ${pagina === numPaginas - 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={avanzar}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Productos;



