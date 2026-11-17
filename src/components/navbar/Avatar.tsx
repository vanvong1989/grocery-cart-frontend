"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLogOut, FiPackage } from "react-icons/fi";

interface AvatarProps {
  mobile?: boolean;
}

const Avatar = ({ mobile = false }: AvatarProps) => {
  const [Open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar */}
      <div
        onClick={() => setOpen(!Open)}
        className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2
       border-border transition-all hover:border-primary"
      >
        <Image
          src="/images/avatar.png"
          alt="user image"
          width={48}
          height={48}
        />
      </div>
      {/* Dropdown  */}
      {Open && (
        <div
          className={`z-50 overflow-hidden rounded-xl border border-border bg-card p-2  shadow-xl  bg-background ${mobile ? "relative mt-33 w-full" : "absolute right-1 top-12 w-48"}`}
        >
          <Link
            href="/orders"
            className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-text transition hover:bg-background hover:text-primary"
          >
            <FiPackage size={18} />
            <span>Orders</span>
          </Link>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text transition hover:bg-background hover:text-primary">
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
