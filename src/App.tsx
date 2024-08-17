import { useEffect, useState } from "react";
import Header from "./Components/Header";
import UserInfo from "./Components/UserInfo";

export interface UserType {
  name: string;
  avatar_url: string;
  login: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | undefined;
  twitter_username: string | null;
  company: string | null;
}

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | undefined>();
  const [search, setSearch] = useState<string | undefined>("octocat");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getUser();
  }, []);

  const toggleDark = () => {
    setDark(!dark);
  };

  const getUser = async () => {
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      if (!response.ok) {
        throw new Error("No results");
      }
      const data = await response.json();
      setUser(data);
    } catch (error: any) {
      setError(error.message);
    }
  };
  

  return (
    <div
      className={`w-full h-screen  px-[2.4rem] py-[3.2rem] ${
        dark ? "bg-darkest" : "bg-ivory"
      } transition-colors duration-500 md:flex md:flex-col md:justify-center md:px-[9.8rem] md:py-0 xl:px-[35rem]`}
    >
      <header>
        <Header
          dark={dark}
          toggleDark={toggleDark}
          setSearch={setSearch}
          getUser={getUser}
          error={error}
        />
      </header>

      <main>{user && <UserInfo user={user} dark={dark} />}</main>
    </div>
  );
}

export default App;
