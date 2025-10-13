import {useState} from "react";
import {Button} from "./components/button.component";
import { Input } from "@/components/ui/input";

function App() {
    return <div>
        <h1>Hello Vite + React! UNTREF</h1>
        <Input />
        <Contador />
    </div>
}

function Contador() {
   const [contador, setContador] = useState(0);

   const handleSuma = () => {
       setContador(prevState => prevState + 1);
   }
   const handleReset = () => {
       setContador(0);
   }
   const handleResta = () => {
       setContador(prevState => {
           if (prevState === 0) return prevState;

           return prevState - 1;
       });
   }
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <Button contenido={"Sumar"} handleClick={handleSuma} />
            <Button contenido={"Resetear"} handleClick={handleReset} />
            <Button contenido={"Restar"} handleClick={handleResta} />
        </div>
    )
}

export default App;
