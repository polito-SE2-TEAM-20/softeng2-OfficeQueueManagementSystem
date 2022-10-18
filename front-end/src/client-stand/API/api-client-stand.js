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
    const response = await fetch(
        'http://se2-queue-backend.germangorodnev.com/ticketsCount',
        {
            method: "GET"
        }
    )

    const nextIndex = (await response.json().tickets.lenght) + 1
    const ticket = {
        serviceCode: serviceCode
    }

    await fetch('http://se2-queue-backend.germangorodnev.com/issueTicket', {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(ticket)
    })
}

const API = { getServiceTypes, issueNewTicket }
export default API