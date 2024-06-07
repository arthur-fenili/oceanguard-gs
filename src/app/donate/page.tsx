'use client';

import { useState } from 'react';

export default function Donate() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        payment: 'null'
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const { name, email, amount, payment } = formData;

        if (name && email && amount && payment !== 'null') {
            alert('Obrigado pela doação!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#f5f0e1] py-8">
            <div className="flex flex-col md:flex-row p-3 space-y-4 md:space-y-0 md:space-x-4">
                <div>
                    <h1 className="text-3xl">Faça a diferença! Colabore com o projeto <b>CleanSea</b>.</h1>
                    <p className="text-xl">Seja um colaborador e ajude a manter nossas atividades em funcionamento.</p>
                </div>
            </div>
            <br />

            <div className="border-2 border-blue-100 p-10 m-10 rounded-xl shadow-2xl bg-blue-50 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl pb-4">DOAÇÃO</h2>
                    <p>Para doar, basta preencher as informações abaixo:</p>
                </div>
                <br />
                <div>
                    <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Nome:</label>
                            <input
                                className="border-2 rounded-md"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                className="border-2 rounded-md"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="amount">Valor (R$):</label>
                            <input
                                className="border-2 rounded-md"
                                type="number"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="payment">Método de pagamento:</label>
                            <select
                                className="border-2 rounded-xl"
                                name="payment"
                                id="payment"
                                value={formData.payment}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="null">Selecione</option>
                                <option value="credit">Cartão de Crédito</option>
                                <option value="debit">Cartão de Débito</option>
                                <option value="paypal">Paypal</option>
                                <option value="pix">Pix</option>
                                <option value="boleto">Boleto Bancário</option>
                            </select>
                        </div>
                        <div className="pt-8">
                            <button className="hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 w-full" type="submit">DOAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
