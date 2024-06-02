export default function Header() {
    return (
        <header className="flex flex-row">
            <div id="container" className="flex flex-row items-center w-full border-b border-gray-200 shadow-md">
                <div className=" bg-blue-300">
                    <a href="#">
                        <p className=" text-white p-8 text-3xl"><b>OCEAN</b>GUARD</p>
                    </a>
                </div>
                <div className="ml-10">
                    <nav>
                        <ul className="flex flex-row space-x-6">
                            <li><a href="#" className="hover:text-blue-500 text-xl">PROJECT</a></li>
                            <li><a href="#" className="hover:text-blue-500 text-xl">MONITOR</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex space-x-5 ml-auto mr-5">
                        <a href="#"><p className=" hover:bg-blue-950 text-white text-xl bg-blue-700 rounded-md p-2">DONATE</p></a>
                        <p className="hover:text-blue-500 text-xl p-2"><a href="#">REGISTER</a></p>
                        <p className="hover:text-blue-500 text-xl p-2"><a href="#">LOGIN</a></p>
                </div>
            </div>
        </header>
    );
}