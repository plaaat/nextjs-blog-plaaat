import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type PostSummary = {
    contentnum: number;
    title: string;
    content: string;
    date: string;
    category: string;
};

type PostsProps = {
    posts: PostSummary[];
};

const categoryData = [
    { id: 0, name: 'All'},
    { id: 1, name: 'PS'},
    { id: 2, name: 'WebDev'},
    { id: 3, name: 'Other'}
];

export async function getStaticProps() {
    const response = await fetch('https://api.plaaa.at/blog/posts.json');
    const posts: PostSummary[] = await response.json();

    return {
        props: {
            posts,
        },
        revalidate: 86400,
    };
}

function Posts({ posts }: PostsProps) {
    const [selectedCategory, setSelectedCategory] = useState(0);

    if (!posts) return <p>게시물을 불러오는 데 실패했습니다.</p>;

    const filteredPosts = posts.filter(post => selectedCategory === 0 || parseInt(post.category) === selectedCategory);
    const categoryButtonStyle = `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6`;

    return (
        <>
            <Head>
                <title>블로그 게시물 - PlaaaT</title>
            </Head>
            <div className="container mx-auto px-4 py-8 font-nanum-gothic">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">게시물 목록</h2>
                <div className="flex-col max-w-3xl mx-auto">
                    <div className="flex">
                        {categoryData.map(category => (
                            <button
                                key={category.id}
                                className={`${categoryButtonStyle} ${
                                    selectedCategory === category.id ? 'bg-blue-100' : ''
                                }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <ul className="space-y-4">
                        {filteredPosts.map(post => (
                            <li key={post.contentnum} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                                <Link href={`/posts/${post.contentnum}`} className={'block'}>
                                    <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800 mb-2">
                                            {post.title}
                                        </h3>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span className="bg-gray-100 px-3 py-1 rounded-full">
                                                {categoryData[parseInt(post.category)].name}
                                            </span>
                                            <span>{post.content}</span>
                                            <span>{post.date}</span>
                                        </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Posts;