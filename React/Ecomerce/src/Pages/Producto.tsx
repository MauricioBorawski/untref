import {useParams} from "react-router";

export default function Producto() {
    const params = useParams();

    return (
        <h1>Producto con ID {params.id}</h1>
    )
}