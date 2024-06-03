import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex flex-row">
            <div id="container" className="flex flex-row items-center w-full border-b border-gray-200 shadow-md">
                <div className=" bg-blue-300">
                    <Link href="#">
                        <p className=" text-white p-8 text-3xl"><b>OCEAN</b>GUARD</p>
                    </Link>
                </div>
                <div className="ml-10">
                    <nav>
                        <ul className="flex flex-row space-x-6">
                            <li className="hover:text-blue-500 text-xl"><Link href="/monitor">MONITOR</Link></li>
                            <li className="hover:text-blue-500 text-xl"><Link href="/newsletter">NEWSLETTER</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex space-x-5 ml-auto mr-5">
                    <p className=" hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2"><Link href="/donate">DONATE</Link></p>
                    <p className="hover:text-blue-500 text-xl p-2"><Link href="/register">REGISTER</Link></p>
                    <p className="hover:text-blue-500 text-xl p-2"><Link href="/login">LOGIN</Link></p>
                </div>
            </div>
        </header>
    );
}