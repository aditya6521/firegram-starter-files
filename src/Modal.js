import { motion } from "framer-motion";
import React from "react";


const Modal=({selectedImage, setSelectedImage})=>{

    const handleclick=(e)=>{
        if(e.target.classList.contains("backdrop")){
        setSelectedImage(null);
        }
    }


    return(
        <motion.div className="backdrop" onClick={handleclick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <motion.img src={selectedImage} alt="zoom pic"
            initial={{x:"-100vh"}}
            animate={{x:0}}/>
        </motion.div>
    )
}

export default Modal;
