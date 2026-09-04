/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WelcomeBlock } from './components/WelcomeBlock';
import { AudioPlayer } from './components/AudioPlayer';
import { Countdown } from './components/Countdown';
import { VisualGallery } from './components/VisualGallery';
import { GuestSection } from './components/GuestSection';
import { PreSaveSection } from './components/PreSaveSection';
import { PlatformsSection } from './components/PlatformsSection';
import { InstagramSection } from './components/InstagramSection';
import { MissionSignature } from './components/MissionSignature';
import { Footer } from './components/Footer';
import { GlobalTextures } from './components/GlobalTextures';

export default function App() {
  return (
    <div className="min-h-screen bg-wine-dark text-cream-aged selection:bg-orange-burnt selection:text-white-off relative">
      <GlobalTextures />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <WelcomeBlock />
        <Countdown variant="compact" />
        <AudioPlayer />
        <VisualGallery />
        <GuestSection />
        <Countdown variant="featured" />
        <PreSaveSection />
        <PlatformsSection />
        <InstagramSection />
        <MissionSignature />
      </main>

      <Footer />
    </div>
  );
}
