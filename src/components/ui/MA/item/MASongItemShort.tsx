import MAToggle from '../buttons/MAToggle';

const MASongItemShort = ({ index }: { index: number }) => {
  return (
    <div
      className="grid 
    grid-cols-12
    w-full gap-4 rounded p-1
      hover:bg-neutral-700
    "
    >
      <div className="col-span-5 flex flex-center items-center ">
        <img className="rounded-lg h-12.5 mr-3" src="https://picsum.photos/300/300" />
        <div>
          <p className="text text-lg">Song name</p>
          <a href="#" className="anchor">
            Buckethead
          </a>
        </div>
      </div>
      <div className="col-start-11 flex items-center justify-center">
        <MAToggle onContent="Added" offContent="Add" />
      </div>
    </div>
  );
};

export default MASongItemShort;
