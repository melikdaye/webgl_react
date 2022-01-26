export default class GLContext {

    constructor(id) {
        const canvas = document.querySelector(`#${id}`);
        if(!canvas){
            return
        }
        this.glContext = canvas.getContext("webgl");
        if(!this.glContext){
            return;
        }
        this.glVerticesBuffers = {};
        this.glIndicesBuffers  = {};
    }

    addArrayBuffer = (bufferID) => {
        this.glVerticesBuffers[bufferID]=this.glContext.createBuffer();
    };

    addElementBuffer = (bufferID) => {
        this.glIndicesBuffers[bufferID]=this.glContext.createBuffer();
    };

    addVerticesToBuffer = (bufferID,vertices) =>{
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER,this.glVerticesBuffers[bufferID]);
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER,new Float32Array(vertices),this.glContext.STATIC_DRAW);
    }

    addIndicesToBuffer = (bufferID,indices) =>{
        this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER,this.glVerticesBuffers[bufferID]);
        this.glContext.bufferData(this.glContext.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),this.glContext.STATIC_DRAW);
    }


}