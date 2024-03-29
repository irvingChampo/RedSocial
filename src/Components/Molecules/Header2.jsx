import Button from '../Atoms/Button'
import Engranaje from '../../../public/img/engranaje.png'
import './header.css'

function Header2() {
    return ( 
        <>
            <nav className='Header'>
                <div className='container-left2'>
                    <h2 className='text-title'>Campus<b>Link</b></h2>
                    <Button size="15" size2="50" borderRadius="3px" color="#442495" colorText="#FFFFFF">Inicio</Button>
                    <Button size="15" size2="50" borderRadius="3px" color="#442495" colorText="#FFFFFF">Grupos</Button>
                    <Button size="15" size2="50" borderRadius="3px" color="#442495" colorText="#FFFFFF">Articulos</Button>
                    <Button size="20" size2="50" borderRadius="3px" color="#442495" colorText="#FFFFFF">Comunicados</Button>
                </div>
                <div className='container-right'>
                    <Button size="70" size2="50" borderRadius="3px" color="#442495" colorText="#FFFFFF">Mi Perfil</Button>
                    <Button size="25" size2="50" borderRadius="3px" color="#FFFFFF" colorText="#000000"><img className='engranaje' src={Engranaje} alt="Imagen de la tarjeta" /></Button>
                </div>
            </nav>
        </>
     );
}

export default Header2;