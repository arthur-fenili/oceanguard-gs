import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex flex-row">
            <div id="container" className="flex flex-row items-center w-full border-b border-gray-200 shadow-md bg-white">
                <div className=" bg-blue-300">
                    <Link href="/">
                        <p className=" text-white p-8 text-3xl"><b>OCEAN</b>GUARD</p>
                    </Link>
                </div>
                <div className="ml-10">
                    <nav>
                        <ul className="flex flex-row space-x-6">
                            <li className="hover:text-blue-500 text-xl text-black"><Link href="/monitor">MONITOR</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex space-x-7 ml-auto mr-5 items-center">
                    <p className="hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2 "><Link href="/donate">DONATE</Link></p>
                    <Link href="/register-login">
                        <div className="flex flex-col items-center hover:text-blue-500">
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