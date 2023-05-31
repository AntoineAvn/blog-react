import '../styles/formBlog.css'
import { useState } from 'react'

function valider (e) {
    e.preventDefault();
    // console.log("valider");
    alert(e.target['mon_nom'].value);
}

function FormBlog(){

    const [input_email, setInputEmail] = useState('');
    const [input_name, setInputName] = useState('');
    const [input_commentaire, setInputCommentaire] = useState('');

    let InputErrorNumber = input_email.includes("@");

    return (
        <form className="form" onSubmit={valider}>
            <input type="text" name="mon_email" placeholder="Email" onChange={(e)=> setInputEmail(e.target.value)}/>
            <input type="text" name="mon_nom" placeholder="Nom" onChange={(e)=> setInputName(e.target.value)}/>
            <input type="text" name="mon_commentaire" placeholder="Commentaire" onChange={(e)=> setInputCommentaire(e.target.value)}/>
            { InputErrorNumber ?

                <button type='submit' onClick={()=> alert(input_email + " " + input_name + " " + input_commentaire)}>Valider votre commentaire</button>
                :
                <div>
                    <p className="error">L'email doit contenir un "@"</p>
                </div>
            }
        </form>
    );
}

export default FormBlog;