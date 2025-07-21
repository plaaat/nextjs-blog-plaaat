import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="개발과 일상을 기록하는 블로그" />
        </Head>
        <div className="min-h-screen bg-white font-nanum-gothic">
            <nav className="bg-gray-800 p-4">
                <ul className="container mx-auto flex justify-between items-center">
                    <li>
                        <Link href="/" className="flex items-center space-x-4">
                            <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                        </Link>
                    </li>
                    <li className="flex space-x-4">
                        <Link href="/" className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition duration-300">
                            홈
                        </Link>
                        <Link href="/about" className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition duration-300">
                            소개
                        </Link>
                        <Link href="/posts" className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition duration-300">
                            블로그
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    </>
    );
}