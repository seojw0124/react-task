import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + '/GDSCLogoClear.png'} height={60}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                     to="/introduce"
                                     activeClassName="active"
                            >
                                소개
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                     to="/joinus"
                                     activeClassName="active"
                            >
                                지원하기
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                     to="/conduct"
                                     activeClassName="active"
                            >
                                Code of Conduct
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                     to="/question"
                                     activeClassName="active"
                            >
                                자주하는 질문
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;