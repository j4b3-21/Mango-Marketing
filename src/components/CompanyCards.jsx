import React from 'react';

const CompanyCards = ({ logoUrl, altText }) => {
    return (
        <div className="min-w-[150px] h-[100px] bg-transparent ">
            <img src={logoUrl} alt={altText} className="h-12 object-contain" />
        </div>
    );
};

export default CompanyCards;
