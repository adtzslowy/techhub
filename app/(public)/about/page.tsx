import { Navbar } from "@/app/components/layout/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang"
}

export default function About() {
    return (
        <>
            <Navbar/>
        </>
    )
}