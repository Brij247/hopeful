import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-4 sm:gap-6 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
        Help out poor and orphan for education
      </h1>
      <p className="text-base sm:text-lg max-w-2xl text-center leading-relaxed">
        Excel HOPE project is an initiative to help under privileged children to
        pursue education and there for chase their dreams. Started in 2014,
        we&apos;ve been transforming lives through education and support.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
        <Link
          href="/sponser-a-child"
          className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition duration-300 shadow-lg text-center"
        >
          <span className="text-lg sm:text-xl drop-shadow-lg">💝</span> Sponsor a Child
        </Link>
        <Link
          href="/project"
          className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition duration-300 shadow-lg text-center"
        >
          📚 View Projects
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
