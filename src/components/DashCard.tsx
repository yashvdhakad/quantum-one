import Link from "next/link";
import SmallDashCard from "./SmallDashCard";

interface DashCardProps {
  cardData: any;
}

const DashCard: React.FC<DashCardProps> = ({ cardData }) => {
  return (
    <section className="p-4 bg-gray-950 flex flex-col gap-4 rounded-lg">
      <Link href={cardData.b}>
        <div className="text-xl hover:cursor-pointer uppercase font-bold text-orange-200">
          {cardData.a}
        </div>
      </Link>
      <div className="h-full grid grid-cols-6 grid-rows-1 gap-1">
        <SmallDashCard SmallCardData={cardData.z} />
        <SmallDashCard SmallCardData={cardData.y} />
        <SmallDashCard SmallCardData={cardData.x} />
        <SmallDashCard SmallCardData={cardData.w} />
        <SmallDashCard SmallCardData={cardData.v} />
        <SmallDashCard SmallCardData={cardData.t} />
      </div>
    </section>
  );
};

export default DashCard;
