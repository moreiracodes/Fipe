import React from "react";
import Select from "./select.js";
import Veiculo from "./veiculo.js";

/*
Idealmente o componente Formulário é desnecessário. 
Seu conteúdo poderia ter sido incluído dentro do componente principal, Fipe, 
mas no começo do desenvolvimento tive dificuldade com a atualização de estado 
e a soluçao que encontrei foi um componente intermediário.
*/
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
            <div className="formulario">
                <form>
                    <p>Preencha os campos para realizar a consulta:</p>
                     <Select name = 'tipoAuto' fipe={this.fipe} api={this} />
                    {(this.fipe.state.tipoSelecionado !== null) ? <Select name = 'marca' fipe={this.fipe} api={this} /> : ""}
                    {(this.fipe.state.marcaSelecionada !== null) ? <Select name = 'modelo' fipe={this.fipe} api={this} /> : ""}
                    {(this.fipe.state.modeloSelecionado !== null) ? <Select name = 'ano' fipe={this.fipe} api={this} /> : ""}
                    <button className="reset" onClick={this.handleClickReset.bind(this)}>Nova consulta</button>
                    {(this.fipe.state.veiculoSelecionado !== null)? <Veiculo fipe={this.fipe} api={this}></Veiculo> :""}
                </form>
            </div>
        );
    }
}
export default Formulario;