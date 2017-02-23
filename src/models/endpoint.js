export default class Endpoint {
    
    caches = [];
    datacenterLatency;
    id;
    latency;

    constructor(id, datacenterLatency, latency) {

    	this.id = id;
        this.datacenterLatency = datacenterLatency;
        this.latency = latency;
    }

}