export default function Tab({ tabData, field, setField }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-2 my-6 bg-[whitesmoke] rounded-full shadow-md shadow-black">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`py-2 px-5 rounded-full transition-all duration-200 shadow-sm ${field === tab.type
            ? "bg-black text-white shadow-md shadow-black"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
}
