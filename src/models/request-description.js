export default class RequestDescription {
    
    id;
    endpointId;
    numberOfRequests;

    constructor(id, endpointId, numberOfRequests) {

        this.id = id;
        this.endpointId = endpointId;
        this.numberOfRequests = numberOfRequests;
    }
}