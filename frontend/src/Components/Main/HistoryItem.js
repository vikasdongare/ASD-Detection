import React from 'react';

function HistoryItem (props)  {

  const { index, historyItem } = props;

  return (
    <>
    <tr>
      <td className="text-center py-2">{index+1}</td>
      <td className="text-center py-2">{historyItem.date}</td>
      <td className="text-center py-2">
        <img className='rounded' style={{"maxWidth":"20%"}} src={historyItem.imagelink} alt='img'/></td>
      {/* <td className="text-center py-2">Female</td> */}
      <td className="text-center py-2">{historyItem.report}</td>
      </tr>
    </>
  );
}

export default HistoryItem;
