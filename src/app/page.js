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
  const [hoveredLink, setHoveredLink] = useState(null);

  function handleMouseEnter(index) {
    setHoveredLink(index);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      setHoveredLink(null);
    }, 0); // Small delay for smooth transition
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div id="main-container-master">
        <div className="content-container">
          <div className="profile-section">
            <Image className="profile-img" src={ProfilePhoto} alt="profile-photo" width={100} height={100} />
            <h1>Cultertraz</h1>
            <p style={{fontWeight: '470'}}>in soft strains of dusk 🌇 <span style={{fontWeight: '800'}}>| music producer</span></p>
            {/* <div style={{width: '100%', border: 'solid 1px black', marginTop: '10px'}}></div> */}
            <div className="socials">
              <Link target="_blank" href="https://www.instagram.com/cultertraz"><div className="social-background"><Image src={Instagram} alt="social" width={999} height={999} /></div></Link>
              <Link target="_blank" href="https://www.threads.net/@cultertraz"><div className="social-background"><Image src={Threads} alt="social" width={999} height={999} /></div></Link>
              <Link target="_blank" href="https://www.tiktok.com/@cultertraz"><div className="social-background"><Image src={TikTok} alt="social" width={999} height={999} /></div></Link>
              <Link target="_blank" href="https://x.com/cultertraz"><div className="social-background"><Image src={X} alt="social" width={999} height={999} /></div></Link>
            </div>
          </div>

          {/* SoundPacks */}
          <div className="myShop-section">
            <h1>SoundPacks</h1>
            <div className="soundpacks-cont">
              {soundPacks.map((Pack, index) => {
                const styler = hoveredIndex === index ? { border: `solid 2px ${Pack.borderColor}` } : {};
                const stylerText = hoveredIndex === index ? { color: `${Pack.borderColor}` } : {};

               return(
                <div className="the-soundpacks" key={index}>
                  <Link target="_blank" href={Pack.productLink}>
                    <Image
                        onMouseEnter={() => setHoveredIndex(index)} 
                        onMouseLeave={() => setHoveredIndex(null)} 
                        style={styler} 
                        src={Pack.image} alt="soundpack" className="soundpack-image" width={999} height={999} />
                    <p className="soundpack-text"
                       onMouseEnter={() => setHoveredIndex(index)} 
                       onMouseLeave={() => setHoveredIndex(null)} 
                       style={stylerText} 
                    >{Pack.title}</p>
                    <p className="soundpack-text"
                       onMouseEnter={() => setHoveredIndex(index)} 
                       onMouseLeave={() => setHoveredIndex(null)} 
                       style={stylerText} 
                    >{Pack.price}</p>
                  </Link>
                </div>
               )
              })}
            </div>
          </div>

          {/* Music Section */}
          <div className="my-Music-section">
            <h1 style={{textAlign: 'center'}}>Discography</h1>
            <div className="the-music-links-actual-cont">
            {MusicArray.map((Music, index) => (
              <Link
                style={{ textDecoration: "none", color: "black"}}
                href={Music.MusicLink}
                key={index}
                target="_blank"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="all-song-links">
                  <Image
                    style={{
                      boxShadow: `0 4px 30px -8px ${Music.boxShadowColor}`,
                      marginTop: hoveredLink === index ? "-10px" : "0",
                      transition: "margin-top 0.3s ease-in-out",
                      borderRadius: "5px"
                    }}
                    className="platform-img"
                    src={Music.MusicIcon}
                    alt="platform"
                    width={60}
                    height={60}
                  />
                  <div style={hoveredLink === index ? {color: `${Music.boxShadowColor}`, transition: "margin-right 0.3s ease-in-out"} : {}} className="platfrom-texts">
                    <h3>{Music.PlatformName}</h3>
                    <p className="mini-grey-text-music"
                      style={{
                        width: "45%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: 'var(--darkGrey)'
                      }}
                    >
                      {Music.previewURL}
                    </p>
                  </div>
                  <Image
                    style={{
                      marginRight: hoveredLink === index ? "-6px" : "0",
                      transition: "margin-right 0.3s ease-in-out",
                    }}
                    className="arrow-img"
                    src={Arrow}
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
