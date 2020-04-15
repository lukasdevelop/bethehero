import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'
import api from '../../services/api';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongID = localStorage.getItem('ongId')

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongID
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

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
                    <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Titulo do caso" />
                    <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição" />
                    <input 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Valor em reais" />
                    
                    <button onClick={handleNewIncident} className="button"> Cadastrar </button>
                </form>
            </div>
        </div>
    );
}