"use client";

import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#075084] text-zinc-800 border-t border-white/5 font-display">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-3 border-b border-zinc-950 pb-20">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold text-white font-display">
              TechHub Invokasi
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white">
              Komunitas mahasiswa yang berfokus pada pengembangan
              teknologi, kolaborasi, dan inovasi di lingkungan akademik.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="font-display">
            <h4 className="text-2xl font-semibold tracking-wider text-white">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link href="/progja" className="hover:text-white transition">
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Tentang TechHub
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT / SOCIAL */}
          <div className="font-display">
            <h4 className="text-2xl font-semibold tracking-wider text-white">
                Follow Us
            </h4>

            <div className="mt-4 flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="text-white"
                asChild
              >
                <Link href="https://instagram.com/techhub_invokasi.politap/" target="_blank">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white"
                asChild
              >
                <Link href="https://github.com/techhub-invokasi/" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white"
                asChild
              >
                <Link href="mailto:techhub.invokasi@politap.ac.id" target="_blank">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white pt-8 text-sm md:flex-row">
          <p className="text-white">
            © {new Date().getFullYear()} TechHub Invokasi. All rights reserved.
          </p>

          <p className="text-white">
            Developed with ❤️ by Programming Division
          </p>
        </div>
      </div>
    </footer>
  );
}
