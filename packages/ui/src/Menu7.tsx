export const Menu7 = () => {
  return (
    <div className="columns-2 flex flex-row items-center justify-center bg-gray-900">
      <div className="p-4 text-white text-3xl font-bold">
        <a href="/#" className="m-2">SuperMenu</a>
      </div>
      <div className="p-4 text-white text-md font-bold text-white text-md font-bold">
        <div className="flex w-full items-center justify-center">
          <a href="/page-1" className="">Menu Element 1</a>
        </div>
        <div className="flex w-full items-center justify-center">
          <a href="/page-2" className="">Menu Element 2</a>
        </div>
        <div className="flex w-full items-center justify-center">
          <a href="/page-3" className="">Menu Element 3</a>
        </div>
        <div className="flex w-full items-center justify-center">
          <a href="/page-4" className="">Menu Element 4</a>
        </div>
        <div className="flex w-full items-center justify-center">
          <a href="/page-5" className="">Menu Element 5</a>
        </div>
      </div>
    </div>
  );
};