import './banniere.css';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';


function Banniere(){
    return (
        <div className="banniere">
            <div>
                <img src={logo} className="img_logo" alt="logo" />
                <h1 className="titre">Bienvenue sur Blogeo</h1>
            </div>
            <div>
                <Link to="/"><button className="btn">Accueil</button></Link>
                <Link to="/usercard"><button className="btn">Card</button></Link>
                <Link to="/form"><button className="btn">Form</button></Link>
            </div>
        </div>
    );
}

export default Banniere;
    