import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Head from 'next/head';

type PostDetailProps = {
    postContent: string;
    title: string;
};

export async function getStaticPaths() {
    const response = await fetch('https://api.plaaa.at/blog/posts.json');
    const posts = await response.json();

    const paths = posts.map((post: { contentnum: number }) => ({
        params: { id: post.contentnum.toString() },
    }));

    return { paths, fallback: 'blocking' }; // fallback: 'blocking'은 새 경로 요청 시 SSR
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const response = await fetch(`https://api.plaaa.at/blog/${params.id}.md`);
    const postContent = await response.text();

    const title = postContent.split('\n')[0].replace('# ', '');

    return {
        props: {
            postContent,
            title,
        }
    };
}


function PostDetail({ postContent, title }: PostDetailProps) {
    return (
        <>
            <Head>
                <title>{`${title} - PlaaaT의 블로그`}</title>
            </Head>
            <div className="markdown-content mx-auto px-4 py-8 font-nanum-gothic">
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={docco}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        },
                    }}
                >
                    {postContent}
                </ReactMarkdown>
            </div>
        </>
    );
}

export default PostDetail;