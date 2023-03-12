
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css"; //importa o css
import Formulario from "./formulario"; //importa componente Formulário

//Componente principal da aplicacao. Aqui sao mantidos e definidos os principais states.
class Fipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Poderia ter trazido tipoAuto da API, mas como era apenas 3 categorias, inseri manualmente.
            tipoAuto: [
            "cars", 
            "motorcycles", 
            "trucks"],
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
        return (<Formulario fipe = {this}/>);
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="content">
        <h1>Preço médio de veículos</h1>
        <ol>
            <li>A Tabela Fipe expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações. Os preços efetivamente praticados variam em função da região, conservação, cor, acessórios ou qualquer outro fator que possa influenciar as condições de oferta e procura por um veículo específico.</li>
            <li>O ano do veículo refere-se ao ano do modelo e não são considerados veículos para uso profissional ou especial.</li>
            <li> Os valores são expressos em R$ (reais) do mês/ano de referência.</li>
        </ol>
        <div className="informacoes">
            <h2>Como funciona?</h2>
            <p>Aqui você pode consultar o preço médio de veículos novos e usados apurados pela FIPE.</p>
            <p>Para mais informações, consulte o site oficial da <a href="https://veiculos.fipe.org.br/" target="blank">FIPE</a></p>
            
        </div>
        <Fipe />
        <p className="copyright">Este sistema usa dados fornecidos pela API não oficial da FIPE de&nbsp;
            <a href="https://deividfortuna.github.io/fipe/v2/"> 
                Deivid Fortuna
            </a>
        </p>
    </div>

);
