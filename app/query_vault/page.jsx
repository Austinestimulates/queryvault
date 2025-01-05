'use client'

import { useState, useEffect } from 'react';

import DOMPurify from 'dompurify';
import InputForm from '@/components/InputForm';
import FetchedData from '@/components/FetchedData';
// import StoredData  from '@/components/StoredData';
import { getNestedValue } from '@/utils/apiHelpers';

function QueryVault() {

    const [apiUrl, setApiUrl] = useState("");
    const [apiDetails, setApiDetails] = useState("");
    const [output, setOutput] = useState("");
    // const [storedData, setStoredData] = useState([]);

    // useEffect(() => {
    //     const savedData = localStorage.getItem("FetchedData");
    //     if (savedData) {
    //         setStoredData(JSON.parse(savedData));
    //     }
    // }, []);

    const sanitizeInput = (input) => DOMPurify.sanitize(input);
    const fetchApiData = async () => {
        if (!apiUrl || !apiDetails) {
            alert("Please enter both a URL and a details to fetch");
            return;
        }
    
        try {
            setOutput("Loading...");
            const response = await fetch(sanitizeInput(apiUrl));
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();

            const detailsArray = sanitizeInput(apiDetails).split(",").map((item) => item.trim());
            const displayData = detailsArray.map((key) => {
                try {
                    const value = getNestedValue(data, key);
                    return `<p><strong>${key}:</strong>${sanitizeInput(value) ?? "Not Found"}</p>`;
                }catch {
                    return `<p><strong>${key}:</strong>Not Found</p>`;
                }
            });
            
            setOutput(displayData.join(""));

            // const newStoredData = [...storedData, {apiUrl, apiDetails, data: displayData}];

            // setStoredData(newStoredData);

            // localStorage.setItem("fetchedData", JSON.stringify(newStoredData));

        }catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    // const loadStoredData = (index) => {
    //     const selectedData = storedData[index];

    //     setApiUrl(selectedData.apiUrl);
    //     setApiDetails(selectedData.apiDetails);
    //     setOutput(selectedData.data.join(""));
    // };

    return (
        <div className='flex flex-col py-10 w-[80%] mx-auto mt-5'>
            <h1 className=' font-bold text-2xl text-center'><em><strong className='text-[#c85103]'>Q</strong></em>uery <em>V</em>ault</h1>
            <p className=' text-slate-300 text-sm leading-7 text-center tracking-wide'>Interactive API Fetcher</p>

            <InputForm apiUrl={apiUrl}
                setApiUrl={setApiUrl}
                apiDetails={apiDetails}
                setApiDetails={setApiDetails}
                fetchApiData={fetchApiData}
            />
            <FetchedData output={output} />
            {/* <StoredData
                storedData={StoredData}
                loadStoredData={loadStoredData}
            /> */}
        </div>
    )
}

export default QueryVault