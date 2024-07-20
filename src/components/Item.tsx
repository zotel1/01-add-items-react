import { ItemId } from "../App";


export function Item (
    { id, text } : 
    { id : ItemId, text: string, handleClick: () => void
    }) {
    return (
        <li key={id}>
            {text}
            <button onClick={handleClick}>
                Eliminar elemento
            </button>
        </li>
    )
}