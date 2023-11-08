import Table from 'react-bootstrap/Table';

const BudgetTable = () => {
    return (
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1000</td>
                    <td>Expense</td>
                    <td>Fun</td>
                    <td>01.09.2023</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2000</td>
                    <td>Income</td>
                    <td>ther</td>
                    <td>02.09.2023</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>1000</td>
                    <td>Expense</td>
                    <td>Groceries</td>
                    <td>12.10.2023</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>4000</td>
                    <td>Expense</td>
                    <td>House REnt</td>
                    <td>01.01.2024</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default BudgetTable;