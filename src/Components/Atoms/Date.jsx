import Input from '../Atoms/Input'
import './Date.css'
function DateUbication() {
    return ( 
        <>
            <section className="container-Date"><p className='etiqueta-p'>Datos de ubicación</p>
                <div className='container-input-date'>
                        <div className='section-date1'>
                            <span>calle</span>
                            <Input tipo="text" placeholder="Calle Cárcamos" altura={90} ancho={90} />
                        </div>
                        <div className='section-date2'>
                            <span>No. Int.</span>
                            <Input tipo="text" placeholder="123" altura={90} ancho={100} />
                        </div>
                </div>
                <div className='container-input-date'>
                        <div className='section-date1'>
                            <span>Colonia</span>
                            <Input tipo="text" placeholder="Arbide" altura={90} ancho={90} />
                        </div>
                        <div className='section-date2'>
                            <span>C.P.</span>
                            <Input tipo="text" placeholder="12345" altura={90} ancho={100} />
                        </div>
                </div>
                <div className='container-input-date'>
                        <div className='section-date1-1'>
                            <span>Estado</span>
                            <Input tipo="text" placeholder="Chiapas" altura={90} ancho={90} />
                        </div>
                        <div className='section-date2-2'>
                            <span>Pais</span>
                            <Input tipo="text" placeholder="México" altura={90} ancho={100} />
                        </div>
                </div>
            </section>
        </>
     );}
export default DateUbication;