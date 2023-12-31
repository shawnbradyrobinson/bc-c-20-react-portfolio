export default function About(){
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <img className="w-50 h-80" src='portfolio.jpg'></img>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Shawn Robinson
                        <br></br>
                        ------------------
                        <br className="hidden lg:inline-block" /> Software Developer
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    My name is Shawn Robinson, and I am a software developer based in Kansas City, Missouri. My goal is to create innovative, intuitive applications that have a positive impact on users' lives. 
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact Me</a>
                        <a href="#projects" className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Projects</a>
                    </div>
                </div>
            </div>
        </section>
    );
}