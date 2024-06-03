export default function Donate() {
    return (
        <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-row">
                <div className="p-3">
                    <h1 className="text-3xl">Faça a diferença! Colabore com o projeto <b>CleanSea</b>.</h1>
                    <p className=" text-xl">Seja um colaborador e ajude a manter nossas atividades em funcionamento.</p>
                </div>
            </div>
            <br />

            <div className="border-2 border-blue-100 p-10 m-10 rounded-xl shadow-2xl">
                <div className="flex flex-col items-center">
                    <h2 className=" text-2xl pb-4">DOAÇÃO</h2>
                    <p>Para doar, basta preencher as informações abaixo:</p>
                </div>
                <br />
                <div className="">
                    <form className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Nome:</label>
                            <input className="border-2 rounded-xl" type="text" id="name" name="name" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">E-mail:</label>
                            <input className="border-2 rounded-xl" type="email" id="email" name="email" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="amount">Valor:</label>
                            <input className="border-2 rounded-xl" type="number" id="amount" name="amount" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="amount">Método de pagamento:</label>
                            <select className="border-2 rounded-xl" name="payment" id="payment">
                                <option value="credit">Cartão de Crédito</option>
                                <option value="debit">Cartão de Débito</option>
                                <option value="paypal">Paypal</option>
                                <option value="pix">Pix</option>
                                <option value="boleto">Boleto Bancário</option>
                            </select>

                        </div>
                        <div className="pt-8">
                            <button className=" hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 w-full" type="submit">DOAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}