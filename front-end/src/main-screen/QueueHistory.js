import Table from 'react-bootstrap/Table'

const QueueHistory = (props) => {
    return (
        <>
            <p class="sectionTitleRight" style={{ color: "#ffffff", marginTop: "100px" }}>Queue history</p>
            <Table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <th className="leftQueueHeader">TICKET ID</th>
                    <th className="rightQueueHeader">COUNTER</th>
                </thead>
                <br></br>
                <tbody>
                    {
                        props.listOfTickets.map((ticket) => {
                            return (
                                <>
                                    <tr>
                                        <td style={{ backgroundColor: "#228FF5", borderTop: 'none', borderBottom: 'none' }} className="leftQueueItem">{ticket.ticketCode}</td>
                                        <td style={{ backgroundColor: "#0F5EA8", borderTop: 'none', borderBottom: 'none' }} className="rightQueueItem">{ticket.counterID}</td>
                                    </tr>
                                    <br/>
                                </>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default QueueHistory;