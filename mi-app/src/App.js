import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
  <h1>Hola mundo </h1>
  <form action="procesar-registro.php" method="POST">
  <label for="name">Ingrese su nombre:</label>
  <input type="text" id="name" required></input>
  
  <input type="submit" value="Enviar"></input>
</form>

    </div>
  );
}

export default App;