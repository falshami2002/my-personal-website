import '../index.css';
import { DiReact, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiJavascript, SiFirebase, SiTypescript } from 'react-icons/si';

const description1 = ' - This is the second version of my personal website\n\n - I initially created it using some basic HTML, CSS and Javascript\n\n - I recreated this version using ReactJS and TailwindCSS\n\n'+
' - Some components were taken from DaisyUI while the rest of the website was coded from scratch by myself';
const description2 = ' - This is a personal project that I worked on to explore Firebase\n\n - I chose this concept as it combined soccer and web development, two of my passions\n\n'+
' - The app allows users to search for teams and find their schedules\n\n - A user can also add teams to their list. They can then access a schedule of all their teams\' next matches\n\n';
const description3 = ' - This is a group project that a few friends and I are working on\n\n - This is an app that allows users to create movie playlists and share those with other users\n\n'+
' - The app will also provide information on services to watch that specific movie on (Netflix, Hulu, HBO, etc...)\n\n - This is being made using ReactJS and TailwindCSS for the frontend with Firebase for the backend\n\n';

const Projects = () => {
    return (
        <div className='bg-gray-800 h-screen w-screen max-w-full flex flex-col items-center'>
            <div className='h-[25vh] w-[40vw] flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold mb-5 text-white'>My Projects</h1>
            </div>
            <div className='h-[75vh] w-[80vw]'>
                <Carousel/>
            </div>
        </div>
    );
}

const Carousel = () => {
    return (
        <div className="carousel w-full h-[70vh] bg-slate-200 rounded-3xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='flex justify-around items-center w-full h-full bg-slate-100 rounded-3xl'>
                    <div className='flex flex-col w-[35%] h-[90%] items-center mt-[5%]'>
                        <img className='h-[70%] w-auto' src='https://img.icons8.com/fluency/512/resume.png' alt='No Image'/>
                        <div className='h-1/10 text-[3vw] flex items-center justify-evenly w-full'>
                            <DiReact/>
                            <DiHtml5/>
                            <DiCss3/>
                            <SiTailwindcss/>
                            <SiJavascript/>
                        </div>
                        <h1 className='m-[5%] font-bold text-[2vw]'>My Personal Website</h1>
                    </div>
                    <div className='flex flex-col w-[45%] h-[80%] items-center mt-[5%]'>
                        <p className='whitespace-pre-line text-left text-[1.5vw]'>{description1}</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='flex justify-around items-center w-full h-full bg-slate-100 rounded-3xl'>
                    <div className='flex flex-col justify-between w-[35%] h-[90%] items-center mt-[5%]'>
                        <img className='h-[60%] w-auto' src='https://cdn-icons-png.flaticon.com/512/53/53283.png' alt='No Image'/>
                        <div className='h-1/10 text-[3vw] flex items-center justify-evenly w-full'>
                            <DiReact/>
                            <DiHtml5/>
                            <DiCss3/>
                            <SiTailwindcss/>
                            <SiTypescript/>
                            <SiFirebase/>
                        </div>
                        <div className='mb-[5%] font-bold'>
                            <h1 className='text-[2vw]'>Soccer Alert</h1>
                            <h2 className='text-[1vw]'><a href="https://socceralert.vercel.app/">Check out this app</a></h2>
                        </div>
                    </div>
                    <div className='flex flex-col w-[45%] h-[80%] items-center mt-[5%]'>
                        <p className='whitespace-pre-line text-left text-[1.5vw]'>{description2}</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='flex justify-around items-center w-full h-full bg-slate-100 rounded-3xl'>
                    <div className='flex flex-col justify-between w-[35%] h-[90%] items-center mt-[5%]'>
                        <img className='h-[70%] w-auto' src='https://cdn-icons-png.flaticon.com/512/1709/1709973.png' alt='No Image'/>
                        <div className='h-1/10 text-[3vw] flex items-center justify-evenly w-full'>
                            <DiReact/>
                            <DiHtml5/>
                            <DiCss3/>
                            <SiTailwindcss/>
                            <SiJavascript/>
                            <SiFirebase/>
                        </div>
                        <h1 className='mb-[5%] font-bold text-[2vw]'>Movify - In Progress</h1>
                    </div>
                    <div className='flex flex-col w-[45%] h-[80%] items-center mt-[5%]'>
                        <p className='whitespace-pre-line text-left text-[1.5vw]'>{description3}</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;