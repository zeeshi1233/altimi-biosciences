"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage so preloader only runs once per session
    const hasLoaded = sessionStorage.getItem("altimi_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("altimi_loaded", "true");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle medical grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Logo */}
            <div className="relative w-36 h-36 mb-4">
              <Image
                src="/logo.png"
                alt="Altimi Biosciences"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Glowing Loading Bar */}
            <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400 tracking-widest uppercase">
              Advancing Medical Excellence
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

