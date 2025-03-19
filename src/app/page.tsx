export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl text-blue-900 font-bold">Login Page</h1>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="">아이디</label>
          <input id="id" type="text" placeholder="아이디를 입력하세요" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">패스워드</label>
          <input id="pw" type="password" placeholder="패스워드를 입력하세요" />
        </div>
        <button>Log in</button>
      </form>
    </main>
  );
}
