import React from "react";
import ReactDOM from "react-dom/client";

class API extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        buscar: false,
    }
    
    if(buscar){
      this.getDados();
    }
  } 

  getDados(){
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3")
      .then((response) => response.json())
      .then((dataFromAPI) => {
          //console.log(dataFromAPI);
          this.props.setState({
            dataSetVeiculos: dataFromAPI,
          })           
      })
      .catch((erro) => {
        console.log("erro no fetch then :"+ erro);
      });
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSetVeiculos: [],
        }
    }
    
    render() {
      //https://deividfortuna.github.io/fipe/
      console.log(this.state.dataSetVeiculos);
      return (
        <div>
          <button onClick={this.getDados.bind(this)}>pega dados</button>
          <br/>
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/* <ul>
            {this.state.dataSetVeiculos.map((auto) => 
            <li key={auto.CodigoFipe}>
              {auto.Modelo}
            </li>
            )}
          </ul>*/