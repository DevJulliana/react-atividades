import React, {useState} from "react";
import '../App.css'

export default function HelloWorld (){
    const [mensagem, setMensagem] = useState("");

    const alterarMensagem = (e) =>{
        setMensagem(e.target.value);
    };

return (
    <div className="function">
       <input value ={mensagem} onChange = {alterarMensagem}/>
       <br />  <br />
       <p> Você escreveu: {mensagem}</p>
    </div>
   
)
}

