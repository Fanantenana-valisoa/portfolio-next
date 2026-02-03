"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 25px rgba(34, 197, 94, 0.8)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
     ////transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    
      className="rounded-full p-1 bg-gradient-to-r from-green-400 to-green-600"
    >
      <div className="w-full h-full rounded-full p-1 bg-gradient-to-r from-green-400 to-green-600 glow">
        <Image
          src="/images/IMG_20260203_215004.jpg"
          alt="Profile"
          height={2000}
          width={2000}
          className="object-cover rounded-full"
        />
      </div>
    </motion.div>
  );
}
