'use client'

import React, { useEffect, useState } from 'react';
import { TimeLineIcon } from "./icons";

interface TimeLineItem {
    year: string;
    title: string;
    description: string;
}

const timelineData: TimeLineItem[] = [
    {
        year: '1984',
        title: 'First Macintosh computer',
        description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
      personal computer. It played a pivotal role in establishing desktop publishing as a general
      office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
      in a beige case with integrated carrying handle; it came with a keyboard and single-button
      mouse.`
    },
    {
        year: '1998',
        title: 'iMac',
        description: `iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
      been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
      and has evolved through seven distinct forms`
    },
    {
        year: '2001',
        title: 'iPod',
        description: `The iPod is a discontinued series of portable media players and multi-purpose mobile devices
      designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
      8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
      million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
      over 20 years, the iPod brand is the oldest to be discontinued by Apple`
    },
    {
        year: '2007',
        title: 'iPhone',
        description: `iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
      operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
      January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
      of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
      accounts for 15.6% of global smartphone market share`
    },
    {
        year: '2015',
        title: 'Apple Watch',
        description: `The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
      tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
      iOS and other Apple products and services`
    }
];

export default function TimeLine() {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.timeline-item');
            let newActiveIndices: number[] = [];

            // 화면 중간 위치
            const middleHeight = window.innerHeight / 1.5;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                // if (rect.bottom <= window.innerHeight) {
                //     newActiveIndices.push(index);
                // }
                // 중간 지점 기준으로 화면 안에 들어왔을 때
                if (rect.bottom <= middleHeight) {
                    newActiveIndices.push(index);
                }
            });

            setActiveIndices(newActiveIndices);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {timelineData.map((item, index) => (
                <li key={index} className='timeline-item'>
                    <div className="timeline-middle">
                        <TimeLineIcon color={activeIndices.includes(index) ? "text-primary" : ""} />
                    </div>
                    <div className={`timeline-content ${index % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end md:mb-10'}`}>
                        <time className="font-mono italic">{item.year}</time>
                        <div className="text-lg font-black">{item.title}</div>
                        <p>{item.description}</p>
                    </div>
                    <hr className={activeIndices.includes(index) ? 'bg-primary' : ''} />
                </li>
            ))}
        </ul>
    );
}