import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:w-[80%] h-screen m-auto px-6 gap-4 justify-center items-center md:px-16">
      <h1 className="font-bold text-2xl md:text-3xl tracking-wider mb-3">Welcome to QueryVault</h1>
      <p className=" text-center text-sm">QueryVault is a powerful and flexible data management tool designed to help organizations and businesses manage, analyze, and visualize their data in a secure and efficient manner.</p>
      <p className=" text-center text-sm">With QueryVault, you can easily create, manage, and query your data across various sources, databases, and platforms. You can also use advanced analytics and visualization tools to gain insights and make data-driven decisions.</p>
      <p className=" text-center text-sm">To get started, please visit our website or download our free trial version.</p>
      <Link href={"/query_vault"} className=" flex px-6 py-4 rounded-md font-medium bg-[#c85103] tracking-wider mt-5 hover:bg-transparent border-[#c85103] hover:text-[#c85103] transition-all">Get Started </Link>
    </div>
  );
}
