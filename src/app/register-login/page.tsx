'use client'

import { useState } from 'react';
import axios from 'axios';

export default function RegisterLoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'senha') setSenha(value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Adicionando logs para verificar os valores dos inputs
        console.log('Email:', email);
        console.log('Senha:', senha);

        try {
            const response = await axios.post('http://localhost:8088/logins', {
                email,
                senha,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Login realizado com sucesso:', response.data);
            localStorage.setItem('clienteEmail', email);
            window.location.href = '/homelogged';
        } catch (error: any) {
            console.error('Erro ao realizar login:', error.response?.data || error.message);
            setErrorMessage(error.response?.data || 'Erro ao realizar login.');
        }
    };

    
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: 'Brasil'
    });

    const handleCepChange = async (e: any) => {
        const newCep = e.target.value;
        setCep(newCep);

        if (newCep.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`);
                if (response.data) {
                    setEndereco({
                        rua: response.data.logradouro,
                        bairro: response.data.bairro,
                        cidade: response.data.localidade,
                        estado: response.data.uf,
                        pais: 'Brasil'
                    });
                }
            } catch (error) {
                console.error("Erro ao buscar o CEP:", error);
            }
        }
    };

    return (
        <div className='bg-[#f5f0e1] py-8 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4'>
            <div className="border-2 border-blue-100 p-10 rounded-xl shadow-2xl bg-blue-50 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl pb-4">REGISTRAR-SE</h2>
                    <p>Preencha as informações abaixo:</p>
                </div>
                <br />
                <div>
                    <form className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Nome:</label>
                            <input className="border-2 rounded-md" type="text" id="name" name="name" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">E-mail:</label>
                            <input className="border-2 rounded-md" type="email" id="email" name="email" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="password">Senha:</label>
                            <input className="border-2 rounded-md" type="password" id="password" name="password" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="cep">CEP:</label>
                            <input className="border-2 rounded-md" type="text" id="cep" name="cep" value={cep} onChange={handleCepChange} required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="rua">Rua:</label>
                            <input className="border-2 rounded-md" type="text" id="rua" name="rua" value={endereco.rua} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="cidade">Cidade:</label>
                            <input className="border-2 rounded-md" type="text" id="cidade" name="cidade" value={endereco.cidade} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="cidade">Bairro:</label>
                            <input className="border-2 rounded-md" type="text" id="bairro" name="bairro" value={endereco.cidade} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="estado">Estado:</label>
                            <input className="border-2 rounded-md" type="text" id="estado" name="estado" value={endereco.estado} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="pais">País:</label>
                            <input className="border-2 rounded-md" type="text" id="pais" name="pais" value={endereco.pais} />
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <input className="border-2 rounded-md" type="checkbox" id="newsletter" name="newsletter" />
                            <label htmlFor="newsletter">Deseja receber atualizações do projeto?</label>
                        </div>
                        <div className="pt-8">
                            <button className="hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 w-full" type="submit">REGISTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p className=" text-center lg:text-left lg:px-4">OU</p>
            </div>
            <div className="border-2 border-blue-100 p-10 m-10 rounded-xl shadow-2xl bg-blue-50 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl pb-4">FAZER LOGIN</h2>
                    <p>Preencha suas informações para login:</p>
                </div>
                <br />
                <div>
                    <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">E-mail:</label>
                            <input className="border-2 rounded-md" type="email" name="email" value={email} onChange={handleInputChange} required/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="password">Senha:</label>
                            <input className="border-2 rounded-md" type="password" name="senha" value={senha} onChange={handleInputChange} required/>
                        </div>
                        <div className="flex flex-row items-center space-x-3">
                            <input className="border-2 rounded-md" type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Lembrar-se?</label>
                        </div>
                        <div className="pt-8">
                            <button className="hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 w-full" type="submit">LOGIN</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
