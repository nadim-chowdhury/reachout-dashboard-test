import { sidebarData } from "@/data/sidebarData";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="bg-white h-screen flex flex-col justify-between max-w-[280px]">
      <div>
        <div className="mt-8 mb-6">
          <button className="bg-green-500 text-white rounded-full ml-8 px-4 py-2">
            Create New Job +
          </button>
        </div>

        <div>
          {sidebarData.map((data) => (
            <Link
              href="#"
              key={data.id}
              className="flex items-center mx-4 px-4 py-2 my-1 hover:bg-blue-100 rounded-lg"
            >
              <Image
                src={data.imgSrc}
                alt={data.title}
                width={18}
                height={18}
              />
              <p className="ml-4">{data.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="m-4 px-4 py-6 bg-[#0c579b] rounded-md">
        <h3 className="text-white text-lg text-center">Upgrade your account</h3>
        <p className="text-center text-gray-300">
          Increase your usage and get early access to new features
        </p>
        <button className="px-4 py-2 mt-2 bg-green-500 text-white rounded-full w-full">
          Upgrade
        </button>
      </div>
    </nav>
  );
}
