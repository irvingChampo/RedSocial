// eslint-disable-next-line react/prop-types
const Input = ({ title1, title2, text1, text2}) => (
        <>
                <div className="title-text">
                    <h2>{title1}<b>{title2}</b></h2>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
        </>
    );
    
    export default Input;