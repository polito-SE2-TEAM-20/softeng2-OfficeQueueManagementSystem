async function getLastFiveTickets() {
    const response = await fetch(
        'http://se2-queue-backend.germangorodnev.com/main-screen',
        {
            method: "GET"
        }
    );
    const lastFiveTickets = await response.json();
    console.log(lastFiveTickets)
    return lastFiveTickets;
}

const API = {getLastFiveTickets};
export default API;