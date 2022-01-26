class RenderContext{

    init(gl){
        this.gl = gl;
        this.r = 0;
    }

    clear = (r,g,b,a) => {
        this.gl.clearColor(r,g,b,a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    render = () =>{
        this.clear(this.r,0.0,0.0,1.0);
        window.requestAnimationFrame(this.render);
    }

}

const RC = new RenderContext();
export default RC;