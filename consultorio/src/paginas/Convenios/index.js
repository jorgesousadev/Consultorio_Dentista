import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';


const Convenios = () => {
    return (
        <EstruturaPagina>
            <div className="convenios-consultorio">
                <h1 className="titulo-convenios">CONVÊNIO DENTISTA</h1>
                <h3 className="subtitulo">O PLANO ODONTOLÓGICO IDEAL PARA VOCÊ</h3>
                <h5 className="descricao">Seu sorriso merece o melhor plano odontológico do Brasil. Tenha um plano odontológico, tenha o plano Dentes Saudáveis.</h5>
                <div className="convenios-container">
                
                <h2 class="primeiro-plano">PLANO INDIVIDUAL</h2>
                <p><b>Mensal</b> R$: 24,50 <b>Carência Zero</b></p>
                <p>Sem carência para emergências e atendimento de urgência</p>
           
                <h2 class="segundo-plano">Plano Empresarial</h2>
                <p><b>Mensal</b> R$: 33,90 <b>A partir de 3 vidas</b></p>
                <p>Possibilidade de isenção de carência. Inclui documentação Ortodôntica</p> 

                </div>    
            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>

            </div>
        </EstruturaPagina>
    );
}

export default Convenios;