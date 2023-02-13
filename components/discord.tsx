function Discord() {
  return (
    <div className="h-screen border-4 border-blue-400 space-y-2 overflow-y-scroll ">
      {[...Array(40)].map((item) => (
        <div key={item} className="text-black h-8 w-16 bg-white">
          vrd
        </div>
      ))}
    </div>
  );
}

export default Discord;
