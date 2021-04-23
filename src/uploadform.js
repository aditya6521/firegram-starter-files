import React, { useState } from "react";
import ProgressBar from "./progressbar";
 


const Uploadform = ()=> {

    const [file,setFile] = useState(null);
    const [error,setError]= useState(null);

    const types=["image/png","image/jpeg"];


    function changeHandler(e){
        let selected=e.target.files[0];
        console.log(selected);
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("");
        } 
        else {
            setFile(null);
            console.log("only jpeg and png files");
            setError("only jpeg and png files");
        }
    };

    return(

        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            </label>
            <div className="output">
                {error && <div className="error"> {error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
                
            </div>
        </form>

    )
}

export default Uploadform;
