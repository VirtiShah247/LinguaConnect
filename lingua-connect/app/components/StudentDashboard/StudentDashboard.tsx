import React from 'react';
import ClassCard from './ClassCard';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
function StudentDashboard() {
  return (
    // <Card className="max-w-[250px] bg-slate-100 rounded-lg py-5 px-3 m-5">
    //   <CardHeader className="flex gap-3 mb-5">
    //     <div className="flex">
    //     <div className="w-10 h-10 rounded-full  flex justify-center items-center bg-gray-300">
    //         <p>MO</p>
    //     </div>
    //     <div className='flex flex-col ms-5'>
    //         <p className="text-md">Manushi Oza</p>
    //       <p className="text-small text-default-500">French</p>
    //     </div>
    //     </div>
    //   </CardHeader>
    //   <CardBody className='flex flex-row gap-5'>
    //     <Button className='bg-blue-500 w-20 h-10 flex justify-center items-center text-white rounded'>Info</Button>
    //     <Button className='bg-gray-300 w-20 h-10 flex justify-center items-center text-black rounded'>Join</Button>
    //   </CardBody>   
    // </Card>
    <div className="flex">

    <Card className='max-w-[270px] bg-slate-100 rounded-lg py-5 px-3 m-5'>
        <div className='flex flex-col justify-center items-center'>
            <MdOutlineCreateNewFolder  size={32} className='text-gray-500'/>
            <div className='mb-5 mt-2 flex flex-col justify-center items-center'>
                <h3>No classes</h3>
                <p>
                    Get started by creating a new class.
                </p>
            </div>
            <Button className='bg-customPurple text-white w-40 h-10 flex justify-center items-center text-white rounded'>
                + New Class
            </Button>
        </div>
    </Card>
    <ClassCard />

    </div>
  )
}

export default StudentDashboard