import React, { useState } from "react";

const Uploadform = ()=> {

    const [file,setFile] = useState(null);


    function changeHandler(e){
        let selected=e.target.files[0];
        
        if(selected){
            setFile(selected);
        }
    };

    return(

        <form>
            <input type="file" onChange={changeHandler}/>
        </form>

    )
}

export default Uploadform;
