import React from "react";
import StudentDashboard from "@/app/components/StudentDashboard/StudentDashboard";
import { getTutors } from "@/app/lib/getTutors";
async function Page() {
  const data = await getTutors();
  console.log(data);
  return <StudentDashboard slots={ data.tutors }/>;
}

export default Page;
