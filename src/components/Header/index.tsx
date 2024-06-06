import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex flex-col lg:flex-row">
            <div id="container" className="flex flex-col lg:flex-row items-center w-full border-b border-gray-200 shadow-md bg-white">
                <div className="bg-blue-300 w-full lg:w-auto flex justify-center lg:justify-start">
                    <Link href="/">
                        <p className="text-white p-4 lg:p-8 text-3xl"><b>OCEAN</b>GUARD</p>
                    </Link>
                </div>
                <div className="mt-4 lg:mt-0 w-full lg:w-auto flex justify-center lg:justify-start">
                    <nav>
                        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                            <li className="hover:text-blue-500 text-xl text-black pl-4"><Link href="/monitor">MONITORAMENTO</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-7 items-center mt-4 lg:mt-0 ml-auto mr-auto lg:ml-auto lg:mr-5">
                    <p className="hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 text-center lg:text-left"><Link href="/donate">DONATE</Link></p>
                    <Link href="/register-login">
                        <div className="flex flex-col items-center hover:text-blue-500 text-center lg:text-left">
                            <p>REGISTER</p>
                            <p className='opacity-40 text-sm'>-- or --</p>
                            <p>LOGIN</p>
                        </div>
                    </Link>
                    <p className="hover:text-blue-500 text-xl p-2 text-black"><Link href="/register-login"></Link></p>
                </div>
            </div>
        </header>
    );
}
