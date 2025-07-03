import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import py from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import rs from 'react-syntax-highlighter/dist/cjs/languages/hljs/rust';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/hljs/cpp';
import Head from 'next/head';

SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('rust', rs);
SyntaxHighlighter.registerLanguage('cpp', cpp);


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
                        code({ node, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return match ? (
                                <SyntaxHighlighter
                                    style={docco} // 스타일은 원하는 것으로 변경 가능
                                    language={match[1]}
                                    PreTag="div"
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
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