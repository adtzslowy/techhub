"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="outline"
      aria-label="Back to top"
      className={clsx(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-sm transition-all duration-300 cursor-pointer",
        "bg-white text-zinc-800 hover:bg-zinc-100",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
