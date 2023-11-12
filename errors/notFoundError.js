class ResourceNotFoundError extends Error {
    constructor(resourceType, resourceID) {
        super (`resource ID ${resourceID} not found under ${resourceType}s`);
        this.name = 'ResourceNotFound';    
    }
}

export default ResourceNotFoundError;