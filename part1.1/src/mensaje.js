const Mensaje = (props) => {
    return (
        <h1 style={{color: props.color}}>
            {props.mensaje}
        </h1>
    )
}

export default Mensaje
