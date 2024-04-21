interface SmallDashCardProps {
  SmallCardData: any;
}

const SmallDashCard: React.FC<SmallDashCardProps> = ({ SmallCardData }) => {
  return (
    <div className="h-full grid grid-rows-5 gap-1 border rounded-lg border-dashed border-slate-900 hover:border-slate-700 transition-all cursor-default">
      <div className="row-span-3 text-6xl text-orange-400 flex justify-center items-center font-bold">{SmallCardData.o}</div>
      <div className="row-span-2 p-1 text-lg text-orange-200 flex justify-center items-center text-center" >{SmallCardData.p}</div>
    </div>
  );
};

export default SmallDashCard;
