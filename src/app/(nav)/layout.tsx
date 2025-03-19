import Image from 'next/image';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Image
              src="/home_icon.png"
              alt="home icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src="/mail_icon.png"
              alt="mail icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src="/chat_icon.png"
              alt="chat icon"
              width={20}
              height={20}
            />
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>채팅</h2>
          <div className="relative">
            <Image
              src="/search_icon.png"
              alt="search icon"
              width={20}
              height={20}
              className="absolute top-0 left-0"
            />
            <input
              type="text"
              placeholder="콘텐츠를 검색해 보세요"
              className="border border-solid border-gray-300"
            />
          </div>
          <h3>username</h3>
        </section>
        {children}
      </main>
    </>
  );
}
