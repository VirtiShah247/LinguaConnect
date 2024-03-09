import NewClassCard from "@/app/components/NewClassComponent/NewClassCard";
import { getTutors } from "@/app/lib/getTutors";

async function Page() {
  const data = await getTutors();
  return (
    <div>
      <NewClassCard />
    </div>
  );
}

export default Page;
