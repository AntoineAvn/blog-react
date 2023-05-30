import '../styles/formBlog.css'
import { useState } from 'react'

function valider (e) {
    e.preventDefault();
    // console.log("valider");
    alert(e.target['mon_nom'].value);
}

function FormBlog(){

    const [input_name, setInputName] = useState('');
    const [input_commentaire, setInputCommentaire] = useState('');

    let InputErrorNumber = input_name.includes("_");

    return (
        <form className="form" onSubmit={valider}>
            <input type="text" name="mon_nom" onChange={(e)=> setInputName(e.target.value)}/>
            <input type="text" name="mon_commentaire" onChange={(e)=> setInputCommentaire(e.target.value)}/>
            {/* <button type='submit' onClick={()=> alert(input_name + " " + input_commentaire)}>Valider votre commentaire</button> */}
            { InputErrorNumber ?
                <div>
                    <p className="error">Le nom ne doit pas contenir de "_"</p>
                </div>
                :
                <button type='submit' onClick={()=> alert(input_name + " " + input_commentaire)}>Valider votre commentaire</button>
            }
        </form>
    );
}

export default FormBlog;