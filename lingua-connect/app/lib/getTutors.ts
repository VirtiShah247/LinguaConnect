export const getTutors = async () => {
  const res = await fetch("http://localhost:3000/api/getTutor");
  const data = await res.json();
  return data;
};
