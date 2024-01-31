import avatarJessica from "../Imgs/avatar-jessica.jpeg";

export default function Main() {
  return (
    <main
      id="main"
      className="rounded-md bg-stone-800 text-center inline-block p-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
    >
      <section>
        <img
          className="mx-auto mb-5 size-24 rounded-full"
          src={avatarJessica}
          alt="Jessica"
        />
        <article>
          <h1 className="text-2xl mb-2 font-bold text-white">
            Jessica Randall
          </h1>
          <h2 className="text-xs font-bold text-lime-500 font-">
            London, United Kingdom
          </h2>
        </article>
        <h3 className="text-gray-300 my-5">
          "Front-end developer and avid reader."
        </h3>
      </section>
      <section>
        <ul id="ul" className="space-y-4">
          <li className="hover:text-black hover:bg-lime-500 transition-all cursor-pointer rounded-lg bg-stone-700 text-white font-semibold py-3 list-none">
            <a href="#">GitHub</a>
          </li>
          <li className="hover:text-black hover:bg-lime-500 transition-all cursor-pointer rounded-lg bg-stone-700 text-white font-semibold py-3 list-none">
            <a href="#">Frontend Mentor</a>
          </li>
          <li className="hover:text-black hover:bg-lime-500 transition-all cursor-pointer rounded-lg bg-stone-700 text-white font-semibold py-3 list-none">
            <a href="#">LinkedIn</a>
          </li>
          <li className="hover:text-black hover:bg-lime-500 transition-all cursor-pointer rounded-lg bg-stone-700 text-white font-semibold py-3 list-none">
            <a href="#">Twitter</a>
          </li>
          <li className="hover:text-black hover:bg-lime-500 transition-all cursor-pointer rounded-lg bg-stone-700 text-white font-semibold py-3 list-none">
            <a href="#">Instagram</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
