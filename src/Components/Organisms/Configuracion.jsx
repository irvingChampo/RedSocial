import Header2 from '../Molecules/Header2'
import CompletarRegistro from '../Molecules/CardCRegistro'
import './completarPerfil.css'

function CompletarPerfil() {
    return ( 
        <section className='container-perfil'>
            <Header2/>
            <CompletarRegistro/>
        </section>
     );
}

export default CompletarPerfil;