"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MusicArray from "../MusicArray";
import Arrow from "../../../public/arrow.svg";
import MainStyle from "../../app/MainStyle.css"
import MainStyleResponsive from "../../app/MainStyleResponsive.css"

export default function () {

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


    return(<div>
            <div className="my-Music-section">
            {/* <h1 style={{textAlign: 'center'}}>Discography</h1> */}
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
    </div>)
}