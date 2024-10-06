import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "평수계산기 | 쉽고 빠른 면적 변환",
  description: "평, 제곱미터, 제곱피트 간 간편한 변환. 다국어 지원 제공.",
  keywords: [
    // 한국어 키워드
    "평수계산기, 면적변환, 제곱미터, 제곱피트, 부동산 면적, 주거면적, 평방미터",
    // 영어 키워드
    "pyeong calculator, area converter, square meters, square feet, property size, living space",
    // 중국어 키워드
    "平方计算器, 面积转换, 平方米, 平方英尺, 房产面积, 居住空间",
    // 일본어 키워드
    "坪数計算機, 面積変換, 平方メートル, 平方フィート, 不動産面積, 居住スペース",
    // 러시아어 키워드
    "калькулятор пхён, конвертер площади, квадратные метры, квадратные футы, площадь недвижимости, жилое пространство"
  ].join(", "),
  openGraph: {
    title: "평수계산기 - 쉽고 빠른 면적 변환",
    description: "평, 제곱미터, 제곱피트 간 간편한 변환. 다국어 지원 제공.",
    images: [
      {
        url: "https://pyeong.ludgi.ai/logo.webp",
        width: 1200,
        height: 630,
        alt: "평수계산기",
      },
    ],

    locale: "en_US",
    alternateLocale: ["ko_KR", "ru_RU", "ja_JP"],
    // ... 기존 설정 ...
  },
  twitter: {
    title: "평수계산기 - 쉽고 빠른 면적 변환",
    description: "평, 제곱미터, 제곱피트 간 간편한 변환. 다국어 지원 제공.",
    // ... 기존 설정 ...
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "추후_추가할_구글_인증_코드",
  //   yandex: "추후_추가할_얀덱스_인증_코드",
  // },
  // ... 기존의 alternates 설정 ...
};

const pubId = "ca-pub-5823741955283998"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content={pubId} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Funding Choices 스크립트 */}
        <Script
          id="google-funding-choices"
          strategy="afterInteractive"
          src={`https://fundingchoicesmessages.google.com/i/${pubId}?ers=1`}
        />
        {/* Google FC Present 스크립트 */}
        <Script
          id="google-fc-present"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
          }}
        />
      </body>
    </html>
  );
}
