import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import QueueItem from './QueueItem'
import Table from 'react-bootstrap/Table'

const QueueHistory = (props) => {
    return (
        <>
            <p class="sectionTitleRight" style={{ color: "#ffffff", marginTop: "100px" }}>Queue history</p>
            <Table style={{borderCollapse: 'collapse'}}>
                <thead>
                    <th className="leftQueueHeader">TICKET ID</th>
                    <th className="rightQueueHeader">COUNTER</th>
                </thead>
                <br></br>
                <tbody>
                    <tr>
                        <td style={{backgroundColor: "#228FF5", borderTop: 'none', borderBottom: 'none'}} className="leftQueueItem">A014</td>
                        <td style={{backgroundColor: "#0F5EA8", borderTop: 'none', borderBottom: 'none'}} className="rightQueueItem">C#1</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td style={{backgroundColor: "#228FF5", borderTop: 'none', borderBottom: 'none'}} className="leftQueueItem">B011</td>
                        <td style={{backgroundColor: "#0F5EA8", borderTop: 'none', borderBottom: 'none'}} className="rightQueueItem">C#3</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td style={{backgroundColor: "#228FF5", borderTop: 'none', borderBottom: 'none'}} className="leftQueueItem">A220</td>
                        <td style={{backgroundColor: "#0F5EA8", borderTop: 'none', borderBottom: 'none'}} className="rightQueueItem">C#1</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td style={{backgroundColor: "#228FF5", borderTop: 'none', borderBottom: 'none'}} className="leftQueueItem">C014</td>
                        <td style={{backgroundColor: "#0F5EA8", borderTop: 'none', borderBottom: 'none'}} className="rightQueueItem">C#2</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td style={{backgroundColor: "#228FF5", borderTop: 'none', borderBottom: 'none'}} className="leftQueueItem">A001</td>
                        <td style={{backgroundColor: "#0F5EA8", borderTop: 'none', borderBottom: 'none'}} className="rightQueueItem">C#2</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default QueueHistory;