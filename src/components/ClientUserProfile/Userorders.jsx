
import "../ClientUserProfile/Userorders.css";



const YourOrders = () => {
    const data = [
        {
            id: 112345,
            date: '03/106/2024',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 112346,
            date: '04/06/2024',
            status: 'On the way',
            total: 1600
        },
        {
            id: 112347,
            date: '12/07/2024',
            status: 'Delivered',
            total: 2000
        },
        {
            id: 112348,
            date: '17/07/2024',
            status: 'Cancelled',
            total: 100
        },
        // Assuming data is static for now
    ];

    // const [selectedOrderId, setSelectedOrderId] = useState(null);
    // const [orderSuccessCont, setOrderSuccessCont] = useRecoilState(orderSuccessfulProvider);

    return (
        <div className='yourorders'>
            <h1 className='mainhead1'>Your Orders</h1>
            {/* {orderSuccessCont && <OrderSuccessful orderid={selectedOrderId} message={`Order ID: ${selectedOrderId}`} />} */}
            <table className='yourorderstable'>
                <thead>
                    <tr>
                        <th scope='col'>Order ID</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Total</th>
                        <th scope='col'>Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td data-label='OrderID'>{item.id}</td>
                            <td data-label='OrderDate'>{item.date}</td>
                            <td data-label='Delivery Status'>
                                <div>
                                    {item.status === 'Delivered' && <span className='greendot'></span>}
                                    {item.status === 'On the way' && <span className='yellowdot'></span>}
                                    {item.status === 'Cancelled' && <span className='reddot'></span>}
                                    {item.status}
                                </div>
                            </td>
                            <td data-label='Total'>${item.total}</td>
                            <td data-label='Invoice'>
                                <button
                                    className='mainbutton1'
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default YourOrders;
