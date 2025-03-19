'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const handleRoute = (e: React.FormEvent, menu: string) => {
    e.preventDefault();
    router.push(menu);
  };

  return (
    <main className="flex">
      <nav className="w-[4vw] h-[100vh] border-r border-solid border-yellow-600">
        <ul className="h-full flex flex-col justify-center items-center gap-10">
          <li onClick={(e) => handleRoute(e, '/home')}>
            <Image
              src="/home_icon.png"
              alt="home icon"
              width={20}
              height={20}
            />
          </li>
          <li onClick={(e) => handleRoute(e, '/mail')}>
            <Image
              src="/mail_icon.png"
              alt="mail icon"
              width={20}
              height={20}
            />
          </li>
          <li onClick={(e) => handleRoute(e, '/chat')}>
            <Image
              src="/chat_icon.png"
              alt="chat icon"
              width={20}
              height={20}
            />
          </li>
        </ul>
      </nav>
      <section>
        <header className="w-[96vw] px-4 py-5 flex justify-between items-center border-b border-solid border-yellow-600">
          <h2 className="text-2xl font-bold">채팅</h2>
          <div className="relative">
            <Image
              src="/search_icon.png"
              alt="search icon"
              width={15}
              height={15}
              className="absolute top-2 left-3"
            />
            <input
              type="text"
              placeholder="콘텐츠를 검색해 보세요"
              className="w-[480px] p-1 pl-9 text-sm bg-gray-100 border border-solid border-gray-300 rounded-full"
            />
          </div>
          <h3>username</h3>
        </header>
        {children}
      </section>
    </main>
  );
}
