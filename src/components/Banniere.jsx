import '../styles/banniere.css';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';


function Banniere(){
    return (
        <div className="banniere">
            <img src={logo} classNAme="img_logo" alt="logo" />
            <h1 className="titre">Bienvenue sur Blogeo</h1>
            <Link to="/"><button className="btn">Accueil</button></Link>
            <Link to="/usercard"><button className="btn">Card</button></Link>
        </div>
    );
}

export default Banniere;
    