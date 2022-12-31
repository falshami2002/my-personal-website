import '../index.css';
import {AiFillHome} from 'react-icons/ai';
import {MdFolderShared} from 'react-icons/md';
import {HiInformationCircle} from 'react-icons/hi2';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
    function onNavHome() {
        document.getElementById('home').scrollIntoView({behavior: 'smooth'});
    }
    
    function onNavAbout() {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    }
    
    function onNavProjects() {
        document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <nav className='fixed right-0 bg-zinc-800 flex justify-around items-center rounded-2xl w-[8%] h-[5vh] mt-5 mr-5'>
            <button onClick={onNavProjects}>
                <MdFolderShared className='navbar-button'/>
            </button>
            <button onClick={onNavAbout}>
                <HiInformationCircle className='navbar-button'/>
            </button>
            <button onClick={onNavHome}>
                <AiFillHome className='navbar-button'/>
            </button>
        </nav>
    );
}

export default Navbar;