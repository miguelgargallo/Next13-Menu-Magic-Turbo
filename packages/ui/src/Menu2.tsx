export const Menu2 = () => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <div className="flex w-full items-center justify-center">
        <a href="/#"
          className="p-4 text-white text-3xl font-bold"
        >SuperMenu</a>
      </div>
      <div className="flex w-full items-center justify-center">
        <a href="/page-1" className="p-4 text-white text-md font-bold">Menu Element 1</a>
        <a href="/page-2" className="p-4 text-white text-md font-bold">Menu Element 2</a>
        <a href="/page-3" className="p-4 text-white text-md font-bold">Menu Element 3</a>
        <a href="/page-4" className="p-4 text-white text-md font-bold">Menu Element 4</a>
        <a href="/page-5" className="p-4 text-white text-md font-bold">Menu Element 5</a>
      </div>
    </div>
  );
};
