import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

const Home = () => {
    return (
        <div className="container1">
            <nav className='navbar navbar-expand-lg'>
                <div className='nav-container'>
                    <a className="navbar-brand" href="/">
                        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix" />
                    </a>

                    <div className="navbtn" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="opt nav-item active" >

                                <select>
                                    <option value="english">English</option>
                                    <option value="chinese">中文</option>
                                </select>
                            </li>
                            <li className="signin">
                                <button className="btn btn-danger">Sign In</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className='container'>
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                <form action="#">
                    <input type="text" placeholder="Email address" />
                    <input type="submit" value="Get Started" ></input>
                </form>
            </div>

        </div>
    );
};

export default Home;