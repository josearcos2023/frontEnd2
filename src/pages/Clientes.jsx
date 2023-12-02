import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Clientes() {
  const [listaClientes, setListaClientes] = useState([]);
  const [listaClientesFiltrado, setListaClientesFiltrado] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [ascendente, setAscendente] = useState(1);
  const [columnaAnterior, setColumnaAnterior] = useState("lastname");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [pagina, setPagina] = useState(0);
  const [filasPagina] = useState(20);
  const [numPaginas, setNumPaginas] = useState(0);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = async () => {
    // const rutaServicio = ApiWebURL + "servicioclientes.php";
    const rutaServicio = "https://www.elalamohospedaje.com/services/clients.php";
    const response = await fetch(rutaServicio);
    const data = await response.json();
    setListaClientes(data);
    setListaClientesFiltrado(data);
    setCargando(false);
    setNumPaginas(Math.ceil(data.length / filasPagina));
  };

  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th columna="id" onClick={(event) => seleccionarColumna(event)}>
              ID Cliente
            </th>
            <th columna="name" onClick={(event) => seleccionarColumna(event)}>
              Nombre
            </th>
            <th columna="lastname" onClick={(event) => seleccionarColumna(event)}>
              Apellido
            </th>
            <th columna="date_of_birth" onClick={(event) => seleccionarColumna(event)}>
              Fecha Nac.
            </th>
            <th columna="phone" onClick={(event) => seleccionarColumna(event)}>
              Teléfono
            </th>
            <th columna="email" onClick={(event) => seleccionarColumna(event)}>
              Correo
            </th>
            <th columna="civil_status" onClick={(event) => seleccionarColumna(event)}>
              Estado Civil
            </th>
            <th columna="address" onClick={(event) => seleccionarColumna(event)}>
              Dirección
            </th>
          </tr>
        </thead>
        <tbody>
          {listaClientesFiltrado
            .slice(pagina * filasPagina, (pagina + 1) * filasPagina)
            .map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.name}</td>
                <td>{cliente.lastname}</td>
                <td>{cliente.date_of_birth}</td>
                <td>{cliente.phone}</td>
                <td>{cliente.email}</td>
                <td>{cliente.civil_status}</td>
                <td>{cliente.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  const seleccionarColumna = (event) => {
    const columnaSeleccionada = event.target.getAttribute("columna");
    let ascendentex = ascendente;
    if (columnaAnterior === columnaSeleccionada) {
      ascendentex = -ascendentex;
    } else {
      ascendentex = 1;
    }
    setAscendente(ascendentex);
    setColumnaAnterior(columnaSeleccionada);

    setListaClientesFiltrado(
      [...listaClientesFiltrado].sort((a, b) => {
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
    const resultado = listaClientes.filter((cliente) =>
      cliente[columnaAnterior].toUpperCase().includes(textoB.toUpperCase())
    );
    setListaClientesFiltrado(resultado);
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
          className={`page-item ${pagina === i ? "active" : ""}`}
          aria-current={pagina === i ? "page" : null}
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
        <h2>Clientes</h2>
        <div className="mb-3">
          <input
            type="text"
            value={textoBuscar}
            onChange={buscarTexto}
            className="form-control"
            placeholder="Apellido del cliente a buscar"
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
            <li className={`page-item ${pagina === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={retroceder}>
                Previous
              </button>
            </li>
            {generarPaginacion()}
            <li
              className={`page-item ${
                pagina === numPaginas - 1 ? "disabled" : ""
              }`}
            >
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

export default Clientes;

