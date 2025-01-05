'use client'

import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const FetchedData = ( {output} ) => {
  return (
    <div className="flex flex-col justify-start items-start mt-7">
        <h2 className="text-lg font-bold mb-2">Fetched Data</h2>
        <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(output)}}  className=" flex flex-col p-4 mr-3 rouneded px-2 mb-2 py-3"/>
    </div>
  );
};

FetchedData.PropTypes = {
  output: PropTypes.string.isRequired,
};


export default FetchedData;