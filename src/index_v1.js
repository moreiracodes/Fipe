import React from "react";
import ReactDOM from "react-dom/client";
import '../src/index.css';



class Fipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          dataSetVeiculos: [],
      }
    }
      componentDidMount(){

        // http://parallelum.com.br/fipe/api/v2/{vehicleType}/{fipeCode}/years/{yearId}/history
        fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3")
        .then((response) => response.json())
        .then((dataFromAPI) => {
          //console.log("no dataFromAPI");
          //console.log(dataFromAPI);
          this.setState({
            dataSetVeiculos: dataFromAPI,
          })           
        })
        .catch((erro) => {
          console.log("erro no fetch then :"+ erro);
        });
      }
    
  render() {
    //console.log("no rener");
    //console.log(this.state.dataSetVeiculos.Modelo);
    
    return (
      <div className="carroFiltravel">
        <h1 className="title">FIPE</h1>
        <div className="filtros">
          <h1>Bora pesquisar</h1>

        </div>
        
        <div className="resultado">
          <h1>Resultado da pesquisa</h1>
          <ul>
            <li>{this.state.dataSetVeiculos.Marca}</li>
            <li>{this.state.dataSetVeiculos.Modelo}</li>
            <li>{this.state.dataSetVeiculos.Valor}</li>
            <li>{this.state.dataSetVeiculos.MesReferencia}</li>
          </ul>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fipe />);