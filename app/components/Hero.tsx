import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedWords } from "./layout/animate-text";
import { AnimatedFadeUp } from "./layout/animate-up";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-white via-zinc-50 to-white" />

      <div
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      <div
        className="
          absolute inset-0 -z-10
          [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto max-w-6xl px-6 text-center text-black pt-24 md:pt-32 -translate-y-10 md:-translate-y-16">

        {/* HEADLINE */}
        <h1 className="flex flex-wrap justify-center gap-x-4 text-6xl md:text-8xl font-extrabold tracking-tight leading-none font-display border-y border-black/10 py-3">
          <AnimatedWords text="TechHub" />
          <AnimatedWords text="Invokasi" className="text-[#075084]" />
        </h1>


        {/* SUBHEADLINE */}
        <p className="mx-auto max-w-xl text-base md:text-lg text-zinc-600 font-display border-b border-black/10 py-3">
          <AnimatedWords text="Komunitas bagi para mahasiswa untuk belajar, berkolaborasi, dan berinovasi dalam bidang teknologi informasi." />
        </p>

        {/* CTA */}
        <AnimatedFadeUp delay={1500}>
          <div className="mt-6 flex justify-center gap-2 font-semibold font-display">
            <Button size="lg" className="bg-[#075084] text-white hover:bg-[#075084]/90" asChild>
              <Link href="#program">Program Kerja</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-zinc-300 text-zinc-800 hover:bg-zinc-100"
              asChild
            >
              <Link href="/about">Tentang TechHub</Link>
            </Button>
          </div>
        </AnimatedFadeUp>

      </div>
    </section>
  );
}
