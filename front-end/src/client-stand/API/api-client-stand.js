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

async function issueNewTicket(serviceCode) {
    const response = await fetch('http://se2-queue-backend.germangorodnev.com/queues/newTicket', {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({service:serviceCode})
    })
}

const API = { getServiceTypes, issueNewTicket }
export default API