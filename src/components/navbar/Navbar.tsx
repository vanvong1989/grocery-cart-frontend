"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import Avatar from "./Avatar";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import GroceryAssistant from "./GroceryAssistant";
import { LuSparkles } from "react-icons/lu";
import { useAuthModal } from "@/src/app/store/authModalStore";

const Navbar = () => {
  const [Open, setOpen] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const {openLogin} = useAuthModal();
  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-primary-hover"
        type="button"
        onClick={() => setIsAIOpen(true)}
      >
        <LuSparkles size={18} />
        <span>Ask AI</span>
      </button>
      <nav
        className="relative z-40 flex items-center justify-between border-b border-border bg-white px-6 py-4 
      transition-all md:px-16 lg:px-24 xl:px-32"
      >
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <FiPackage size={22} />
          </div>
          <span className="text-xl font-bold text-text">
            Grocery
            <span className="text-primary">Cart</span>
          </span>
        </Link>

        {/* desktop menu */}
        <div className="hidden items-center gap-8 sm:flex">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="transition hover:text-primary">
            Contact
          </Link>
          {/* search input */}
          <div className=" hidden items-center gap-2 rounded-full border border-border px-3 lg:flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent py-1.5 text-sm outline-none placeholder:text-muted"
            />
            <FaSearch className="text-muted" size={14} />
          </div>
          {/* carrt */}
          <button
            onClick={() => setCartOpen(true)}
            type="button"
            className="relative cursor-pointer"
          >
            <IoCartOutline
              className="text-muted transition-all hover:text-primary"
              size={24}
            />
            <span className="absolute -right-3 -top-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              5
            </span>
          </button>
          {/* avatar / login */}
          <div onClick={openLogin} className="flex items-center gap-3">
            <button className="cursor-pointer rounded-full bg-primary px-6 py-2 text-sm text-white transition hover:bg-primary">
              Login
            </button>
            <Avatar />
          </div>
        </div>

        {/* mobile menu Button*/}
        <button
          onClick={() => setOpen((prev) => !prev)}
          type="button"
          className="sm:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-muted"></span>
            <span className="ml-2 h-0.5 w-4 rounded-full bg-muted"></span>
            <span className=" h-0.5 w-5 rounded-full bg-muted"></span>
          </span>
        </button>

        {/* mobile menu */}
        <div
          className={`absolute left-0 top-full z-50 w-full flex-col gap-4 border-b border-border bg-white px-5 py-5
            items-start shadow-md sm:hidden ${Open ? "flex" : "hidden"}`}
        >
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="transition hover:text-primary">
            Contact
          </Link>

          {/* mobilde search */}
          <div className="flex w-full items-center gap-2 rounded-full border border-border px-3">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent py-2 text-sm outline-none
            placeholder:text-muted"
            />
            <FaSearch className="text-muted" size={14} />
          </div>

          {/* mobile cart */}
          <button
            onClick={() => {
              setOpen(false);
              setCartOpen(true);
            }}
            className="flex w-full cursor-pointer items-center gap-3 text-left transition hover:text-primary"
          >
            <div className="relative">
              <IoCartOutline size={22} />
              <span
                className="absolute -right-2 -top-2 pl-1.5 flex h-4 w-4 items-center justify-between rounded-full
                 bg-primary text-[9px] text-white"
              >
                3
              </span>
            </div>
            <span>Cart</span>
          </button>

          {/* avatar / login */}
          <div className="flex items-center gap-5">
            <button onClick={openLogin} className="cursor-pointer rounded-full bg-primary px-6 py-2 text-sm text-white transition hover:bg-primary">
              Login
            </button>
            <Avatar />
          </div>
        </div>
      </nav>
      {/* cartsidebar */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      <GroceryAssistant open={isAIOpen}  onClose={() => setIsAIOpen(false)} />
    </>
  );
};

export default Navbar;
