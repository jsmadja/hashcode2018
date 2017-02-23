export default class Cache {
    
    id;
    size;
    endpointInfos = [];

    constructor(id, size) {

        this.id = id;
        this.size = size;
    }
}