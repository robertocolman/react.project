import logo from '../logo.svg';

function Examples() {
  const greeting = "Bienvenidos a mi Ecommerce!";

  const mostrarCurso = () => "comision tanto de reactJS"

  function getRandomColor() {
    return "rbg(44, 54, 99)";
  }

  let styleHeader = {
    backgrandColor: getRandomColor(),
    margin: "20px 10px",
    border: "solid 3px red",
  }

    return(
    <section className="App">
    <div style ={styleHeader} className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p style={{color: "pink"}}>{mostrarCurso()}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        { greeting }
      </a>
    </div>
  </section>)
}

export default Examples;