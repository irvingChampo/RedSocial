import check from '../../../public/img/check.png'
import Face from '../../../public/img/faces.jpeg'
import Perfil from '../../../public/img/perfilH.jpeg'
import PostImage from '../../../public/img/post.jpeg'
import Input from '../Atoms/Input'
import Post from '../Atoms/Post'
import './crearPublicacion.css'

function CrearPublicacion() {
    return ( 
        <>
            <section className="container-post">
                <div className='container-crear'>
                    <img className='img-crear' src={Face}/>
                    <Input tipo="text" placeholder="Crear publicacion" altura={50} ancho={75} />
                    <button className='button-check'><img className='img-check' src={check}/></button>
                </div>
                <div className='container-botones'>
                    <button className='button1'>Contenido multimedia</button>
                    <button className='button2'>Evento</button>
                    <button className='button3'>Escribir Articulo</button>
                </div>
                <Post image1={Perfil} text={'Irving Champo'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Perfil} text={'Irving Champo'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Perfil} text={'Irving Champo'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
            </section>
        </>
     );
}
export default CrearPublicacion;