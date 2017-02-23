export default class Cache {
    
    id;
    latency;
    size;

    constructor(id, latency, size) {

        this.id = id;
        this.latency = latency;
        this.size = size;
    }
}