"use client"
import React, { useState, useEffect } from 'react'
function SlotsTable(props:any) {
    const [clicked, setClicked] = useState(false);
    

    const handleSlotClick = () => {
        setClicked(true);
    }
    const slots = props.slotsData;
    console.log("slots>>>>>>>>>>", slots[0].node);

    return (
        <table className="w-full leading-normal text-black">
            <thead>
                <tr>
                    <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                        Tutor
                    </th>
                    <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                        Language
                    </th>
                    <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                        Start time
                    </th>
                    <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                        End time
                    </th>
                    <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    />
                </tr>
            </thead>
            <tbody className="text-black">
                {slots && 
                    slots.map((slot:any) => {
                        return <tr key={slot?.tutor?.node?.id} className={`border-b border-gray-200 p-5 text-sm focus:bg-gray-500`}
                        >
                        <td className="border-b border- gray-200 p-5 text-sm ">
                            <div className="flex items-center">
                                <div className="ml-3">
                                    <p className="whitespace-nowrap">{slot?.tutor?.node?.name}</p>
                                </div>
                            </div>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <p className="whitespace-nowrap">{slot?.tutor?.node?.language}</p>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <p className="whitespace-nowrap">{slot?.node?.startTime}</p>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <p className="whitespace-nowrap">{slot?.node?.endTime}</p>
                        </td>
                        {/* <td className="border-b border-gray-200 p-5 text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                                />
                                <span className="relative">{slot.node.available === true? "available": "not available"}</span>
                            </span>
                        </td> */}
                    </tr>
                    })
                    
                }
            </tbody>
        </table>
    )
}

export default SlotsTable