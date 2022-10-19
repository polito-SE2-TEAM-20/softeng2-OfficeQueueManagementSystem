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
    });
    if (response.ok) {
      const newT = await response.json();
      return newT;
    } else {
      const errDetail = await response.json();
      throw errDetail.message;
    }
}

const API = { getServiceTypes, issueNewTicket }
export default API