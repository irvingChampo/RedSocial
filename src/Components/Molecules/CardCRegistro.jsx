import Input from '../Atoms/Input'
import Intereces from '../Atoms/Intereces'
import Redes from '../Atoms/Redes'
import './cardCRegistro.css'
import { Link } from 'react-router-dom';
import Title from '../Atoms/Title'
import Textarea from '../Atoms/Textarea'
import Date from '../Atoms/Date'
import Button from '../Atoms/Button'
import InputImage from '../Atoms/InputImage'
function CompletarRegistro() {
    return ( 
        <>
            <section className='container-card'>
                <Title title1={'Campus'} title2={'Link'} text1={'Completa tu perfil'} text2={'¡Personaliza tu experiencia! Completa tu perfil para conectarte mejor con la comunidad'}/>
                <div className='container-section-1'>
                    <div className="container-Input">
                        <h6 className='h6'>Carrera</h6>
                        <Input tipo="text" placeholder="Nombre(s)" altura={50} ancho={99} />
                    </div>
                    <div className="container-Input">
                        <h6 className='h6'>ID estudiante</h6>
                        <Input tipo="text" placeholder="Nombre(s)" altura={50} ancho={99} />
                    </div>
                    <div className="container-Input">
                        <h6 className='h6'>Telefono</h6>
                        <Input tipo="text" placeholder="Nombre(s)" altura={50} ancho={99} />
                    </div>
                </div>
                <Intereces/>
                <Redes/>
                <Textarea title={'Intereces'} placeholder={'[Comparte una breve descripción sobre ti]'} altura={10} ancho={65}/>
                <InputImage/>
                <Date/>
                <div className="containerButton">
                <Link className='Link-button' to="/Home"><Button size="100" size2="70" borderRadius="10px" color="#5935A1" colorText="#000000">Guardar Cambios</Button></Link>
                </div>
            </section>
        </>
     );
}

export default CompletarRegistro;