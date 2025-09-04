'use client';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

import HeroSection from '@/components/organisms/Hero';
import ServicesSection from '@/components/organisms/Services';
import AboutUsSection from '@/components/organisms/About';
import ProjectsSection from '@/components/organisms/OurWork';
import PricingSection from '@/components/organisms/Products';
import TestimonialsSection from '@/components/organisms/Testimonial';
import ContactSection from '@/components/organisms/Contact';
import WhyUs from '@/components/organisms/WhyChooseUsSection';
import TeamSection from '@/components/organisms/Team';

export default function Home() {
  const navigate = useRouter();

  return (
    <main className='relative'>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />

      <PricingSection />
      <TeamSection />
      <WhyUs />
      {/* <ProjectsSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
