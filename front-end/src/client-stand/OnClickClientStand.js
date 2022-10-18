export async function onClickWrapper(serviceCode) {
    let response = await fetch(
        '/clientAPI/issueNewTicket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({serviceCode})
        }
    );
}