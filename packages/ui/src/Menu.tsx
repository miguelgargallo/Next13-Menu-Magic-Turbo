export const Menu = () => {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-row m-2 columns-2 items-center justify-center">
        <div className="w-full px-16 text-3xl">
          <a href="/#" className="">SuperMenu</a>
        </div>
        <div className="w-full px-16 text-md">
          <div className="flex items-center justify-center">
            <a href="/#" className="">Menu Element 1</a>
          </div>
          <div className="flex w-full items-center justify-center">
            <a href="/#" className="">Menu Element 2</a>
          </div>
          <div className="flex w-full items-center justify-center">
            <a href="/#" className="">Menu Element 3</a>
          </div>
          <div className="flex w-full items-center justify-center">
            <a href="/#" className="">Menu Element 4</a>
          </div>
          <div className="flex w-full items-center justify-center">
            <a href="/#" className="">Menu Element 5</a>
          </div>
        </div>
      </div>
    </div>
  );
};