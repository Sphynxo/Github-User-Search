const Header = ({
  dark,
  toggleDark,
  setSearch,
  getUser,
  error,
}: {
  dark: boolean;
  toggleDark: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  getUser: () => Promise<void>;
  error: string;
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1
          className={`text-[2.6rem]  font-bold ${
            dark ? "text-white" : "text-[#222731]"
          } transition-colors duration-500`}
        >
          devfinder
        </h1>
        <div
          className="flex gap-[1.6rem] items-center hover:cursor-pointer"
          onClick={toggleDark}
        >
          <p
            className={`text-[1.3rem]  fobo uppercase ${
              dark ? "text-white" : "text-metalic"
            } transition-colors duration-500`}
          >
            {dark ? `light` : `dark`}
          </p>
          <img
            src={dark ? "images/sun.svg" : "images/moon.svg"}
            alt=""
          />
        </div>
      </div>

      <div className="relative  mt-[3.6rem]">
        <input
          className={` w-full ${
            dark
              ? "bg-dark shadow-none text-white"
              : "bg-light shadow-shadow text-darker"
          } text-[1.3rem] pl-[4.5rem] py-[2.2rem] rounded-[1.5rem] outline-none transition-colors duration-500 md:text-[1.8rem]`}
          placeholder="Search GitHub username…"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src="images/search.svg"
          alt=""
          className="absolute top-[50%] translate-y-[-50%] left-[1.6rem]"
        />
        <button
          className="text-[1.4rem] font-bold py-[1.2rem] px-[1.8rem] bg-blue text-white rounded-[1rem] absolute right-[0.8rem] top-[50%] translate-y-[-50%] md:text-[1.6rem] xl:hover:bg-[#60ABFF] transition-colors duration-300"
          onClick={() => getUser()}
        >
          Search
        </button>

        {error && (
          <div
            className={`absolute top-[50%] translate-y-[-50%] right-[10rem] px-[1.2rem] md:right-[12rem]  ${
              dark ? "bg-dark" : "bg-white"
            } transition-colors duration-500`}
          >
            <p className="text-[1.5rem] text-[#F74646] font-bold ">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
