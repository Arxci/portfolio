import './style.scss'

export default function Portfolio() {
    return (
        <div className='portfolio' id="portfolio">
            <div className="container">
                <div className="title">
                    <h1>
                        Projects
                    </h1>
                </div>
                <div className="portfolio_content">
                    <div className="card">
                        <div className="card_title">
                            <h1>
                                Project One
                            </h1>
                        </div>
                        <div className="card_info">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="buttons">
                            <button>
                                Live Site
                            </button>
                            <button>
                                Code
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_title">
                            <h1>
                                Project Two
                            </h1>
                        </div>
                        <div className="card_info">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="buttons">
                            <button>
                                Live Site
                            </button>
                            <button>
                                Code
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_title">
                            <h1>
                                Project Three
                            </h1>
                        </div>
                        <div className="card_info">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="buttons">
                            <button>
                                Live Site
                            </button>
                            <button>
                                Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
