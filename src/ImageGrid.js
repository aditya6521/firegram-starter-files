import React from "react";
import useFirestore from "./hooks/useFirestore";



const ImageGrid=()=>{
    const {docs}=useFirestore("images");
    console.log(docs);


    return(
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <div className="imp-wrap" key={doc.id}>
                    <img className="imgg" src={doc.url} all="uploaded pic"/>
                    </div>
            ))}
        </div>
    )
}

export default ImageGrid;