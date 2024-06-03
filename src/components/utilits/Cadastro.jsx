import React, { useState } from 'react';
import './Cadastro.css'

const CadastroPessoaFisica = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados para o backend ou fazer qualquer outra ação
        console.log('Nome:', nome);
        console.log('CPF:', cpf);
        console.log('Idade:', idade);
        console.log('Email:', email);
    };

    return (
        <div className='Cadastro'>
            <h2>Cadastro de Pessoa Física</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome.:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <br />
                <label>
                    CPF...:   
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </label>
                <br />
                <label>
                    Idade.:
                    <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPessoaFisica;
