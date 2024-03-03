import './Textarea.css'

// eslint-disable-next-line react/prop-types
const Textarea = ({title, placeholder, altura=10,ancho=30}) => (
        <>
            <div style={{height: `${altura}%`,width: `${ancho}%`}}>
                <span>{title}</span>
                <textarea className="tarea" placeholder={placeholder}/>
            </div>
        </>
    );
    
    export default Textarea;