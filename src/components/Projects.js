import '../index.css';

const description1 = ' - This is the second version of my personal website\n\n - I initially created it using some basic HTML, CSS and Javascript\n\n - I recreated this version using ReactJS and TailwindCSS\n\n'+
' - Some components were taken from DaisyUI while the rest of the website was coded from scratch by myself';
const description2 = ' - This is a group project that a few friends and I are working on\n\n - This is an app that allows users to create movie playlists and share those with other users\n\n'+
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
                        <img className='h-[80%] w-auto' src='https://img.icons8.com/fluency/512/resume.png' alt='No Image'/>
                        <h1 className='m-[5%] font-bold text-[2vw]'>My Personal Website</h1>
                    </div>
                    <div className='flex flex-col w-[45%] h-[80%] items-center mt-[5%]'>
                        <p className='text-4xl whitespace-pre-line text-left text-[1.5vw]'>{description1}</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='flex justify-around items-center w-full h-full bg-slate-100 rounded-3xl'>
                    <div className='flex flex-col w-[35%] h-[90%] items-center mt-[5%]'>
                        <img className='h-[80%] w-auto' src='https://cdn-icons-png.flaticon.com/512/1709/1709973.png' alt='No Image'/>
                        <h1 className='m-[5%] font-bold text-[2vw]'>Moviefy - In Progress</h1>
                    </div>
                    <div className='flex flex-col w-[45%] h-[80%] items-center mt-[5%]'>
                        <p className='text-4xl whitespace-pre-line text-left text-[1.5vw]'>{description2}</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;