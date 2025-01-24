'use client'

import React, { useEffect, useState } from 'react';

export default function Loading():React.ReactElement | null {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); // 3초 후에 isVisible을 false로 설정
        }, 3000);

        // 컴포넌트가 언마운트될 때 타이머를 정리
        return () => clearTimeout(timer);
    }, []);

    // isVisible이 false일 때 아무것도 렌더링하지 않음
    if (!isVisible) return null;

    return (
        <div className="h-screen flex justify-center justify-items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    );
}