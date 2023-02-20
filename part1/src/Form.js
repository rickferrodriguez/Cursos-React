
export default function Form ({nombre}) {
    return (
        <form>
            <label>{nombre}: 
                <input type="text" /> </label>
            <br />
            <button type="button">Mi Botón</button>
        </form>
    )
}
