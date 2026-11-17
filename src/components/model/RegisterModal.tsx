"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useAuthModal } from "@/src/app/store/authModalStore";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

const RegisterModal = () => {
  const { isRegisterOpen, closeRegister, openLogin } = useAuthModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
    });
  };

  const handleLogin = () => {
    closeRegister();
    openLogin();
  };

  return (
    <Modal isOpen={isRegisterOpen} onClose={closeRegister}>
      <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <FiUser size={22} />
          </div>
          <h2 className="text-2xl font-medium text-text">Create an Account</h2>
          <p className="mt-2 text-sm text-muted">
            Join GroceryCart and start shopping today
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="register-name"
              className="mb-2 block text-sm font-medium text-text"
            >
              Full Name
            </label>
            <div className="relative">
              <FiUser
                size={18}
                className="absolute left-3 top-1/2 text-muted -translate-y-1/2"
              />
              <input
                id="register-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm outline-none transition 
                placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          {/* Name */}
          <div>
            <label
              htmlFor="register-email"
              className="mb-2 block text-sm font-medium text-text"
            >
              Email Address
            </label>
            <div className="relative">
              <FiMail
                size={18}
                className="absolute left-3 top-1/2 text-muted -translate-y-1/2"
              />
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm outline-none transition 
                placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="register-password"
              className="mb-2 block text-sm font-medium text-text"
            >
              Password
            </label>
            <div className="relative">
              <FiLock
                size={18}
                className="absolute left-3 top-1/2 text-muted -translate-y-1/2"
              />
              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                minLength={6}
                className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm outline-none transition 
                placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          {/* Register button */}
          <button className="w-full cursor-pointer rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-primary-hover">
            Create Account
          </button>
          <p className="mt-6 text-center text-sm text-muted">
            Already have account?{"  "}
            <button
              type="button"
              className="cursor-pointer font-medium text-primary hover:underline" onClick={handleLogin}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
