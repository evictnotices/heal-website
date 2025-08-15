import { Hero } from '../components/sections/hero';
import { Features } from '../components/sections/features';
import { PolygonBackground } from '../components/three/polygon-background';

export function Home() {
  return (
    <main className="relative">
      <PolygonBackground />
      <Hero />
      <Features />
    </main>
  );
}