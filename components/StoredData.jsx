// 'use client'
// import PropTypes from 'prop-types';


// const StoredData = ({ storedData, loadStoredData }) => {
//     return (
//         <div>
//             <h2 className=' text-lg font-bold mb-2'>Stored Data</h2>
//             <p className='text-sm text-slate-300'>This is where you can view your stored data.</p>
//             <div>
//                 {storedData.length > 0 && storedData.map((data, index) => (
//                         <div key={index}> 
//                             <button onClick={() => loadStoredData(index)} className=''>
//                                 Load Data #{index + 1}
//                             </button>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// // Add PropTypes for stored data
// StoredData.PropTypes = {
//     storedData: PropTypes.arrayOf(PropTypes.shape({
//         apiUrl: PropTypes.string.isRequired,
//         apiDetails: PropTypes.string.isRequired,
//         data: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//     ).isRequired,
//     loadStoredData: PropTypes.func.isRequired,
// };

// export default StoredData;
