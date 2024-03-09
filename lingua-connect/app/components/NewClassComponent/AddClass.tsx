"use client";
import axios from "axios";
import { headers } from "next/headers";
import React, { useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";

export const dynamic = "force-dynamic";

function AddClass({ closePopup, emailId }: any) {
  const [slots, setSlots] = useState({
    startTime: "",
    endTime: "",
  });
  const { data: session } = useSession();
  console.log(session);
  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("startTime", slots.startTime);
    formData.append("endTime", slots.endTime);
    formData.append("email", session?.user?.email as string);
    console.log(formData);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/api/createSlot`,
      formData
    );
    console.log(res);
    closePopup(false);
  };

  return (
    
      <div
        className="relative z-10 display-none"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Add your Class
                    </h3>
                    <div className="mt-10">
                      <form
                        className="w-full max-w-lg"
                        //   onSubmit={() => onSubmit()}
                      >
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-first-name"
                            >
                              Start Time
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="datetime-local"
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) =>
                                setSlots({
                                  ...slots,
                                  startTime: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-last-name"
                            >
                              End Time
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="datetime-local"
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) =>
                                setSlots({ ...slots, endTime: e.target.value })
                              }
                            ></input>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={() => onSubmit()}
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
                >
                  Add Class
                </button>
                <button
                  type="button"
                  onClick={() => closePopup(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AddClass;
