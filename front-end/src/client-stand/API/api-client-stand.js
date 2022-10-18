async function getServiceTypes() {
    const response = await fetch(
        'http://se2-queue-backend.germangorodnev.com/service-types',
        {
            method: "GET"
        }
    );
    const serviceTypes = await response.json();
    return serviceTypes.serviceTypes;
}

const API = {getServiceTypes}
export default API