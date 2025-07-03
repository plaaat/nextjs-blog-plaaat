// components/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white font-nanum-gothic">
            <nav className="bg-gray-800 p-4">
                <ul className="container mx-auto flex justify-between items-center">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center space-x-4">
                                <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                            </a>
                        </Link>
                    </li>
                    <li className="flex space-x-4">
                        <Link href="/" legacyBehavior>
                            <a className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition duration-300">홈</a>
                        </Link>
                        <Link href="/about" legacyBehavior>
                            <a className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition duration-300">소개</a>
                        </Link>
                        <Link href="/posts" legacyBehavior>
                            <a className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition duration-300">블로그</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
}