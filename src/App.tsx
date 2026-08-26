/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SongStory } from './components/SongStory';
import { AudioPlayer } from './components/AudioPlayer';
import { Countdown } from './components/Countdown';
import { VisualGallery } from './components/VisualGallery';
import { GuestSection } from './components/GuestSection';
import { PreSaveSection } from './components/PreSaveSection';
import { InstagramSection } from './components/InstagramSection';
import { MissionSignature } from './components/MissionSignature';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-wine-dark text-cream-aged selection:bg-orange-burnt selection:text-white-off">
      <Header />
      
      <main>
        <Hero />
        <SongStory />
        <AudioPlayer />
        <Countdown />
        <VisualGallery />
        <GuestSection />
        <PreSaveSection />
        <InstagramSection />
        <MissionSignature />
      </main>

      <Footer />
    </div>
  );
}
