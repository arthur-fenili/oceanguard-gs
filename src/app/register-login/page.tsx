export default function RegisterLoginPage() {
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
                    <form className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">E-mail:</label>
                            <input className="border-2 rounded-md" type="email" id="email" name="email" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="password">Senha:</label>
                            <input className="border-2 rounded-md" type="password" id="password" name="password" required />
                        </div>
                        <div className="flex flex-row items-center space-x-3">
                            <input className="border-2 rounded-md" type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Lembrar-se?</label>
                        </div>
                        <div className="pt-8">
                            <button className="hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 w-full" type="submit">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
