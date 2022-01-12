import './style.scss';

export default function Home({ setNavbarIndex }) {
    return (
        <div className='home' id="home">
            <div className='skewed' />
            <div className="circle_one" />
            <div className="content">
                <div className="text_container">
                    <h1>
                        Hello, my name is
                        <a href="#about" onClick={() => setNavbarIndex(1)}>
                            Garrett.
                        </a>
                    </h1>
                    <p>
                        <a href="#portfolio" onClick={() => setNavbarIndex(2)}>
                            Welcome to my portfolio!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
