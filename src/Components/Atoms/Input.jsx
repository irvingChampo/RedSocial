import './input.css';

// eslint-disable-next-line react/prop-types
const Input = ({ tipo, placeholder, altura, ancho }) => (
<input
            type={tipo}
            placeholder={placeholder}
            style={{
                height: `${altura}%`,
                width: `${ancho}%`
            }}
            required
        />
);

export default Input;