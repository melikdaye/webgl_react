class BufferContext{

    constructor() {
        this.buffers = {};
        this.bufferCount = 0;
    }

    getBuffer(bufferType,parentID){
        for (const bufferID in this.buffers) {
            if (this.buffers[bufferID] === parentID){
                return bufferID;
            }
            else{
                this.buffers[this.bufferCount]=
                    {"type":bufferType,
                     "vertices":[],
                     "indices":[],
                     "childBuffers" :[]
                    }

                this.bufferCount+=1;

                return this.bufferCount-1;
            }
        }
    }

}