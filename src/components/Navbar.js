import '../index.css';
import { AiFillHome } from 'react-icons/ai';
import { MdFolderShared } from 'react-icons/md';
import { HiInformationCircle } from 'react-icons/hi2';
import Resume from '../files/08-Ballistic_Pendulum_Calculations_and_Results.docx.pdf';

const Navbar = () => {
    function onNavHome() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }

    function onNavAbout() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }

    function onNavProjects() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className='fixed right-0 bg-zinc-800 flex flex-col justify-around items-center rounded-2xl w-[8%] h-[10vh] mt-5 mr-5'>
            <div className='w-full flex justify-around mt-2'>
                <button onClick={onNavProjects}>
                    <MdFolderShared className='navbar-button' />
                </button>
                <button onClick={onNavAbout}>
                    <HiInformationCircle className='navbar-button' />
                </button>
                <button onClick={onNavHome}>
                    <AiFillHome className='navbar-button' />
                </button>
            </div>
            <hr className='text-white w-full'></hr>
            <a href={Resume} target='_blank' rel='noreferrer'>
                <h1 className='mb-2 text-white text-xl cursor-pointer hover:text-blue-500 transition-all duration-300'>Resume PDF</h1>
            </a>
        </nav>
    );
}

export default Navbar;