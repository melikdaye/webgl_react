export default class shaderEngine {
    constructor(gl,vertexSource,fragmentSource){
        this.gl = gl;
        const vertexShader = this.compileShader("VERTEX_SHADER",vertexSource);
        const fragmentShader = this.compileShader("FRAGMENT_SHADER",fragmentSource);
        this.program = this.attachShaders(vertexShader,fragmentShader);

    }

    compileShader = (shaderType,source) =>{
        let shader = this.gl.createShader(this.gl`.${shaderType}`);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        this.compileStatus(shader);
        return shader;
    }

    attachShaders = (vertex,fragment) =>{
        let program = this.gl.createProgram();
        this.gl.attachShader(program, vertex);
        this.gl.attachShader(program, fragment);
        this.gl.linkProgram(program);
        return program;
    }


    compileStatus = (shader) => {
        if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error(this.gl.getShaderInfoLog(shader));
        }
    }

    createAttributes = (attributes) =>{
        const totalStride = Object.values(attributes).reduce((a,b)=>a+b);
        let stride = 0;
        for (const attributesKey in attributes) {
            if(attributes[attributesKey]<=4) {
                let attribute = this.gl.getAttribLocation(this.program, attributesKey);
                this.gl.enableVertexAttribArray(attribute);
                this.gl.vertexAttribPointer(attribute, attributes[attributesKey], this.gl.FLOAT, false, totalStride, stride,);
                stride += attributes[attributesKey];
            }
            else{
                for (let i = 0; i < attributes[attributesKey]; i+=4) {
                    let attribute = this.gl.getAttribLocation(this.program, attributesKey+(i/4));
                    this.gl.enableVertexAttribArray(attribute);
                    let size = (attributes[attributesKey]-i%4)?attributes[attributesKey]-i%4:4;
                    this.gl.vertexAttribPointer(attribute,size, this.gl.FLOAT, false, totalStride, stride);
                    stride += size;
                }
            }
        }

    }

    setUniform = (data,uniformString,type) => {
        this.gl.useProgram(this.program);
        let location = this.gl.getUniformLocation(this.program, uniformString);
        switch (type) {
            case "mat4":
                this.gl.uniformMatrix4fv(location,data)
                break;
            default:
                break;
        }
    }


}