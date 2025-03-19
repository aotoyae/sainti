'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/home');
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-20">
      <h1 className="text-2xl text-blue-900 font-bold drop-shadow-md">
        Login Page
      </h1>
      <form className="w-[400px] flex flex-col gap-6 text-sm">
        <div className="flex flex-col gap-1">
          <label htmlFor="">아이디</label>
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력하세요"
            className="p-2 border border-solid border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">패스워드</label>
          <input
            id="pw"
            type="password"
            placeholder="패스워드를 입력하세요"
            className="p-2 border border-solid border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleLogin}
          className="py-3 bg-blue-900 text-white rounded-full"
        >
          Log in
        </button>
      </form>
    </main>
  );
}
