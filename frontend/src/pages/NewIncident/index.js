import React from 'react';

import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhatamente para encontrar um herói para resolver isso.</p>
                
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    
                    <button className="button"> Cadastrar </button>
                </form>
            </div>
        </div>
    );
}