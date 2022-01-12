import './style.scss';

export default function Navbar ({ navbarIndex, setNavbarIndex }){

    return (
        <nav>
            <div className="title_containter">
                <a href="#Home" className='title'>
                    Garrett Humbert
                </a>
            </div>
            <div className="navbar_container">
                <div className="navbar_content">
                    <div onClick={() => setNavbarIndex(0)} className={navbarIndex === 0 ? 'navbar_button active' : 'navbar_button'}>
                        <a href="#Home">
                            Home
                        </a>  
                    </div>
                    <div onClick={() => setNavbarIndex(1)} className={navbarIndex === 1 ? 'navbar_button active' : 'navbar_button'}>
                        <a href="#About">
                            About
                        </a>                                                    
                    </div>
                    <div onClick={() => setNavbarIndex(2)} className={navbarIndex === 2 ? 'navbar_button active' : 'navbar_button'}>
                        <a href="#Portfolio">
                            Portfolio
                        </a>
                    </div>
                    <div onClick={() => setNavbarIndex(3)} className={navbarIndex === 3 ? 'navbar_button active' : 'navbar_button'}>
                        <a href="#Contact">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
