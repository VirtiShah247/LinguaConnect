import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

function ClassCard() {
  return (
     <Card className="max-w-[270px] bg-slate-100 rounded-lg py-5 px-3 m-5">
      <CardHeader className="flex gap-3 mb-5">
        <div className="flex">
        <div className="w-10 h-10 rounded-full  flex justify-center items-center bg-gray-300">
            <p>MO</p>
        </div>
        <div className='flex flex-col ms-5'>
            <p className="text-md">Manushi Oza</p>
          <p className="text-small text-default-500">French</p>
        </div>
        </div>
      </CardHeader>
      <CardBody className='flex flex-row gap-5'>
        <Button className='bg-customPurple w-20 h-10 flex justify-center items-center text-white rounded'>Info</Button>
        <Button className='bg-gray-300 w-20 h-10 flex justify-center items-center text-black rounded'>Join</Button>
      </CardBody>   
    </Card>
  )
}

export default ClassCard