"use client";

import { Mail, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "../layout/reveal-on-scroll";

export function ContactSection() {
  return (
    <section className="py-24 font-display">
      <div className="mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-6xl font-semibold tracking-tight">
              Hubungi Kami
            </h2>
            <p className="mt-4 text-base text-zinc-600">
              Punya pertanyaan, ide kolaborasi, atau ingin bergabung dengan
              TechHub Invokasi? Kami siap terhubung denganmu.
            </p>
          </div>
        </RevealOnScroll>

        {/* CONTENT */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* EMAIL */}
          <RevealOnScroll delay={100}>
            <div className="rounded-xl border p-6 transition hover:shadow-sm">
              <Mail className="h-6 w-6 text-zinc-800" />
              <h3 className="mt-4 text-lg font-semibold">
                Email
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Kirim pertanyaan atau proposal resmi melalui email.
              </p>
              <Button
                variant="link"
                className="mt-3 px-0 text-zinc-800"
                asChild
              >
                <Link href="mailto:techhub@poltap.ac.id">
                  techhub.invokasi@politap.ac.id
                </Link>
              </Button>
            </div>
          </RevealOnScroll>

          {/* INSTAGRAM */}
          <RevealOnScroll delay={200}>
            <div className="rounded-xl border p-6 transition hover:shadow-sm">
              <Instagram className="h-6 w-6 text-zinc-800" />
              <h3 className="mt-4 text-lg font-semibold">
                Instagram
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Ikuti kegiatan dan hubungi kami melalui DM Instagram.
              </p>
              <Button
                variant="link"
                className="mt-3 px-0 text-zinc-800"
                asChild
              >
                <Link
                  href="https://instagram.com/techhub_invokasi.politap/"
                  target="_blank"
                >
                  @techhub_invokasi.politap
                </Link>
              </Button>
            </div>
          </RevealOnScroll>

          {/* LOCATION */}
          <RevealOnScroll delay={300}>
            <div className="rounded-xl border p-6 transition hover:shadow-sm">
              <MapPin className="h-6 w-6 text-zinc-800" />
              <h3 className="mt-4 text-lg font-semibold">
                Lokasi
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Jl. Rangge Sentap, Dalong, Kec. Delta Pawan, Kab. Ketapang,
                Kalimantan Barat
              </p>
              <p className="mt-7 text-sm text-zinc-500">
                Politeknik Negeri Ketapang
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
