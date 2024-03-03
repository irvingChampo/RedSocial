import { Link } from 'react-router-dom';
import Engranaje from '../../../public/img/engranaje.png';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
import './header.css';

function Header() {
    return ( 
        <>
            <nav className='Header'>
                <div className='container-left'>
                    <h2 className='text-title'>Campus<b>Link</b></h2>
                    <Input tipo="text" placeholder="Buscar" altura={30} ancho={40} />
                    <Button size="10" size2="38" borderRadius="3px" color="#442495" colorText="#FFFFFF">Inicio</Button>
                    <Button size="10" size2="38" borderRadius="3px" color="#442495" colorText="#FFFFFF">Grupos</Button>
                    <Button size="10" size2="38" borderRadius="3px" color="#442495" colorText="#FFFFFF">Articulos</Button>
                    <Button size="14" size2="38" borderRadius="3px" color="#442495" colorText="#FFFFFF">Comunicados</Button>
                </div>
                <div className='container-right'>
                    <Button size="70" size2="38" borderRadius="3px" color="#442495" colorText="#FFFFFF">Mi Perfil</Button>
                    <Button size="20" size2="38" borderRadius="3px" color="#FFFFFF" colorText="#000000"><Link to="/Configuracion"><img className='engranaje' src={Engranaje} alt="Imagen de la tarjeta" /></Link></Button>
                </div>
            </nav>
        </>
     );
}

export default Header;