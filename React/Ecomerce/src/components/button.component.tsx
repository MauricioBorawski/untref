export function Button(props: { contenido: string, handleClick: () => void }) {
    const {contenido, handleClick} = props;

    return <button onClick={handleClick}>
        {contenido}
    </button>
}