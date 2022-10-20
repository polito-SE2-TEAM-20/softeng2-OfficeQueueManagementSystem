const APIURL = 'http://se2-queue-backend.germangorodnev.com/';


async function declareAvailability(counterId) {
    const response = await fetch(( APIURL + 'queues/nextInTheQueue/'), {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({counter: counterId})
    })
    if (response.ok) {
        const nextTicketQueue = await response.json();
        return nextTicketQueue.nextInTheQueue;
      } else {
        const errDetail = await response.json();
        throw errDetail.message;
      }
}

const API ={declareAvailability};
export default API;

