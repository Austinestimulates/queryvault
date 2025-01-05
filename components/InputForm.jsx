'use client'
import PropTypes from 'prop-types'
import React from 'react'

const InputForm = ({ apiUrl, setApiUrl, apiDetails, setApiDetails, fetchApiData }) => {
    return (
        <div className=' flex flex-col w-[80%] mt-5 mx-auto justify-center items-center'>
            <div className=' w-full mb-5 mt-4'>
                <label htmlFor="api-url" className='block mb-3'>API Url:</label>
                <input
                    id="api-url"
                    type="text"
                    placeholder="Enter API URL"
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)} 
                    className=' w-full rounded text-sm py-2 px-4 bg-transparent border hover:border-[#c85103] transition-colors delay-200'
                    />
            </div>
            <div className=' w-full mb-5 mt-4'>
                <label htmlFor="api-details" className='block mb-3'>API Details <span className='text-xs text-slate-300'>(comma-separated)</span>:</label>
                <input 
                    id="api-details"
                    type="text"
                    maxLength={50}
                    minLength={3}
                    pattern="^[\w, ]+$"
                    title="API details should be "
                    onChange={(e) => setApiDetails(e.target.value)} 
                    placeholder="Enter API Details. it's comma-separated and contain at least 3 and no more than 50 characters."
                    value={apiDetails} 
                    className=' w-full rounded text-sm py-2 px-4 bg-transparent border hover:border-[#c85103] transition-colors delay-200'
                    />
            </div>
            <div>
                <button onClick={fetchApiData} className=' bg-[#c85103] mb-7 text-white px-4 py-2 rounded-md mt-7'>Query Vault</button>
            </div>
        </div>
    );
    
};

InputForm.propTypes = { 
    apiUrl: PropTypes.string.isRequired,
    setApiUrl: PropTypes.func.isRequired,
    apiDetails: PropTypes.string.isRequired,
    setApiDetails: PropTypes.func.isRequired,
    fetchApiData: PropTypes.func.isRequired,
};

export default InputForm