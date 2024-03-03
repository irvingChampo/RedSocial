import Header from '../Molecules/Header'
import CompletarRegistro from '../Molecules/CardCRegistro'
import './completarPerfil.css'

function CompletarPerfil() {
    return ( 
        <section className='container-perfil'>
            <Header/>
            <CompletarRegistro/>
        </section>
     );
}

export default CompletarPerfil;