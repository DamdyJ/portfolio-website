// ide buat timer di pojok bawah sesuai jam user

export default function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const time24 = `${hours}:${minutes}`;
  return time24;
}
