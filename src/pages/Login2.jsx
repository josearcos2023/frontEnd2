import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api_int_2023/users/login", {
                email: email,
                password: password,
            }).then((res) =>
            {
                console.log(res.data);

                if (res.data.message === "Email not exits")
                {
                    alert("Email not exits");
                }
                else if(res.data.message === "Login Success")
                {

                    navigate('/tienda');
                }
                else
                {
                    alert("Incorrect Email and Password not match");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }
    return (
        <section className="padded">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 className="text-center">Iniciar sesión</h2>
                        <br/>
                        <form>
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
                                <button type="submit" className="btn btn-primary" onClick={login} >Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
}

export default Login;