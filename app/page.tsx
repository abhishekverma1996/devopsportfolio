import { Preloader, Hero, Marquee, About, Work } from '@/components/sections';
import { Projects, Stack, Credentials, Contact } from '@/components/sections2';
import Runbooks from '@/components/Runbooks';
import OneViewPanel from '@/components/OneViewPanel';

export default function Home() {
  return (
    <>
      <Preloader />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Projects />
        <Stack />
        <Credentials />
        <Runbooks />
        <Contact />
        <Marquee />
        <OneViewPanel />
      </main>
    </>
  );
}
