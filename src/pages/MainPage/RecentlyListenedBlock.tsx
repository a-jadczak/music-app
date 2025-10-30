import MAQuickPlay from '@/components/ui/MA/buttons/MAQuickPlay';

const RecentlyListenedBlock = () => {
  return (
    <div
      className="flex items-center bg-neutral-800 rounded-md 
      cursor-pointer transition relative
      hover:shadow-xs
      hover:scale-105
      hover:ring-1
      group
      "
    >
      <img src="https://picsum.photos/50/50" alt="" className="rounded-md" />
      <h3 className="title ml-3 text-xl cursor-pointer">Title</h3>
      <MAQuickPlay />
    </div>
  );
};

export default RecentlyListenedBlock;
