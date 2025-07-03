import React from 'react';
import Head from 'next/head';

function About() {
    return (
        <>
            <Head>
                <title>소개 - PlaaaT의 블로그</title>
            </Head>
            <div className="container">
                <header className="space-x-12 space-y-8">
                    <br/>
                    <br/>
                    <div className="font-nanum-gothic text-3xl font-bold">
                        {"안녕하세요!"}
                        <br/>
                        {"저는 이남규입니다."}
                    </div>
                    <div className="font-nanum-gothic text-xl">
                        <br/>
                        <div className="flex items-center justify-between">
                            {"저는 2005년 12월 4일 생입니다."}
                            <br/>
                            <br/>
                            {" 현재 부산교육대학교에 재학중이며"}
                            <br/>
                            {" 파이썬과 러스트를 공부하고 있습니다!"}
                            <br/>
                            <br/>
                            {"대부분의 웹 사이트에서 plaaat0102 또는 plaaat로 활동 중 입니다."}
                            <br/>
                            <br/>
                            {"이 블로그는 자바스크립트 및 프론트엔드 공부와"}
                            <br/>
                            {"경험을 쌓기 위한 용도로 제작 중 입니다."}
                            <br/>
                            <br/>
                            <img src={"/logo.svg"} alt="로고" className="flex hidden md:block"/>
                        </div>
                        {"새로운 도전을 좋아합니당 ^ㅁ^"}
                        <br/>
                        <br/>
                    </div>
                    <div className="flex justify-center items-center space-x-6 font-nanum-gothic">
                        <a
                            href="https://github.com/plaaat"
                            target="_blank"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387
                            .599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416
                            -.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205
                            .084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775
                            .418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381
                            1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957
                            -.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297
                            -1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
                            0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192
                            .694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <span className="text-2xl">{" || "}</span>
                        <a href="https://www.acmicpc.net/user/plaaat0102"
                           target="_blank"
                           className="text-blue-700 hover:text-blue-700 transition-colors font-bold">{"/<>"}</a>
                        <span className="text-2xl">{" || "}</span>
                        <div className="group relative inline-block">
                            <a href="mailto:plaaat0102@plaaa.at"
                               target="_blank"
                               className="text-gray-700 hover:text-gray-900 text-3xl transition-colors font-bold">
                                {"@"}
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default About;