import nube from "../assets/nube2.png";

export default function Navbar() {

    return (
        <header className= "fixed w-full bg-blue-950 bg-opacity-20 shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only text-blue-950">Home</span>
                            <img className="h-[50px] w-auto" src={nube} alt="nube" />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm bg-blue-600 px-5 py-3 rounded-md shadow-md ">
                                <li>
                                    <a className="text-white transition hover:text-blue-300" href="#inicio"> Inicio </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-blue-300" href="#ventajas"> Ventajas </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-blue-300" href="#Caracteristicas"> Caracteristicas </a>
                                </li>

                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    )
}