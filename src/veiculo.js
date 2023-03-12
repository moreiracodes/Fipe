import React from "react";

// Componente que entrega o resultado da consulta
class Veiculo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fipe: this.props.fipe,
        auto: this.props.fipe.state.veiculoSelecionado,
      }
    }
    render(){
        let auto = this.state.auto;
        let result;
        if(auto !== null){
            
            result = 
                    <table cellSpacing="0" cellPadding="0">
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
                                <td>Mês de Referência</td>
                                <td>{auto.referenceMonth}</td>
                            </tr>
                            <tr>
                                <td>Preço</td>
                                <td>{auto.price}</td>
                            </tr>
                        </tbody>
                    </table>
            }
        
        return (<div className="result">{result}</div>);
    }
}
export default Veiculo;