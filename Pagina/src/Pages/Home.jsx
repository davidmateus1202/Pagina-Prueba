
import Footer from "../Componenets/Footer";
import meet from "../assets/meet.png";
import Navbar from "../Componenets/Navbar";
import { motion } from "framer-motion";
import virtual from "../assets/virtual.png";
import server from "../assets/server.png";
import dataImage from "../assets/data.png";
import { información } from "../service/data";
import { CardBlog } from "../Componenets/CardBlog";


export default function Home() {

    const carouselBlogs = [...información, ...información];
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-auto w-full bg-slate-100 px-5 xl:px-56 items-center justify-center">


                <section id="inicio" className="flex flex-row h-[500px] w-full bg-gradient-to-tr from-[#4373ee] to-[#1a2151] items-center justify-center  shadow-xl">

                    <h1 className="text-white font-semibold text-sm  xl:text-3xl">
                        Arquitectura de la nube y modelos de servicio
                    </h1>
                    <img src={meet} className="w-auto h-[40%] xl:h-[70%] " />
                </section>

                <section id="ventajas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-[500px] items-center justify-center px-10 overflow-y-auto">
                    <div className="flex flex-col w-auto h-full items-center justify-center gap-y-5">
                        <img src={virtual} width={'100px'} />
                        <p className="font-extralight px-5 text-justify">
                            Proporciona a los usuarios recursos virtualizados, como máquinas virtuales, almacenamiento y redes. El usuario tiene control sobre el sistema operativo y las aplicaciones, pero no sobre la infraestructura física subyacente.
                        </p>
                    </div>

                    <div className="flex flex-col w-auto h-full items-center justify-center gap-y-5">
                        <img src={server} width={'90px'} />
                        <p className="font-extralight px-5 text-justify">
                            Ofrece un entorno de desarrollo preconfigurado que permite a los desarrolladores crear, ejecutar y gestionar aplicaciones sin preocuparse por la gestión de la infraestructura. Los usuarios controlan las aplicaciones y los datos, pero no la infraestructura subyacente.
                        </p>
                    </div>

                    <div className="flex flex-col w-auto h-full items-center justify-center gap-y-5">
                        <img src={dataImage} width={'90px'} />
                        <p className="font-extralight px-5 text-justify">
                            Es un tipo de nube que se comparte entre varias organizaciones con intereses comunes. Permite a los usuarios beneficiarse de un entorno colaborativo en el que los recursos y servicios se comparten de manera segura entre los participantes.
                        </p>
                    </div>
                </section>

                <h1 id="Caracteristicas" className="text-3xl font-extralight mb-10 text-gray-400">🗄️ Información a destacar</h1>

                <div  className='container my-5'>
				<div className='overflow-hidden w-full h-[500px]'>
					<div className='flex whitespace-nowrap animate-scroll'>
						{carouselBlogs.map((blog, index) => (
							<CardBlog blog={blog} key={index} />
						))}
					</div>
				</div>
			</div>




                <Footer />
            </motion.div>
        </>
    );
}
