import './articulos.css'
import CardArticulo from '../Atoms/CardArticulo'
function Articulos() {
    return ( 
    <>
        <section className='container-articulo'>
            <div className='container-articulos'>
                <h2 className='sin-margin'>Artículos recientes</h2>
                <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                <CardArticulo title1={'Sam Morales'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
                <CardArticulo title1={'Martin Estrada'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
            </div>
        </section>
    </>
    );
}

export default Articulos;