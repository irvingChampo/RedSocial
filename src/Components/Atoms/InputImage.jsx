import Usuario from '../../../public/img/usuario.png'
import './inputImage.css'
import Input from '../Atoms/Input'

function InputImage() {
    return ( 
        <>
            <section className='container-input-image'>
                <div className='container-left-image'>
                    <img className='usuario' src={Usuario} alt="Imagen usuario" />
                </div>
                <div className='container-right-input'>
                    <span>Seleccionar archivo</span>
                    <Input tipo="file" placeholder="Agregar foto" altura={50} ancho={100} />
                </div>
            </section>
        </>
     );
}

export default InputImage;