import './cardArticulo.css';

// eslint-disable-next-line react/prop-types
function CardArticulo({ title1, text }) {
    return (
        <section className="container-card-articulo">
            <div className='container-info-articulo'>
                <h3 className='margin'>{title1}</h3>
                <p className='margin'>{text}</p>
                <button className='saber-mas'>saber mas</button>
            </div>
        </section>
    );
}

export default CardArticulo;
