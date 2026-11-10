import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/700.css';
import '@fontsource/sora/400.css';
import '@fontsource/sora/600.css';
import './globals.css';
import Behaviors from './behaviors';
import Header from '@/components/HeaderClient';
import { Footer } from '@/components/sections2';
import ProgressBar from '@/components/ProgressBar';

const themeBootScript = `(function(){var t=null;try{t=localStorage.getItem('theme');}catch(e){}if(t!=='light'&&t!=='dark')t='light';document.documentElement.setAttribute('data-theme',t);})();`;

export const metadata: Metadata = {
  title: 'Abhishek Verma | DevOps Engineer — Azure, CI/CD & Cloud Infrastructure',
  description:
    'DevOps Engineer specializing in Azure DevOps, CI/CD pipelines, Microsoft Azure cloud infrastructure, Kubernetes, Terraform, and site reliability engineering.',
  authors: [{ name: 'Abhishek Verma' }],
  icons: { icon: '/req/img/fav/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#f4f7fb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="is-loading">
        {/* Ambient backdrop */}
        <div className="backdrop" aria-hidden="true">
          <div className="backdrop__grid"></div>
          <div className="backdrop__glow"></div>
          <div className="backdrop__grain"></div>
        </div>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <ProgressBar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
        <Behaviors />
      </body>
    </html>
  );
}
