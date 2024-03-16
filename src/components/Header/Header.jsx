import { useNavigate, Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {
    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/login');

    }
    return(
        <header className="topNav">
            <nav className="navbar expand-md">
                <div className="container-fluid">
                    <Link className="logo" to="/">
                        <img className="net-logo" src={require('.//netflix-logo.png')} alt='Netflix logo' /> 
                    </Link>
                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <select>
                                <option>English</option>
                                <option>Portugues</option>
                            </select>
                            <button className="btn btn-danger" onClick={clickHandler}>Sigin</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;