async function getLastFiveTickets() {
    const response = await fetch(
        'http://se2-queue-backend.germangorodnev.com/queues/lastFiveTickets',
        {
            method: "GET"
        }
    );
    const lastFiveTickets = await response.json();
    return lastFiveTickets;
}