import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white flex justify-between items-center px-8 py-4 border-b">
      <div className="flex items-center">
        <div>
          <Image
            src="/logo-big.png"
            width={150}
            height={33}
            alt="logo"
            priority={true}
          />
        </div>

        <div className="flex items-center">
          <div className="p-2 border rounded ml-[78px] mr-8">
            <Image
              src="/arrow-left.png"
              width={18}
              height={18}
              alt="logo"
              priority={true}
            />
          </div>
          <h1>Home</h1>
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-2">
          <Image
            src="/message.png"
            width={18}
            height={18}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Image
            src="/notifications.png"
            width={18}
            height={18}
            alt="logo"
            priority={true}
          />
        </div>
        <div className="border-l pl-4 flex items-center">
          <Image
            src="/user.png"
            width={44}
            height={44}
            alt="logo"
            priority={true}
          />

          <div className="ml-2 mr-8">
            <h3 className="text-blue-600">Malida Lyne</h3>
            <p className="text-gray-500">Recruiter</p>
          </div>

          <Image
            src="/arrow-down-sm.png"
            width={16}
            height={16}
            alt="logo"
            priority={true}
          />
        </div>
      </div>
    </header>
  );
}
