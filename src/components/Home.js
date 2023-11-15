import '../index.css';
import {HiChevronDoubleDown} from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Home = () => {
    const [ref, inView, entry] = useInView({
        threshold: 1
    })

    return(
        <div ref={ref} className='h-screen w-screen max-w-full bg-gray-900 flex flex-col items-center justify-center' style={{backgroundImage: 'url("https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp")',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
        }}>
            <h1 className='text-7xl text-white font-mono font-bold'>Firas Alshami</h1>
            <h2 className='text-3xl text-white font-serif font-thin'>Computer Science Student</h2>
            <div className='flex'>
                <a href='https://github.com/falshami2002' target='_blank' rel='noreferrer'>
                    <AiFillGithub className='text-3xl text-white mt-5 hover:text-black transition-colors duration-300 cursor-pointer mr-2 ml-2'/>
                </a>
                <a href='https://www.linkedin.com/in/firas-alshami-b8959a260/' target='_blank' rel='noreferrer'>
                    <AiFillLinkedin className='text-3xl text-white mt-5 hover:text-black transition-colors duration-300 cursor-pointer mr-2 ml-2'/>
                </a>
            </div>
            <button className={'absolute bottom-0 mb-10 rounded-full bg-white animate-bounce transition-opacity duration-300'+(inView ? '' : ' opacity-0')} onClick={onClickScroll}>
                <HiChevronDoubleDown className='text-5xl'/>
            </button>
        </div>
    );
}

function onClickScroll() {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'})
}

export default Home;
