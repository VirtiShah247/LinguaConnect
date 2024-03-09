import React from 'react';
import ClassCard from './ClassCard';
import SlotsTable from './SlotsTable';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
function StudentDashboard(props:any) {
    const slot = props.slots;
  return (
    <div className="flex flex-col gap-3">
        <h1 className='text-center'>Welcome Manushi Student</h1>
        <div className='flex'>
            <Card className='max-w-[270px] bg-slate-100 rounded-lg py-5 px-3 m-5'>
                <div className='flex flex-col justify-center items-center'>
                    <MdOutlineCreateNewFolder  size={32} className='text-gray-500'/>
                    <div className='mb-5 mt-2 flex flex-col justify-center items-center'>
                        <h3>No classes</h3>
                        <p>
                            Get started by creating a new class.
                        </p>
                    </div>
                    <Button className='bg-customPurple w-40 h-10 flex justify-center items-center text-white rounded'>
                        + New Class
                    </Button>
                </div>
            </Card>
            <ClassCard />
        </div>
        <SlotsTable slotsData={slot}/>

    </div>
  )
}

export default StudentDashboard