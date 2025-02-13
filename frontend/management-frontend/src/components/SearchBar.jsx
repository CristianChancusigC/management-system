import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

export const SearchBar = () => {
  return (
    <div className="w-100 border border-gray-200 rounded-full flex items-center justify-center focus-within:border-blue-600 m-5">
      <form
        // onSubmit={handleSubmit}
        className="flex items-center justify-center gap-2"
      >
        <button
          className=" bg-gray-400 rounded-full h-8 w-8 items-center justify-center m-2 relative"
          type="submit"
        >
          <MagnifyingGlassIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </button>
        <input
          // onChange={handleChange}
          // value={search}
          name="query"
          className="h-10 flex-grow bg-transparent outline-none px-2"
          type="text"
          placeholder="Carlos, Sofia ..."
        />
        <button className="bg-gray-400 rounded-full h-8 w-8 items-center justify-center relative hover:bg-amber-50">
          <XMarkIcon
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            // onClick={handleEraseSearch}
          />
        </button>
      </form>
    </div>
  );
};
