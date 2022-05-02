import React, { useContext, useEffect } from 'react';
import Menubar from "./Menubar";
import HistoryItemContext from '../../context/HistoryItemContext';
import HistoryItem from './HistoryItem';

function PreviousHistory() {

    // const [historyItem, sethistoryItem] = useState({});
    const context = useContext(HistoryItemContext);
    const { histories, getHistory } = context;
    useEffect(() => {
        getHistory()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <div className=" MainBody border d-flex rounded-3 shadow-lg border-dark  " style={{ "height": "80vh", "width": "140vh" }}>
                <Menubar />
                <div className="p-2" style={{ "width": "100%" }}>
                    <div className="row">
                        <div className="col" >
                            <h2 className="text-center py-4">History</h2>
                            <div className="table-responsive-sm">

                                {
                                    histories.history !== undefined && histories.history.length === 0 && <h6 className='text-center'> No previous records</h6>
                                }
                                {
                                    histories.history !== undefined && histories.history.length !== 0 &&
                                    <>
                                        <table className="table table-hover table-sm table-striped table-condensed table-bordered">
                                            <thead style={{ "color": "white" }}>
                                                <tr className='bg-secondary'>
                                                    <th scope="col" className="text-center py-2">Sr.No</th>
                                                    {/* <th scope="col" className="text-center py-2">Date</th> */}
                                                    <th scope="col" className="text-center py-2">Patient Image</th>
                                                    {/* <th scope="col" className="text-center py-2">Gender</th> */}
                                                    <th scope="col" className="text-center py-2">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    histories.history.map((historyItem) => {
                                                        return <HistoryItem key={historyItem._id} historyItem={historyItem} index={histories.history.indexOf(historyItem)} />
                                                    })
                                                }
                                                {/* <tr>
                                            <td className="text-center py-2">2</td>
                                            <td className="text-center py-2">2/20/2021</td>
                                            <td className="text-center py-2">
                                                <img src={picture} alt='' /></td>
                                            <td className="text-center py-2">Female</td>
                                            <td className="text-center py-2">Not ASD</td>
                                        </tr> */}
                                            </tbody>
                                        </table>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviousHistory;
