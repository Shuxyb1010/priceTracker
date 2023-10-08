import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="bg-gray-800 py-4 rounded-b-lg">
        <div className="container flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/icons/logo.svg"
              width={27}
              height={27}
              alt="logo"
            />

            <p className="text-white text-lg font-semibold ">
              Price<span className="text-green-600">Tracker</span>
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
