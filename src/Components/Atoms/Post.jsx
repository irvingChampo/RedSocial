import './post.css';
import Like from '../../../public/img/corazon.png';
import Comentario from '../../../public/img/charla.png';
import Compartir from '../../../public/img/participacion.png';

// eslint-disable-next-line react/prop-types
function Post({ text, text2, image1, image2,number, number2, number3 }) {
    return (
        <section className="container-post1">
            <div className="container-title-perfil">
                <img className="img-post-perfil" src={image1} alt="Imagen de perfil" />
                <h2>{text}</h2>
            </div>
            <div className='container-post-info'>
                <p>{text2}</p>
                <img className="img-content" src={image2} alt="Imagen de contenido" />
                <nav className="container-reaction">
                    <div className='interaction'><img className='img-reaction' src={Like} alt="Me gusta" /><h6><b>{number}</b> <a href='#'>Me gusta</a></h6></div>
                    <div className='interaction'><img className='img-reaction' src={Comentario} alt="Comentar" /> <h6><b>{number2}</b> <a href='#'>Comentarios</a></h6></div>
                    <div className='interaction'><img className='img-reaction' src={Compartir} alt="Compartir" /> <h6><b>{number3}</b> <a href='#'>Compartir</a></h6></div>
                </nav>
            </div>
            <nav className='container-interaction'>
                <div className='interaction-post'><img className='img-reaction2' src={Like} alt="Me gusta" /><h5>Me gusta</h5></div>
                <div className='container-2-interaction'>
                    <div className='interaction-post2'><img className='img-reaction2' src={Comentario} alt="Comentar" /><h5>Comentar</h5></div>
                    <div className='interaction-post2'><img className='img-reaction2' src={Compartir} alt="Compartir" /><h5>Compartir</h5></div>
                </div>
            </nav>
        </section>
    );
}
export default Post;