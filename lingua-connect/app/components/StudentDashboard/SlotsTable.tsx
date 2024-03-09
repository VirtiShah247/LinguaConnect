"use client"
import React, { useState, useEffect } from 'react'
function SlotsTable(props:any) {
    const [clicked, setClicked] = useState(false);
    // const [slots, setSlots] = useState([
    //     {
    //         "user": "Jean marc",
    //         "startTime": "10:00am",
    //         "endTime": "11:00am",
    //         "status": "available"
    //     },
    //     {
    //         "user": "Marcus coco",
    //         "startTime": "11:00am",
    //         "endTime": "12:00pm",
    //         "status": "not available"
    //     },
    //     {
    //         "user": "Eric marc",
    //         "startTime": "12:00pm",
    //         "endTime": "1:00pm",
    //         "status": "not available"
    //     },
    //     {
    //         "user": "Julien Huger",
    //         "startTime": "1:00pm",
    //         "endTime": "2:00am",
    //         "status": "available"
    //     },
    // ]);

    const handleSlotClick = () => {
        setClicked(true);
    }
    const slots = props.slotsData;
    console.log("slots are>>>>>>>>>>>>>>>>>>>>",slots);
    return (
        <table className="w-full leading-normal text-black">
            <thead>
                <tr>
                    <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                        User
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
                    >
                        Status
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
                        return <tr key={slot.node.tutor.id} className={`border-b border-gray-200 p-5 text-sm focus:bg-gray-500 ${slot.status !== 'available' ? 'cursor-not-allowed' : 'cursor-grab'}`}
                        onClick={() => { if (slot.status === 'available') handleSlotClick(); }}>
                        <td className="border-b border-gray-200 p-5 text-sm ">
                            <div className="flex items-center">
                                <div className="ml-3">
                                    <p className="whitespace-nowrap">{slot.node.tutor.name}</p>
                                </div>
                            </div>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <p className="whitespace-nowrap">{slot.node.tutor.language}</p>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <p className="whitespace-nowrap">{slot.node.startTime}</p>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <p className="whitespace-nowrap">{slot.node.endTime}</p>
                        </td>
                        <td className="border-b border-gray-200 p-5 text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                                />
                                <span className="relative">{slot.node.tutor.available}</span>
                            </span>
                        </td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default SlotsTable