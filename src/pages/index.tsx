import { useEffect, useState, } from "react";
import { useLanyard } from "react-use-lanyard";
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  interface User {
    id: string | undefined;
    username: string | undefined;
    avatar: string | undefined;
  }
  const [user, setUser] = useState<User>();
  const lanyard = useLanyard({
    userId: "664133993347940384",
  });
  useEffect(() => {
    setUser({
      id: lanyard?.data?.data.discord_user.id,
      username: lanyard?.data?.data.discord_user.username,
      avatar: `https://cdn.discordapp.com/avatars/${lanyard?.data?.data.discord_user.id}/${lanyard?.data?.data.discord_user.avatar}.png`,
    });
  }, [lanyard]);
  return (
    <div className={'h-screen w-screen bg-[#121212] font-mono'}>
      <Head>
        <title>Vertixx</title>
        <meta name="description" content="Vertixx's Funny Website 💯" />
      </Head>
      <div className={'flex flex-col justify-center items-center mb-64'}>
        <div className={'flex flex-row gap-2 font-bold h-10 w-32 rounded-3xl bg-[#2B2B3B] justify-center items-center mt-14'}>
          <img src={user?.avatar} className={'rounded-full h-8 w-8'} />
          <h1 className={'text-white text-base'}>Vertixx</h1>
        </div>
      </div>
      <div className={'flex flex-col justify-center items-center drop-shadow-glow'}>
        <h1 className={'text-white text-base sm:text-2xl font-bold'}>Hey, I'm <span className={'underline font-extrabold text-transparent bg-clip-text bg-gradient-to-l to-[#2E74C1] via-[#6AD9E7] from-[#F68201]'}>Vertixx</span></h1>
        <h1 className={'text-white text-base sm:text-2xl font-bold'}>So i basically do random stuff</h1>
        <h1 className={'text-white text-base sm:text-2xl font-bold'}>And i love <Link className={'underline hover:text-[#2E74C1]'} href={"https://www.typescriptlang.org/"}>Typescript</Link>, <Link className={'underline hover:text-[#6AD9E7]'} href={"https://go.dev/"}>Golang</Link> and <Link className={'underline hover:text-[#F68201]'} href={"https://www.rust-lang.org/"}>Rust</Link></h1>
      </div>
      <div className={'flex flex-col justify-center items-center mt-10'}>
        <div className={'flex flex-row gap-4 font-bold h-10 w-32 rounded-3xl bg-[#1b1b1b] justify-center items-center'}>
          <a href='https://github.com/Vertixx01' className={'h-8 w-8'}><AiFillGithub color="white" className={'h-8 w-8'} /></a>
          <a href='https://discord.com/users/664133993347940384s' className={'h-8 w-8'}><BsDiscord color="white" className={'h-8 w-8'} /></a>
        </div>
      </div>
    </div>
  )
};