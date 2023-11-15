import '../index.css';

const Navbar2 = () => {

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
        <nav className='sticky top-0 z-10'>
            <div class="nav-title-container">
                <img class="nav-icon" alt="No IMG" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/California_State_University%2C_Fullerton_seal.svg/640px-California_State_University%2C_Fullerton_seal.svg.png" />
                <h1 class="nav-title">
                    Firas Alshami
                </h1>
            </div>
            <div class="nav-element-container">
                <button class="nav-element" onClick={onNavHome}>
                    <p>
                        Home
                    </p>
                </button>
                <button class="nav-element" onClick={onNavAbout}>
                    <p>
                        Skills
                    </p>
                </button>
                <button class="nav-element" onClick={onNavProjects}>
                    <p>
                        Hobbies
                    </p>
                </button>
            </div>
        </nav>
    )
}

export default Navbar2;