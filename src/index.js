import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/fontes/GandhiSans-Regular.otf";
import "./assets/fontes/GandhiSans-Bold.otf";

//Principal variável que vai renderizar toda a aplicação
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
//Chama o método render(), portanto tudo que estiver dentro será renderizado na página
root.render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>
);
