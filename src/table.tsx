function Table() {
    return (
        <>
            Here are some of my past stats:
            <table>
                <tr>
                    <th>Date</th>
                    <th>Speed (pps)</th>
                    <th>Ranking (glicko)</th>
                </tr>
                <tr>
                    <td>03/11/2021</td>
                    <td>1.00</td>
                    <td>1416.57</td>
                </tr>
                <tr>
                    <td>03/29/2022</td>
                    <td>1.78</td>
                    <td>2082.54</td>
                </tr>
                <tr>
                    <td>03/20/2024</td>
                    <td>2.19</td>
                    <td>2449.21</td>
                </tr>
            </table>

            <div>
                <h2 className="header"> Running Log </h2>
                <table>
                    <tr color={"#f5f5dc"}>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Weather</th>
                        <th>Miles</th>
                    </tr>

                    <tr color={"#f0ffff"}>
                        <th> March 12</th>
                        <th> Morning</th>
                        <th> Sunny</th>
                        <th> 3.2 miles</th>
                    </tr>

                    <tr color={"#f0ffff"}>
                        <th> March 15</th>
                        <th> Afternoon</th>
                        <th> Tornado</th>
                        <th> 10.1 miles</th>
                    </tr>

                    <tr color={"#f0ffff"}>
                        <th> March 20</th>
                        <th> Morning</th>
                        <th> Huricane</th>
                        <th> 3.5 miles</th>
                    </tr>

                    <tr color={"#f0ffff"}>
                        <th> May 20</th>
                        <th> Afternoon</th>
                        <th> Avalanche</th>
                        <th> 1.5 miles</th>
                    </tr>

                </table>
            </div>


        </>
    )
}

export default Table;
