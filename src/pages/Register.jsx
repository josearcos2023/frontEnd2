import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api_int_2023/users/save", {
                username: username,
                email: email,
                password: password,
            });
            alert("Registro exitoso");
            navigate('/tienda');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <section className="padded">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 className="text-center">Registro</h2>
                        <br/>
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" id="username" placeholder="Ingrese su username"
                                       value={username}
                                       onChange={(event) => {
                                           setUsername(event.target.value);
                                       }}
                                />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo"
                                       value={email}
                                       onChange={(event) => {
                                           setEmail(event.target.value);
                                       }}
                                />
                            </div>
                            <div className="mb-2">
                                <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña"
                                       value={password}
                                       onChange={(event) => {
                                           setPassword(event.target.value);
                                       }}
                                />
                            </div>
                            <div className="mb-2">
                                <button type="submit" className="btn btn-primary mt-4" onClick={save} >Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>

    );
}

export default Register;