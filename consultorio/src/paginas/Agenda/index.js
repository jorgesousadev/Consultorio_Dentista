import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';


const Agenda = () => {
    return (
        <EstruturaPagina>
            <div className="agenda-consultorio">
                <h1>Agende uma Consulta</h1>
                <div className="agenda-container">
                

                <form className="agende-consulta">
                    <label>Nome Completo: <input type="text" name="name"/></label>
                    <br></br>
                    <label>Email: <input type="text" name="name"/></label>
                    <br></br>
                    <label>Data de Nascimento: <input type="text" name="name"/></label>
                    <br></br>
                    <label>Gênero: <input type="text" name="name"/></label>
                    <br></br>
                    <label>CPF: <input type="text" name="name"/></label>
                    <br></br>
                    <label>RG: <input type="text" name="name"/></label>
                    <br></br>
                    <label>Endereço: <input type="text" name="name"/></label>
                    <br></br>
                    <label>UF: <input type="text" name="name"/></label>
                    <br></br>
                    <label>CEP: <input type="text" name="name"/></label>
                    <br></br>
                    <label>Telefone: <input type="text" name="name"/></label>
                </form>
            </div>

            </div>

            <div>
                <Link to="/contato" className="btn-contato">Concluir o Agendamento</Link>

            </div>
        </EstruturaPagina>
    );
}

export default Agenda;