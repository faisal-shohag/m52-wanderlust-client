
import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden  flex items-center justify-center px-6">

      {/* Background glowing circles */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10 md:p-14 max-w-xl w-full shadow-2xl text-center">

        {/* Icon */}
        <div className="mx-auto w-fit mb-6 p-5 rounded-full bg-red-500/10 border border-red-400/20">
          <AlertTriangle className="w-12 h-12 text-red-400" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-300 leading-relaxed">
          Looks like the page you’re searching for has vanished into the
          digital universe. It may have been moved, deleted, or never existed.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Home size={18} />
            Back Home
          </Link>

   
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;