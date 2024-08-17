import { UserType } from "../App";

const UserInfo = ({
  user,
  dark,
}: {
  user: UserType;
  dark: boolean;
}) => {
  console.log(user);

  const userName = user.name
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

  const dateString = user.created_at;

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div
      className={`w-full px-[2.4rem] py-[3.2rem] ${
        dark ? "bg-dark shadow-none" : "bg-light shadow-shadow"
      } mt-[1.6rem] rounded-[1.5rem]  transition-colors duration-500`}
    >
      <div className="flex items-start gap-[2rem] md:gap-[3.6rem]">
        <div className="w-[7rem] rounded-full overflow-hidden md:w-[11.7rem]">
          <img
            src={user?.avatar_url}
            alt={`${user?.name}'s avatar`}
          />
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-[0.2rem]">
            <h2
              className={`text-[1.6rem] font-bold ${
                dark ? "text-white" : "text-darker"
              } transition-colors duration-500`}
            >
              {userName || "No name available"}
            </h2>
            <h3
              className={`text-[1.3rem] text-blue`}
            >{`@${user?.login} `}</h3>
            <h3
              className={`text-[1.3rem] ${
                dark ? "text-white" : "text-darker"
              } transition-colors duration-500`}
            >
              Joined {formattedDate}
            </h3>
          </div>
          <div className="ml-[-6rem] md:ml-0">
            <div className="mt-[3.2rem]">
              <p
                className={`text-[1.3rem] ${
                  dark ? "text-white" : "text-metalic"
                } ${
                  user?.bio ? "opacity-1" : "opacity-[0.75]"
                } transition-colors duration-500`}
              >
                {user?.bio || "This profile has no bio"}
              </p>
            </div>
            <div
              className={`${
                dark ? "bg-darkest" : "bg-ivory"
              } rounded-[1rem] mt-[2.2rem] py-[1.2rem] px-[1.8rem] flex items-center justify-between transition-colors duration-500 md:px-[3.2rem]`}
            >
              <div className="text-center md:text-left">
                <h2
                  className={`${
                    dark ? "text-white" : "text-metalic"
                  } text-[1.1rem] md:text-[1.3rem] transition-colors duration-500`}
                >
                  Repos
                </h2>
                <p
                  className={`${
                    dark ? "text-white" : "text-darker"
                  } font-bold text-[1.6rem] mt-[0.8rem] md:text-[2.2rem] transition-colors duration-500`}
                >
                  {user?.public_repos}
                </p>
              </div>
              <div className="text-center md:text-left">
                <h2
                  className={`${
                    dark ? "text-white" : "text-metalic"
                  } text-[1.1rem] md:text-[1.3rem] transition-colors duration-500`}
                >
                  Followers
                </h2>
                <p
                  className={`${
                    dark ? "text-white" : "text-darker"
                  } font-bold text-[1.6rem] mt-[0.8rem] md:text-[2.2rem] transition-colors duration-500`}
                >
                  {user?.followers}
                </p>
              </div>
              <div className="text-center md:text-left">
                <h2
                  className={`${
                    dark ? "text-white" : "text-metalic"
                  } text-[1.1rem] md:text-[1.3rem] transition-colors duration-500`}
                >
                  Following
                </h2>
                <p
                  className={`${
                    dark ? "text-white" : "text-darker"
                  } font-bold text-[1.6rem] mt-[0.8rem] md:text-[2.2rem] transition-colors duration-500`}
                >
                  {user?.following}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[1.6rem] mt-[2.4rem] md:mt-[3.2rem] md:flex-row md:gap-[6.2rem]">
              <div className="flex flex-col gap-[1.6rem]">
                <div className="flex items-center gap-[1rem]">
                  <div className="w-[2rem]">
                    <img
                      src={
                        dark
                          ? "images/location-white.svg"
                          : "images/location.svg"
                      }
                      alt=""
                    />
                  </div>

                  <p
                    className={`text-[1.3rem] ${
                      !user?.location
                        ? "text-grey opacity-[0.5]"
                        : dark
                        ? "text-white"
                        : "text-metalic"
                    } transition-colors duration-500`}
                  >
                    {user?.location || "No location available"}
                  </p>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <div className="w-[2rem]">
                    <img
                      src={
                        dark
                          ? "images/link-white.svg"
                          : "images/link.svg"
                      }
                      alt=""
                    />
                  </div>

                  <a
                    href={user?.blog}
                    className={`text-[1.3rem] ${
                      !user?.blog
                        ? "text-grey opacity-[0.5]"
                        : dark
                        ? "text-white"
                        : "text-metalic"
                    } transition-colors duration-500 ${
                      user.blog ? "hover:underline" : null
                    }`}
                  >
                    {user?.blog || "No blog available"}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-[1.6rem]">
                <div className="flex items-center gap-[1rem]">
                  <div className="w-[2rem]">
                    <img
                      src={
                        dark
                          ? "images/twitter-white.svg"
                          : "images/twitter.svg"
                      }
                      alt=""
                    />
                  </div>

                  <p
                    className={`text-[1.3rem] ${
                      !user?.twitter_username
                        ? "text-grey opacity-[0.5]"
                        : dark
                        ? "text-white"
                        : "text-metalic"
                    } transition-colors duration-500`}
                  >
                    {user?.twitter_username || "No Twitter available"}
                  </p>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <div className="w-[2rem]">
                    <img
                      src={
                        dark
                          ? "images/office-white.svg"
                          : "images/office.svg"
                      }
                      alt=""
                    />
                  </div>

                  <p
                    className={`text-[1.3rem] ${
                      !user?.company
                        ? "text-grey opacity-[0.5]"
                        : dark
                        ? "text-white"
                        : "text-metalic"
                    } transition-colors duration-500`}
                  >
                    {user?.company || "No company available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
