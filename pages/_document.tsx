import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                {/* 여기에 폰트나 다른 공용 메타 태그를 넣을 수 있습니다. */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}