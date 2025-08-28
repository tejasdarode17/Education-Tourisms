import React from 'react'

const DateComponent = () => {

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long", // Monday
        year: "numeric", // 2025
        month: "long",   // August
        day: "numeric",  // 19
    });

    return (
        <div>
            <p className="text-xs lg:text-sm text-gray-600 font-bold">{formattedDate}</p>
        </div>

    )
}

export default DateComponent