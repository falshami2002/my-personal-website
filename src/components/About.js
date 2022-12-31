import '../index.css';
import Skills from './Skills';

const About = () => {
    return (
        <div className='h-screen w-screen max-w-full bg-gray-300'>
            <div className="hero bg-gray-300 flex flex-col justify-start items-center h-[25vh]">
                <div className="hero-content text-center h-[25vh] w-[50vw]">
                    <div className="w-[30vw]">
                        <h1 className="text-5xl font-bold mb-5">About Me</h1>
                        <div className='flex justify-between'>
                            <p className="py-6 w-1/2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p className='py-6 w-1/2'>Stuff STUFF STUFF STUFF STUFF STUFF</p>
                        </div>
                    </div>
                </div>
            </div>
            <Skills/>
        </div>
    );
}

export default About;