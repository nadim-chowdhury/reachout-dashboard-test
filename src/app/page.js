import Card from "@/components/Card";
import { cardData } from "@/data/cardData";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-8">
      {cardData.map((data) => (
        <Card key={data.id} imgSrc={data.imgSrc} title={data.title} />
      ))}
    </div>
  );
}
