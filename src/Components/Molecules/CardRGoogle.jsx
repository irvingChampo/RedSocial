import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import Google from '../../../public/img/google.png'
import './CardGoogle.css';


function CardRegistroGoogle() {
    return ( 
        <>
            <section className='CardRegistro'>
                <div className='Titulo'>
                <h2 className='h6'>Campus<b>Link</b></h2>
                <h4 className='h6'>Únete a nuestra comunidad estudiantil</h4>
                <h6 className='h6'>Bienvenido a nuestra red social estudiantil Regístrate ahora para conectarte con compañeros, acceder a recursos educativos y participar en eventos emocionantes.</h6>
                </div>
                <div className='ContainerForm'>
                <div className="containerInput">
                <h6 className='h6'>Nombre</h6>
                <Input tipo="text" placeholder="Nombre(s)" altura={50} ancho={100} />
                </div>
                <div className="containerInput">
                <h6 className='h6'>Apellidos</h6>
                <Input tipo="text" placeholder="Apellidos" altura={50} ancho={100} />
                </div>
                <div className="containerInput">
                <h6 className='h6'>Correo electronico</h6>
                <Input tipo="email" placeholder="Correo electronico" altura={50} ancho={100} />
                </div>
                <div className="containerInput">
                <h6 className='h6'> Contraseña</h6>
                <Input tipo="password" placeholder="Contraseña" altura={50} ancho={100} />
                </div>
                <div className="containerInput">
                <h6 className='h6'>Confirmar contraseña</h6>
                <Input tipo="password" placeholder="Confirmar contraseña" altura={50} ancho={100} />
                </div>
                <div className='containerCheckbox'>
                <Input tipo="checkbox" placeholder="" altura={60} ancho={25} />
                <h6 className='h6'>Al registrarte, aceptas nuestros Términos de Servicios y Políticas de Privacidad</h6>
                </div>
                <div className="containerInput">
                <Button size="100" size2="70" borderRadius="5px" color="#442495" colorText="#FFFFFF">Registrarme</Button>
                </div>
                </div>
                <div className="ButtonGoogle">
                <Button size="60" size2="60" borderRadius="25px" color="#FFFFFF" colorText="#000000"><img className='google' src={Google} alt="Imagen de la tarjeta" />Registrarme con Google</Button>
                <h6 className='h7'>¿Ya tienes un cuenta? <a href="#">Inicia sesion aqui¡</a></h6>
                </div>
            </section>
        </>
     );
}

export default CardRegistroGoogle;