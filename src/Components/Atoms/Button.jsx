import './button.css'

// eslint-disable-next-line react/prop-types
const Button = ({ children, size = "25",size2 = "25", borderRadius = "0px", color = "black", colorText = "black" }) => (
    <button 
      className='button' 
      style={{ 
        width: `${size}%`,
        height: `${size2}%`,
        borderRadius: borderRadius,
        backgroundColor: color,
        color: colorText
      }} 
    >
      {children}
    </button>
  );
  
  export default Button;
  