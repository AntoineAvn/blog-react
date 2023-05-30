import Banniere from "./Banniere";
import logo from '../assets/images/logo.svg';


function App() {
  return(
    <Banniere>
      <img src={logo} className='img_logo' alt="logo" />
      <h1 className='titre'>Bienvenue sur Blogeo</h1>
    </Banniere>
  )

}

export default App;  