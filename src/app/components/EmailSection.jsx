"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Sending..." });

    const formData = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        e.target.reset();
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setFormStatus({ type: "error", message: error.message });
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="github" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="linkedin" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Or directly email me at Ranjanguptajeff@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              required
            />
          </div>
          {formStatus.message && (
            <div
              className={`mb-4 p-2 rounded ${
                formStatus.type === "success"
                  ? "bg-green-500"
                  : formStatus.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            >
              {formStatus.message}
            </div>
          )}
          <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={formStatus.type === "loading"}
            >
              {formStatus.type === "loading" ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
