"use client";
import { createNewRoom } from "@/app/lib/createNewRoom";
import { Card, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import AddClass from "./AddClass";
import { useSession } from "next-auth/react";

function NewClassCard() {
  const [addClass, setAddClass] = useState(false);

// Rest of the code
  const closePopup = (status: boolean) => {
    setAddClass(status);
  };
  //   const [roomId, setRoomId] = useState<string>("");
  //   const [loading, setLoading] = useState<boolean>(false);

  //   const createNewRoomId = async () => {
  //     setLoading(true);
  //     const id: any = await createNewRoom();
  //     setRoomId(id);
  //   };

  //   useEffect(() => {
  //     if (roomId) {
  //       setLoading(false);
  //       console.log(roomId);
  //     }
  //   }, [roomId]);

  return (
    <div>
      {addClass && (
        <AddClass closePopup={closePopup} />
      )}
      <Card className="max-w-[270px] bg-slate-200 rounded-lg py-5 px-3 m-5">
        <div className="flex flex-col justify-center items-center">
          <MdOutlineCreateNewFolder size={32} className="text-gray-500" />
          <div className="mb-5 mt-2 flex flex-col justify-center items-center gap-2">
            <h3>No classes</h3>
            <p>Get started by creating a new class.</p>
          </div>
          <Button
            className="bg-purple-600 text-white w-40 h-10 flex justify-center items-center rounded"
            onClick={() => setAddClass(true)}
          >
            + New Class
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default NewClassCard;
