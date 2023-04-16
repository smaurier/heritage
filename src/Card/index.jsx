import { useState } from 'react'
import { BackSide, FrontSide, MeshStandardMaterial, PlaneGeometry, TextureLoader } from 'three';
import frontTexture from '../assets/front.jpg';
import backTexture from '../assets/back.jpg';

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  const front = new TextureLoader().load(frontTexture);
  const back = new TextureLoader().load(backTexture);

  return (
    <mesh onClick={() => setIsFlipped(!isFlipped)}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial map={isFlipped ? back : front} side={isFlipped ? BackSide : FrontSide} />
      <meshStandardMaterial map={front} side={FrontSide} />
    </mesh>
  );
};

export default Card;