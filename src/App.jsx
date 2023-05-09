import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
      <div>
        <h1>Contadora Simples no <span>React</span> </h1>
        <h2>{value}</h2>
        <button className="botao" onClick={() => setValue(value + 1)}>
          Incrementar
        </button>
        <button className="botao" onClick={() => setValue(value - 1)}>
          Diminuir
        </button>
        <button className="botao" onClick={() => setValue(0)}>
          Resetar
        </button>
      </div>
  );
}

export default App;
