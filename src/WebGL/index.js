import React, {useEffect} from "react";
import createContext from "./glContext";
import GLContext from "./glContext";

const WebGL = () =>{

    useEffect( ()=>{

        GLContext("webgl",null);

    },[])

    return(
        <canvas id="webgl" width="400" height="400" style={{border: "1px solid black"}}/>
    )
}
export default WebGL;
