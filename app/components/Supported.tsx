"use client";

import Image from "next/image";
import { RevealOnScroll } from "./layout/reveal-on-scroll";

export function PoweredBySection() {
  return (
    <section className="py-24 font-display mb-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        
        {/* HEADLINE */}
        <RevealOnScroll>
          <h2 className="text-5xl font-semibold tracking-tight">
            Tumbuh dalam ekosistem akademik yang kuat
          </h2>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto">
            TechHub Invokasi didukung oleh institusi dan komunitas yang berperan
            dalam pengembangan teknologi dan inovasi mahasiswa.
          </p>
        </RevealOnScroll>

        {/* POWERED BY LABEL */}
        <RevealOnScroll delay={150}>
          <div className="mt-14 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm text-zinc-500">
            Powered By
          </div>
        </RevealOnScroll>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* POLITAP */}
          <RevealOnScroll delay={250}>
            <div className="rounded-xl border bg-white p-6 text-left transition hover:shadow-md">
              <div className="relative h-22 w-32">
                <Image
                  src="/assets/politap.png"
                  alt="Politeknik Negeri Ketapang"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                Politeknik Negeri Tapin sebagai institusi utama pendukung
                kegiatan akademik dan kemahasiswaan.
              </p>
            </div>
          </RevealOnScroll>

          {/* TEKNOLOGI INFORMASI */}
          <RevealOnScroll delay={320}>
            <div className="rounded-xl border bg-white p-6 text-left transition hover:shadow-md">
              <div className="relative h-22 w-32">
                <Image
                  src="/assets/logoTI.png"
                  alt="Teknologi Informasi"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                Program Studi Teknologi Informasi sebagai landasan keilmuan
                dan pengembangan kompetensi.
              </p>
            </div>
          </RevealOnScroll>

          {/* HMJ TETI */}
          <RevealOnScroll delay={390}>
            <div className="rounded-xl border bg-white p-6 text-left transition hover:shadow-md">
              <div className="relative h-22 w-32">
                <Image
                  src="/assets/logoHMJ.png"
                  alt="HMJ TETI"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                HMJ TETI sebagai wadah kolaborasi dan penggerak kegiatan
                mahasiswa Teknik Elektro dan Teknik Informatika.
              </p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
