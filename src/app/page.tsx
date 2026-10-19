import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Strengths from '@/components/Strengths';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveals from '@/components/ScrollReveals';

export default function Home() {
  return <><ScrollReveals /><Navbar /><main id="main"><Hero /><About /><Experience /><Skills /><Projects /><Strengths /><Contact /></main><Footer /></>;
}
