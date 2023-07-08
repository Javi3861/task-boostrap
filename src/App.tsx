import React, { useState, useRef } from "react";

type FormElemet = React.FormEvent<HTMLFormElement>;
interface ITarea {
  name: string;
  done: boolean;
}

function App() {
  const [newTexto, setNewTexto] = useState<string>("");
  const [tarea, setTarea] = useState<ITarea[]>([]);

  const handleSubmit = (e: FormElemet) => {
    e.preventDefault();
    addTarea(newTexto);
    setNewTexto("");
  };

  const addTarea = (name: string) => {
    const newTexto = [...tarea, { name, done: false }];
    setTarea(newTexto);
  };

  const toggleDonTask = (i:number) => {
    const newTexto: ITarea[] = [...tarea]
    newTexto[i].done = !newTexto[i].done
    setTarea(newTexto)
  }

  const removeTask = (i:number) => {
    const newTexto: ITarea[]  = [...tarea]
    newTexto.splice(i, 1)
    setTarea(newTexto)
  }


  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewTexto(e.target.value)}
                  className="form-control"
                  
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          {tarea.map((t: ITarea, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.name}
              </h2>
              <div>
                <button className="btn btn-secondary" onClick={() => toggleDonTask(i)}>
                  {t.done ? '✓' : '✘'}
                  </button>
                  <button className="btn btn-danger" onClick={() => removeTask(i)}>
                    Eliminar
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
