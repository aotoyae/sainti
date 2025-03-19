'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useAuthStore from '@/store/store';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [title, setTitle] = useState('홈');
  const [isLoading, setIsLoading] = useState(false);
  const userId = useAuthStore((state) => state.userId);
  const router = useRouter();
  const pathname = usePathname();

  const menus = [
    { id: '1', link: 'home', title: '홈', src: '/home_icon.png' },
    { id: '2', link: 'mail', title: '받은편지함', src: '/mail_icon.png' },
    { id: '3', link: 'chat', title: '채팅', src: '/chat_icon.png' },
  ];

  useEffect(() => {
    const menu = menus.find((menu) => `/${menu.link}` === pathname);
    if (menu) {
      setTitle(menu.title);
    }

    setIsLoading(false);
  }, [pathname]);

  const handleRoute = (link: string) => {
    setIsLoading(true);
    router.push(`/${link}`);
  };

  return (
    <main className="flex">
      <nav className="w-[4vw] h-[100vh] border-r border-solid border-yellow-600">
        <ul className="h-full flex flex-col justify-center items-center gap-10">
          {menus.map((menu, idx) => (
            <li key={idx} onClick={() => handleRoute(menu.link)}>
              <Link href={`/${menu.link}`}>
                <Image
                  src={menu.src}
                  alt={`${menu.link} icon`}
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <header className="w-[96vw] px-4 py-5 flex justify-between items-center border-b border-solid border-yellow-600">
          <h2 className="text-2xl font-bold">{title}</h2>
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
          <h3>{userId}</h3>
        </header>
        {isLoading ? (
          <div className="h-full flex justify-center items-center">
            <h1 className="text-2xl font-black">로딩 중입니다.</h1>
          </div>
        ) : (
          children
        )}
      </section>
    </main>
  );
}
