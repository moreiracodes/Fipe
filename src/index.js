
import React from "react";
import ReactDOM from "react-dom/client";

class Fipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tipoAuto: ["cars", "motorcycles", "trucks"],
          marcasArr: [],
          modeloArr: [],
          anoArr:[],
          tipoSelecionado:null,
          marcaSelecionada: null,
          modeloSelecionado: null,
          anoSelecionado: null,
          mesReferenciaArr: [],
          veiculoSelecionado: null,
        }
        this.setTipoSelecionado = this.setTipoSelecionado.bind(this);
        this.setMarcasArr = this.setMarcasArr.bind(this);
        this.setModeloArr = this.setModeloArr.bind(this);
        this.setAnoArr = this.setAnoArr.bind(this);
        this.setMarcaSelecionada = this.setMarcaSelecionada.bind(this);
        this.setModeloSelecionado = this.setModeloSelecionado.bind(this);
        this.setAnoSelecionado = this.setAnoSelecionado.bind(this);
        this.setVeiculoSelecionado = this.setVeiculoSelecionado.bind(this);
    }
 
    setTipoSelecionado(value){
        this.setState({
            tipoSelecionado: value
        })
    }
    setMarcasArr(value){
        this.setState({
            marcasArr: value
        })
    }
    setModeloArr(value){
        this.setState({
            modeloArr: value
        })
    }
    setAnoArr(value){
        this.setState({
            anoArr: value
        })
    }
    setMarcaSelecionada(value){
        this.setState({
            marcaSelecionada: value
        })
    }
    setModeloSelecionado(value){
        this.setState({
            modeloSelecionado: value
        })
    }
    setAnoSelecionado(value){
        this.setState({
            anoSelecionado: value
        })
    }
    setVeiculoSelecionado(value){
        this.setState({
            veiculoSelecionado: value
        })
    }
    render(){
        //console.log("No render de FIPE o valor de AnoArr é: ");
        //console.log(this.state.anoArr);
        return (
            <div>
            <Formulario 
                fipe = {this}
            />
            </div>
        );
    }
}
class Veiculo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fipe: this.props.fipe,
        auto: this.props.fipe.state.veiculoSelecionado,
       // api: this.props.api,
        historicoDePrecos: [],
      }
      this.historicoDePrecos = this.historicoDePrecos.bind(this);
    }
    componentDidMount(){
        if(this.state.fipe.state.anoSelecionado){
            this.historicoDePrecos();
        }
    }
    historicoDePrecos(){
        let strAPI = "https://parallelum.com.br/fipe/api/v2/"
                         + this.state.fipe.state.tipoSelecionado + "/" 
                         + this.state.auto.codeFipe + "/years/"
                         + this.state.fipe.state.anoSelecionado + "/history";

        fetch(strAPI)
        .then((response) => response.json())
        .then((data) => {
            console.log("exibe historico de precos");
            console.log(data); 
            
            this.setState({historicoDePrecos: data.priceHistory});
        })
        .catch((erro) => {
          console.log("erro no fetch then: "+ erro);
        });

        

    }
    render(){
        let auto = this.state.auto;
        let result;
        if(auto !== null){
            
            result = 
                    <table>
                        <tbody>
                            <tr>
                                <td>Cód. FIPE</td>
                                <td>{auto.codeFipe}</td>
                            </tr>
                            <tr>
                                <td>Marca</td>
                                <td>{auto.brand}</td>
                            </tr>
                            <tr>
                                <td>Modelo</td>
                                <td>{auto.model}</td>
                            </tr>
                            <tr>
                                <td>Ano Modelo</td>
                                <td>{auto.modelYear}</td>
                            </tr>
                            <tr>
                                <td>Combustível</td>
                                <td>{auto.fuel}</td>
                            </tr>
                            <tr>
                                <td>Preço</td>
                                <td>{auto.price}</td>
                            </tr>
                        </tbody>
                    </table>
            }
        
        return (<div>{result}</div>);
    }
}
class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        name: this.props.name
        };
      this.fipe = this.props.fipe;
      this.api = this.props.api;          
      
      this.getDados = this.getDados.bind(this);
      this.setCategoria = this.setCategoria.bind(this);
      this.setMarca = this.setMarca.bind(this);
      this.setModelo = this.setModelo.bind(this);
      this.setAno = this.setAno.bind(this);
    }

    setCategoria(e){
        this.fipe.setTipoSelecionado(e.target.value);
        this.getDados(
            e.target.value, 
            this.fipe.state.marcaSelecionada, 
            this.fipe.state.modeloSelecionado,
            this.fipe.state.anoSelecionado);
    }
    setMarca(e){
        this.fipe.setMarcaSelecionada(e.target.value);
        this.getDados(
            this.fipe.state.tipoSelecionado, 
            e.target.value, 
            this.fipe.state.modeloSelecionado,
            this.fipe.state.anoSelecionado);
    }
    setModelo(e){
        this.fipe.setModeloSelecionado(e.target.value);
        this.getDados(
            this.fipe.state.tipoSelecionado, 
            this.fipe.state.marcaSelecionada, 
            e.target.value,
            this.fipe.state.anoSelecionado);
    }
    setAno(e){
        this.fipe.setAnoSelecionado(e.target.value);
        this.getDados(
            this.fipe.state.tipoSelecionado, 
            this.fipe.state.marcaSelecionada, 
            this.fipe.state.modeloSelecionado, 
            e.target.value);
    }

    getDados(categoria, marca, modelo, ano){
        //https://deividfortuna.github.io/fipe/v2/
        let stringAPIbase = "https://parallelum.com.br/fipe/api/v2/";
        let stringAPIComplete = stringAPIbase + categoria + "/brands";
        let infoCompleta = false;

        if(marca !== null){
            stringAPIComplete = stringAPIComplete + "/"+ marca + "/models";
            //console.log("stringAPIComplete COM MARCA: " + stringAPIComplete);
        }
        if(marca !== null && modelo !== null){
            stringAPIComplete = stringAPIComplete + "/" + modelo + "/years";
            //console.log("stringAPIComplete COM MODELO: " + stringAPIComplete);
        }
        if(marca !== null && modelo !== null && ano !== null){
            stringAPIComplete = stringAPIComplete + "/" + ano ;
            infoCompleta = true;
            //console.log("stringAPIComplete COM ANO: " + stringAPIComplete);
        }
        //https://parallelum.com.br/fipe/api/v2/{vehicleType}/brands/{brandId}/models/{modelId}/years
        //console.log("stringAPIComplete: " + stringAPIComplete);
        fetch(stringAPIComplete)
        .then((response) => response.json())
        .then((data) => {
            //console.log("exibe no console o resultado da API");
            //console.log(data); //exibe no console o resultado da API
            if(!marca){ 
                this.fipe.setMarcasArr(data);
            }else if(!modelo){ 
                this.fipe.setModeloArr(data);
            }else if(!ano){ 
                this.fipe.setAnoArr(data);
            }         
            if(infoCompleta){
                this.fipe.setVeiculoSelecionado(data);
            }
        })
        .catch((erro) => {
          console.log("erro no fetch then: "+ erro);
        });
    }
    

    render(){
        let content;
        
       

        if(this.state.name === 'tipoAuto'){
            content =   <select 
                            value={this.fipe.state.tipoSelecionado} 
                            name='tipoAuto'
                            onChange={this.setCategoria}
                            defaultValue="default">
                            <option valeu="default">Escolha um tipo de veículo</option>
                            {this.fipe.state.tipoAuto.map((auto) => 
                            <option value={auto}>{auto}</option>
                            )}
                        </select>;
        }else if(this.state.name === 'marca'){
            content = 
                    <select 
                        value={this.fipe.state.marcaSelecionada} 
                        name={this.state.name} 
                        onChange={this.setMarca}>
                        <option>Escolha uma marca</option>
                        {this.fipe.state.marcasArr.map((marca) => 
                        <option value={marca.code}>{marca.name}</option>
                        )}
                    </select>
        }else if(this.state.name === 'modelo'){
            content = 
                    <select 
                        value={this.fipe.state.modeloSelecionado} 
                        name={this.state.name} 
                        onChange={this.setModelo}>
                        <option>Escolha um modelo</option>
                        {this.fipe.state.modeloArr.map((modelo) => 
                        <option value={modelo.code}>{modelo.name}</option>
                        )}
                    </select>
        }else if(this.state.name === 'ano'){

            content = 
                    <select 
                        value={this.fipe.state.anoSelecionado} 
                        name={this.state.name} 
                        onChange={this.setAno}>
                        <option>Escolha o ano</option>
                        {this.fipe.state.anoArr.map((ano) => 
                        <option value={ano.code}>{ano.name}</option>
                        )}
                    </select>
        }

        
        return(
            <div className="formulario">
               
                {content}
               
            </div>
        );
    }
}
class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.fipe = this.props.fipe;
    }

    handleClickReset(){
        this.fipe.setTipoSelecionado(null);
        this.fipe.setMarcaSelecionada(null);
        this.fipe.setModeloSelecionado(null);
        this.fipe.setAnoSelecionado(null);
        this.fipe.setVeiculoSelecionado(null);
        
    }

    render(){

        return (
            <div>
                <form>
                    <div>
                        <Select name = 'tipoAuto' fipe={this.fipe} api={this} />
                        {(this.fipe.state.tipoSelecionado !== null) ? <Select name = 'marca' fipe={this.fipe} api={this} /> : ""}
                        {(this.fipe.state.marcaSelecionada !== null) ? <Select name = 'modelo' fipe={this.fipe} api={this} /> : ""}
                        {(this.fipe.state.modeloSelecionado !== null) ? <Select name = 'ano' fipe={this.fipe} api={this} /> : ""}
                    </div>
                    <div>
                        <button className="reset" onClick={this.handleClickReset.bind(this)}>Limpar formulário</button>
                    </div>
                    <div>
                        {(this.fipe.state.veiculoSelecionado !== null)? <Veiculo fipe={this.fipe} api={this}></Veiculo> :""}
                    </div>
                </form>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fipe />);
