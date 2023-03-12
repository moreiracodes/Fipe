import React from "react";

/*
Componente que carrega as informaçoes de cada select, marca, modelo e ano do veículo 
com os dados disponibilzados pela API e atualiza os estados em Fipe.
*/
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
      this.exibeCategoria = this.exibeCategoria.bind(this);
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
        let stringAPIbase = "https://parallelum.com.br/fipe/api/v2/"; //endpoint
        let stringAPIComplete = stringAPIbase + categoria + "/brands";
        let infoCompleta = false;

        if(marca !== null){
            stringAPIComplete = stringAPIComplete + "/"+ marca + "/models";
        }
        if(marca !== null && modelo !== null){
            stringAPIComplete = stringAPIComplete + "/" + modelo + "/years";
        }
        if(marca !== null && modelo !== null && ano !== null){
             stringAPIComplete = stringAPIComplete + "/" + ano ;
            infoCompleta = true; 
        }
        
        fetch(stringAPIComplete)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(!marca){ 
                this.fipe.setMarcasArr(data);
            }else if(!modelo){ 
                this.fipe.setModeloArr(data);
            }else if(!ano){ 
                this.fipe.setAnoArr(data);
                console.log(data);
            }         
            if(infoCompleta){
                this.fipe.setVeiculoSelecionado(data);
            }
        })
        .catch((erro) => {
          console.log("erro no fetch: "+ erro);
        });
    }

    exibeCategoria(categoria){ // As categorias de veículos sao entregues em inglês, então traduzi para português.
        if(categoria === 'cars'){
            return "Carros"
        }else if(categoria === 'motorcycles'){
            return "Motos"
        }else if(categoria === 'trucks'){
            return "Caminhões e Ônibus"
        }
    }

    render(){
        let content;
        if(this.state.name === 'tipoAuto'){
            content =   <div className="line">
                            <p>Categoria</p>
                            <div className="selectContent">
                                <select 
                                    value={this.fipe.state.tipoSelecionado} 
                                    name='tipoAuto'
                                    onChange={this.setCategoria}
                                    defaultValue="default">
                                    <option valeu="default">Escolha um tipo de veículo</option>
                                    {
                                    this.fipe.state.tipoAuto.map((auto) => 
                                    <option value={auto}>{this.exibeCategoria(auto)}</option>
                                    )}
                                </select>
                            </div>
                        </div>;
        }else if(this.state.name === 'marca'){
            content =   <div className="line">
                            <p>Marca</p>
                            <div className="selectContent">
                                <select 
                                    value={this.fipe.state.marcaSelecionada} 
                                    name={this.state.name} 
                                    onChange={this.setMarca}>
                                    <option>Escolha uma marca</option>
                                    {
                                    this.fipe.state.marcasArr.map((marca) => 
                                    <option value={marca.code}>{marca.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>;

        }else if(this.state.name === 'modelo'){
            content =   <div className="line">
                            <p>Modelo</p>
                            <div className="selectContent">
                                <select 
                                    value={this.fipe.state.modeloSelecionado} 
                                    name={this.state.name} 
                                    onChange={this.setModelo}>
                                    <option>Escolha um modelo</option>
                                    {
                                    this.fipe.state.modeloArr.map((modelo) => 
                                    <option value={modelo.code}>{modelo.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>;
        }else if(this.state.name === 'ano'){

            content =   <div className="line">
                            <p>Ano Modelo</p>
                            <div className="selectContent">
                                <select 
                                    value={this.fipe.state.anoSelecionado} 
                                    name={this.state.name} 
                                    onChange={this.setAno}>
                                    <option>Escolha o ano</option>
                                    {
                                    this.fipe.state.anoArr.map((ano, i) => 
                                    (i !== 0) ? <option value={ano.code}>{ano.name}</option> :""
                                    )}
                                </select>
                            </div>
                        </div>;
        }

        return(<div>{content}</div>);
    }
}
export default Select;