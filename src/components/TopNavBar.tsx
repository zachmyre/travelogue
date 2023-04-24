import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function TopNavBar(props: any) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/travelogue-removebg.png"
                alt="Travelogue"
                width={140}
                height={160}
              />
            </div>
            <div className="flex-shrink-0 flex items-center sm:hidden">
              {showMobileMenu && <div>Hello :))) </div>}
              <Bars3BottomRightIcon
                onClick={() => handleMobileMenuToggle()}
                className="w-12 h-12 text-primary hover:opacity-50"
              />
            </div>
            {/* Navigation buttons */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:justify-center">
              <button className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm uppercase">
                <Link href="/login">Login</Link>
              </button>
              <button className="btn-primary">
                <Link href="/signup">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
