"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function FullScreenIframe() {
    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, []);

    return (
        <>
            <Head>
                <title>Rezware | Internal 89 UNC!</title>
            </Head>
            <iframe 
                src="https://lovely-area-810581.framer.app" 
                style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", border: "none" }}
                allowFullScreen
            ></iframe>
        </>
    );
}

