import './Feed.css'
import Header from '../Molecules/Header'
import CardPerfil from '../Molecules/CardPerfil'
import CrearPublicacion from '../Molecules/CrearPublicacion'
import Articulos from '../Molecules/Articulos'

function Feed() {
    return ( 
        <>
            <Header/>
            <section className='container-feed'>
                <CardPerfil/>
                <CrearPublicacion/>
                <Articulos/>
            </section>
        </>
     );
}

export default Feed;