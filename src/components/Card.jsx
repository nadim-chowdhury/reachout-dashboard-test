import Image from "next/image";

export default function Card({ imgSrc, title }) {
  return (
    <div className="relative">
      <div className="bg-white rounded-full ring-8 ring-blue-100 p-4 w-[62px] absolute left-[40%]">
        <Image src={imgSrc} width={38} height={38} alt={title} />
      </div>

      <div className="bg-white rounded flex flex-col justify-end pt-8 pb-4 mt-8">
        <h4 className="text-center px-8 py-4">{title}</h4>
      </div>
    </div>
  );
}
