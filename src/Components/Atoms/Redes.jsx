import instagram from '../../../public/img/instagram.png'
import facebook from '../../../public/img/facebook.png'
import x from '../../../public/img/gorjeo.png'
import Input from './Input'

function Redes() {
    return ( 
        <>
                <div className='container-redes'>
                    <h5>Redes sociales</h5>
                    <div className='container-input-icon'>
                        <img className='img-icons' src={instagram} />
                        <Input tipo="text" placeholder="@tuCuenta" altura={85} ancho={99} />
                    </div>
                    <div className='container-input-icon'>
                        <img className='img-icons' src={facebook} />
                        <Input tipo="text" placeholder="@tuCuenta" altura={85} ancho={99} />
                    </div>
                    <div className='container-input-icon'>
                        <img className='img-icons' src={x} />
                        <Input tipo="text" placeholder="@tuCuenta" altura={85} ancho={99} />
                    </div>
                </div>
        </>
     );
}

export default Redes;