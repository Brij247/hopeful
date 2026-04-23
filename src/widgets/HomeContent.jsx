import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-6">
      <h1 className="text-5xl font-bold text-center">
        Help out poor and orphan for education
      </h1>
      <p className="text-lg max-w-2xl text-center">
        Excel HOPE project is an initiative to help under privileged children to
        pursue education and there for chase their dreams. Started in 2014,
        we've been transforming lives through education and support.
      </p>
      <div className="flex gap-4 mt-8">
        <Link
          href="/sponser-a-child"
          className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg"
        >
          <span className="text-xl drop-shadow-lg">💝</span> Sponsor a Child
        </Link>
        <Link
          href="/project"
          className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg"
        >
          📚 View Projects
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
