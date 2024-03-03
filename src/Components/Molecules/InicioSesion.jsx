import { Link } from 'react-router-dom';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import Google from '../../../public/img/google.png'
import './CardGoogle.css';

function InicioSesion() {
    return (
        <>
            <section className='CardRegistroLogin'>
                <div className='Titulo'>
                    <h2 className='h6'>Campus<b>Link</b></h2>
                    <h4 className='h6'>Iniciar Sesión</h4>
                    <h6 className='h6'>¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu cuenta </h6>
                </div>
                <div className='ContainerFormLogin'>
                    <div className="containerInputLogin">
                        <h6 className='h6'>Correo electrónico</h6>
                        <Input tipo="email" placeholder="Correo electrónico" altura={60} ancho={100} />
                    </div>
                    <div className="containerInputLogin">
                        <h6 className='h6'>Contraseña</h6>
                        <Input tipo="password" placeholder="Contraseña" altura={60} ancho={100} />
                    </div>
                    <div className="containerInput">
                        <Button size="100" size2="70" borderRadius="5px" color="#442495" colorText="#FFFFFF">Registrarme</Button>
                    </div>
                </div>
                <div className="ButtonGoogleLogin">
                    <Button size="60" size2="70" borderRadius="25px" color="#FFFFFF" colorText="#000000"><img className='google' src={Google} alt="Imagen de la tarjeta" />Registrarme con Google</Button>
                    <h6 className='h7'>¿No tienes cuenta? <Link to="/Registro">Regístrate Aquí</Link></h6>
                </div>
            </section>
        </>
    );
}

export default InicioSesion;
