import "./button.css"

export default function Button (props) {
    console.log(props);
    return (
    <button className="btn" style={{backgroundColor: props.color}}>{props.text}</button>
    );
    
}

export function ButtonChild(props){
    console.log(props);

    function handleClick(){
        props.onClick();
    }

    return (
    <button 
        onClick={handleClick}
        className="btn" 
        style={{backgroundColor: props.color}}
    >
        {props.children}
    </button>
    );
}