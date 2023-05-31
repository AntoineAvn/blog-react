import './footer.css'

const Footer = () => {

    const numéro = "06.12.34.56.78"; 
    const site = "https://ecole-ipssi.com/"; 
    const copyright = "all right reserved"; 


    return (
      <div className="footer">
            <p>Numéro de téléphone : {numéro}</p>
            <p>Site web : {site}</p>
            <p>{new Date().getFullYear()} {copyright}</p> 
      </div>
    )
  }
  
  export default Footer