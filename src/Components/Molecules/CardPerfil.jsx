import '../Molecules/cardPerfil.css'
import Perfil from '../../../public/img/perfil.jpeg'
import Face from '../../../public/img/faces.jpeg'

function CardPerfil() {
    return ( 
        <>
            <section className='container-Perfil'>
            <div className="profile-container">
                <img src={Perfil} alt="Background" className="background-image"/>
                <img src={Face} alt="Profile" className="profile-picture"/>
            </div>
            <div className='container-textPerfil'>
                <h3>Joanna Rosenbaum</h3>
                <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
            </div>
            <div className='container-public'>
                <div className='containerPublicacion'>
                    <h3 className='sinMargen'>24</h3>
                    <p>Publicaciones</p>
                </div>
                <div className='containerArticulo'>
                    <h3 className='sinMargen'>136</h3>
                    <p>Artículos</p>
                </div>
            </div>
            </section>
        </>
     );
}

export default CardPerfil;