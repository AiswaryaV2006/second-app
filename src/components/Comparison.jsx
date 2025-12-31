function Comparison() {
    return (
        <section className="comparison">
            <h2>plan comparison</h2>
            <table>
                <tr>
                    <th>Features</th>
                    <th>Basic</th>
                    <th>Pro</th>
                    <th>Enterprice</th>
                </tr>
                <tr>
                    <td>Users</td>  
                    <td>1</td>
                    <td>up to 5</td>
                    <td>unlimited</td>
                </tr>
                <tr>
                    <td>Storage</td>  
                    <td>5GB</td>
                    <td>50GB</td>
                    <td>200GB</td>
                </tr>
                <tr>
                    <td>Support</td>  
                    <td>Email support</td>
                    <td>Priority email support</td>
                    <td>24/7 phone support</td>
                </tr>
            </table>
        </section>
    );
}
export default Comparison;

