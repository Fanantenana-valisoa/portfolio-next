"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import facebookIcon from "../../../public/facebook-icon.svg";
import twitterIcon from "../../../public/twitter-icon.svg";
import whatsappIcon from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6y38b7d",      // ← remplace
        "template_izyo1cp",     // ← remplace
        e.target,
        "M8upajiL2LRL1JfWH"       // ← remplace
      )
      .then(
        () => {
          setEmailSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-8"
    >
      <div>
        <h5 className="text-xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-400 mb-6 max-w-md">
          I&apos;m currently looking for new opportunities.  
          My inbox is always open!
        </p>

        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank">
            <Image src={GithubIcon} alt="Github" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn" />
          </Link>
  <Link href="https://facebook.com/tonprofil" target="_blank">
    <Image src={facebookIcon} alt="Facebook" width={50} height={30} />
  </Link>
  <Link href="https://wa.me/261XXXXXXXXX" target="_blank">
    <Image src={ whatsappIcon } alt="WhatsApp" width={30} height={30} />
  </Link>

  <Link href="https://twitter.com/tonprofil" target="_blank">
    <Image src={twitterIcon} alt="Twitter" width={50} height={30} />
  </Link>


        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500">
            ✅ Email sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your email"
              className="bg-[#18191E] p-3 rounded-lg text-white"
            />
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="bg-[#18191E] p-3 rounded-lg text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="bg-[#18191E] p-3 rounded-lg text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
