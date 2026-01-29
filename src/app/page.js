"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MainStyle from "./MainStyle.css";
import MainStyleResponsive from "./MainStyleResponsive.css"
import soundPacks from "./SoundPacks-Array";
import MusicArray from "./MusicArray";

import ProfilePhoto from "../../public/607357854_18066694271620541_7996690773655010905_n.jpg";
import Instagram from "../../public/instagram.svg";
import Threads from "../../public/threads.svg";
import TikTok from "../../public/tiktok.svg";
import X from "../../public/x.svg";
import Arrow from "../../public/arrow.svg";

export default function Main() {
  return (
    <>
      <div id="main-container-master">
        <div className="content-container">
          <h1>turning noise into reposeful composition</h1>
          <div className="links-to">
            <Link href="/my-music">Discography</Link>
            <Link href="https://shop.cultertraz.com/">SoundPacks</Link>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
