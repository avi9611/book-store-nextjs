import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="px-8 py-6 backdrop-blur-sm bg-white/75 sticky top-0 z-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 transition-all duration-300">
          <div className="relative overflow-hidden rounded-full p-1 ring-2 ring-primary/20 group-hover:ring-primary/70 transition-all duration-300">
            <Image 
              src="/icons/logo.svg" 
              alt="logo" 
              width={36} 
              height={36} 
              className="group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-slate-800 tracking-tight">
              Bookstore
            </span>
            <span className="text-xs text-slate-500 -mt-1">Your literary haven</span>
          </div>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                href="/explore" 
                className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors relative group"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/account" 
            className="text-slate-600 hover:text-primary transition-colors"
          >
            <span className="sr-only">Account</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-600 hover:text-primary hover:bg-primary/5"
            >
              Logout
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;