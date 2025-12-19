export function DinosaurIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Sky */}
      <rect width="400" height="300" fill="#87CEEB"/>

      {/* Sun */}
      <circle cx="350" cy="50" r="30" fill="#FFD700"/>

      {/* Ground */}
      <ellipse cx="200" cy="300" rx="250" ry="50" fill="#90EE90"/>

      {/* Mountains */}
      <polygon points="50,200 100,120 150,200" fill="#8B7355"/>
      <polygon points="250,200 320,100 390,200" fill="#A0826D"/>

      {/* Dino body */}
      <ellipse cx="200" cy="220" rx="80" ry="60" fill="#6BCF7F"/>

      {/* Dino head */}
      <circle cx="260" cy="180" r="40" fill="#6BCF7F"/>

      {/* Eye */}
      <circle cx="275" cy="175" r="8" fill="white"/>
      <circle cx="277" cy="175" r="5" fill="black"/>

      {/* Smile */}
      <path d="M 260 190 Q 270 200 280 190" stroke="black" fill="none" strokeWidth="3" strokeLinecap="round"/>

      {/* Legs */}
      <rect x="160" y="260" width="20" height="40" fill="#5AB36A" rx="5"/>
      <rect x="200" y="260" width="20" height="40" fill="#5AB36A" rx="5"/>
      <rect x="240" y="260" width="20" height="40" fill="#5AB36A" rx="5"/>

      {/* Tail */}
      <path d="M 120 220 Q 80 200 60 180" stroke="#6BCF7F" strokeWidth="30" fill="none" strokeLinecap="round"/>

      {/* Spots */}
      <circle cx="180" cy="210" r="10" fill="#5AB36A"/>
      <circle cx="220" cy="230" r="8" fill="#5AB36A"/>
      <circle cx="250" cy="200" r="7" fill="#5AB36A"/>

      {/* Stars */}
      <text x="50" y="60" fontSize="20" fill="#FFD700">⭐</text>
      <text x="150" y="40" fontSize="15" fill="#FFD700">✨</text>
    </svg>
  );
}

export function SpaceIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Space background */}
      <rect width="400" height="300" fill="#001a33"/>

      {/* Stars */}
      <circle cx="50" cy="50" r="2" fill="white"/>
      <circle cx="100" cy="30" r="1.5" fill="white"/>
      <circle cx="150" cy="70" r="2" fill="white"/>
      <circle cx="350" cy="100" r="1.5" fill="white"/>
      <circle cx="300" cy="50" r="2" fill="white"/>
      <circle cx="80" cy="150" r="1" fill="white"/>
      <circle cx="370" cy="200" r="2" fill="white"/>

      {/* Earth */}
      <circle cx="350" cy="250" r="40" fill="#4A90E2"/>
      <ellipse cx="350" cy="250" rx="40" ry="10" fill="#6BCF7F" opacity="0.6"/>

      {/* Moon */}
      <circle cx="80" cy="80" r="25" fill="#D3D3D3"/>
      <circle cx="85" cy="75" r="6" fill="#B0B0B0"/>
      <circle cx="72" cy="88" r="4" fill="#B0B0B0"/>

      {/* Rocket */}
      <polygon points="200,250 180,200 220,200" fill="#FF6B9D"/>
      <rect x="180" y="200" width="40" height="60" fill="#E74C3C" rx="5"/>
      <circle cx="200" cy="220" r="12" fill="#4A90E2"/>

      {/* Rocket flames */}
      <polygon points="185,260 190,280 195,260" fill="#FFD93D"/>
      <polygon points="200,260 200,285 200,260" fill="#FF8C42"/>
      <polygon points="205,260 210,280 215,260" fill="#FFD93D"/>

      {/* Planets */}
      <circle cx="280" cy="120" r="20" fill="#FF8C42"/>
      <ellipse cx="280" cy="120" rx="30" ry="3" fill="#FFD93D" opacity="0.5"/>

      {/* Shooting star */}
      <line x1="120" y1="120" x2="180" y2="100" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="180" cy="100" r="4" fill="#FFD93D"/>
    </svg>
  );
}

export function PrincessIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Sky */}
      <rect width="400" height="300" fill="#FFE4E1"/>

      {/* Castle */}
      <rect x="250" y="150" width="120" height="150" fill="#D3D3D3"/>
      <rect x="260" y="180" width="30" height="40" fill="#8B4513" rx="15"/>
      <polygon points="250,150 310,100 370,150" fill="#FF6B9D"/>

      {/* Castle towers */}
      <rect x="240" y="100" width="30" height="50" fill="#D3D3D3"/>
      <rect x="350" y="100" width="30" height="50" fill="#D3D3D3"/>
      <polygon points="240,100 255,80 270,100" fill="#FF6B9D"/>
      <polygon points="350,100 365,80 380,100" fill="#FF6B9D"/>

      {/* Princess */}
      <circle cx="120" cy="200" r="30" fill="#FFD1DC"/>

      {/* Crown */}
      <polygon points="110,175 120,160 130,175" fill="#FFD700"/>
      <circle cx="120" cy="165" r="4" fill="#FF6B9D"/>

      {/* Eyes */}
      <circle cx="112" cy="195" r="4" fill="black"/>
      <circle cx="128" cy="195" r="4" fill="black"/>

      {/* Smile */}
      <path d="M 110 210 Q 120 215 130 210" stroke="#FF6B9D" fill="none" strokeWidth="2"/>

      {/* Dress */}
      <polygon points="120,230 90,300 150,300" fill="#9B7EDE"/>
      <ellipse cx="120" cy="265" rx="30" ry="10" fill="#FF6B9D"/>

      {/* Dragon friend */}
      <ellipse cx="280" cy="240" rx="40" ry="30" fill="#6BCF7F"/>
      <circle cx="310" cy="220" r="20" fill="#6BCF7F"/>
      <circle cx="318" cy="215" r="5" fill="black"/>
      <path d="M 305 230 Q 310 235 315 230" stroke="black" fill="none" strokeWidth="2"/>

      {/* Dragon wings */}
      <ellipse cx="260" cy="230" rx="25" ry="15" fill="#9B7EDE" opacity="0.6"/>
      <ellipse cx="300" cy="230" rx="25" ry="15" fill="#9B7EDE" opacity="0.6"/>

      {/* Hearts */}
      <text x="160" y="180" fontSize="25" fill="#FF6B9D">💕</text>
      <text x="200" y="140" fontSize="20" fill="#FFD700">✨</text>
    </svg>
  );
}

export function SuperheroIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* City background */}
      <rect width="400" height="300" fill="#87CEEB"/>

      {/* Buildings */}
      <rect x="20" y="180" width="60" height="120" fill="#808080"/>
      <rect x="100" y="150" width="70" height="150" fill="#696969"/>
      <rect x="190" y="170" width="55" height="130" fill="#778899"/>
      <rect x="260" y="140" width="65" height="160" fill="#708090"/>
      <rect x="340" y="160" width="50" height="140" fill="#696969"/>

      {/* Windows */}
      <rect x="30" y="190" width="15" height="15" fill="#FFD93D"/>
      <rect x="55" y="190" width="15" height="15" fill="#FFD93D"/>
      <rect x="110" y="160" width="15" height="15" fill="#FFD93D"/>
      <rect x="135" y="160" width="15" height="15" fill="#FFD93D"/>

      {/* Superhero */}
      <circle cx="200" cy="100" r="25" fill="#FFD1DC"/>

      {/* Mask */}
      <ellipse cx="200" cy="100" rx="30" ry="12" fill="#4A90E2"/>

      {/* Eyes */}
      <circle cx="192" cy="100" r="5" fill="white"/>
      <circle cx="208" cy="100" r="5" fill="white"/>

      {/* Body */}
      <rect x="180" y="125" width="40" height="50" fill="#FF8C42" rx="5"/>

      {/* Cape */}
      <path d="M 180 130 L 160 200 L 180 175 Z" fill="#E74C3C"/>
      <path d="M 220 130 L 240 200 L 220 175 Z" fill="#E74C3C"/>

      {/* Arms */}
      <rect x="160" y="130" width="15" height="40" fill="#FFD1DC" rx="7"/>
      <rect x="225" y="130" width="15" height="40" fill="#FFD1DC" rx="7"/>

      {/* Legs */}
      <rect x="185" y="175" width="12" height="35" fill="#4A90E2" rx="6"/>
      <rect x="203" y="175" width="12" height="35" fill="#4A90E2" rx="6"/>

      {/* Lightning bolt */}
      <polygon points="200,50 195,70 205,70 200,85 210,65 200,65" fill="#FFD93D"/>

      {/* Stars */}
      <text x="150" y="60" fontSize="20" fill="#FFD93D">⭐</text>
      <text x="240" y="70" fontSize="25" fill="#FFD93D">✨</text>
      <text x="180" y="40" fontSize="15" fill="#FFD93D">💫</text>
    </svg>
  );
}

export function JungleIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Sky */}
      <rect width="400" height="300" fill="#87CEEB"/>

      {/* Trees */}
      <rect x="50" y="180" width="20" height="120" fill="#8B4513"/>
      <circle cx="60" cy="160" r="40" fill="#228B22"/>

      <rect x="150" y="190" width="20" height="110" fill="#8B4513"/>
      <circle cx="160" cy="170" r="35" fill="#228B22"/>

      <rect x="320" y="185" width="20" height="115" fill="#8B4513"/>
      <circle cx="330" cy="165" r="38" fill="#228B22"/>

      {/* Ground */}
      <ellipse cx="200" cy="300" rx="200" ry="30" fill="#90EE90"/>

      {/* Tiger */}
      <ellipse cx="200" cy="240" rx="50" ry="35" fill="#FF8C42"/>
      <circle cx="230" cy="220" r="25" fill="#FF8C42"/>

      {/* Stripes */}
      <line x1="180" y1="230" x2="180" y2="250" stroke="#000" strokeWidth="3"/>
      <line x1="200" y1="225" x2="200" y2="255" stroke="#000" strokeWidth="3"/>
      <line x1="220" y1="230" x2="220" y2="250" stroke="#000" strokeWidth="3"/>

      {/* Eyes */}
      <circle cx="222" cy="215" r="5" fill="white"/>
      <circle cx="238" cy="215" r="5" fill="white"/>
      <circle cx="224" cy="215" r="3" fill="black"/>
      <circle cx="240" cy="215" r="3" fill="black"/>

      {/* Nose */}
      <circle cx="230" cy="225" r="4" fill="black"/>

      {/* Monkey */}
      <circle cx="100" cy="140" r="15" fill="#8B4513"/>
      <circle cx="100" cy="160" r="12" fill="#8B4513"/>
      <circle cx="94" cy="137" r="3" fill="black"/>
      <circle cx="106" cy="137" r="3" fill="black"/>

      {/* Parrot */}
      <ellipse cx="340" cy="140" rx="12" ry="18" fill="#FF6B9D"/>
      <circle cx="340" cy="130" r="10" fill="#FFD93D"/>
      <circle cx="337" cy="128" r="3" fill="black"/>
      <polygon points="345,130 352,130 348,134" fill="#FF8C42"/>

      {/* Butterflies */}
      <ellipse cx="270" cy="100" rx="8" ry="12" fill="#FF6B9D"/>
      <ellipse cx="285" cy="100" rx="8" ry="12" fill="#9B7EDE"/>

      {/* Flowers */}
      <circle cx="120" cy="280" r="8" fill="#FF6B9D"/>
      <circle cx="280" cy="275" r="8" fill="#FFD93D"/>
      <circle cx="180" cy="285" r="8" fill="#9B7EDE"/>
    </svg>
  );
}

export function PirateIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Sky */}
      <rect width="400" height="150" fill="#87CEEB"/>

      {/* Ocean */}
      <rect y="150" width="400" height="150" fill="#4A90E2"/>

      {/* Waves */}
      <path d="M 0 170 Q 50 160 100 170 T 200 170 T 300 170 T 400 170" fill="none" stroke="#5BA3E2" strokeWidth="3"/>
      <path d="M 0 190 Q 50 180 100 190 T 200 190 T 300 190 T 400 190" fill="none" stroke="#5BA3E2" strokeWidth="3"/>

      {/* Ship */}
      <polygon points="150,200 250,200 270,250 130,250" fill="#8B4513"/>

      {/* Mast */}
      <rect x="195" y="120" width="10" height="80" fill="#654321"/>

      {/* Sail */}
      <polygon points="205,130 280,150 205,170" fill="white"/>

      {/* Pirate flag */}
      <rect x="195" y="100" width="3" height="30" fill="#654321"/>
      <rect x="198" y="100" width="40" height="25" fill="black"/>
      <text x="205" y="120" fontSize="18" fill="white">☠️</text>

      {/* Captain */}
      <circle cx="200" cy="190" r="15" fill="#FFD1DC"/>

      {/* Hat */}
      <ellipse cx="200" cy="180" rx="20" ry="8" fill="black"/>
      <polygon points="185,180 200,165 215,180" fill="black"/>

      {/* Eye patch */}
      <circle cx="205" cy="190" r="5" fill="black"/>

      {/* Treasure chest */}
      <rect x="310" y="260" width="60" height="40" fill="#8B4513" rx="5"/>
      <rect x="320" y="265" width="40" height="15" fill="#FFD700"/>

      {/* Island */}
      <ellipse cx="350" cy="230" rx="50" ry="20" fill="#F4A460"/>
      <polygon points="340,230 350,200 360,230" fill="#228B22"/>

      {/* Sun */}
      <circle cx="50" cy="50" r="30" fill="#FFD93D"/>

      {/* Seagull */}
      <path d="M 100 80 Q 110 75 120 80" stroke="white" strokeWidth="3" fill="none"/>
      <path d="M 110 75 Q 110 70 110 75" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function DragonIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Sky */}
      <rect width="400" height="200" fill="#B0E0E6"/>

      {/* Clouds */}
      <ellipse cx="80" cy="50" rx="40" ry="20" fill="white"/>
      <ellipse cx="320" cy="70" rx="50" ry="25" fill="white"/>

      {/* Mountains */}
      <polygon points="0,200 100,100 200,200" fill="#8B8B8B"/>
      <polygon points="200,200 300,80 400,200" fill="#A9A9A9"/>

      {/* Ground */}
      <rect y="200" width="400" height="100" fill="#90EE90"/>

      {/* Dragon body */}
      <ellipse cx="200" cy="180" rx="60" ry="45" fill="#6BCF7F"/>

      {/* Dragon head */}
      <circle cx="260" cy="150" r="35" fill="#6BCF7F"/>

      {/* Dragon snout */}
      <ellipse cx="285" cy="155" rx="20" ry="15" fill="#5AB36A"/>

      {/* Nostrils */}
      <circle cx="292" cy="152" r="3" fill="#228B22"/>
      <circle cx="292" cy="162" r="3" fill="#228B22"/>

      {/* Eye */}
      <circle cx="265" cy="145" r="8" fill="white"/>
      <circle cx="267" cy="145" r="5" fill="black"/>

      {/* Smile */}
      <path d="M 270 165 Q 280 172 290 165" stroke="black" fill="none" strokeWidth="3" strokeLinecap="round"/>

      {/* Wings */}
      <ellipse cx="180" cy="160" rx="45" ry="30" fill="#FFD700" opacity="0.7" transform="rotate(-30 180 160)"/>
      <ellipse cx="220" cy="160" rx="45" ry="30" fill="#FFD700" opacity="0.7" transform="rotate(30 220 160)"/>

      {/* Legs */}
      <rect x="175" y="215" width="15" height="35" fill="#5AB36A" rx="7"/>
      <rect x="210" y="215" width="15" height="35" fill="#5AB36A" rx="7"/>

      {/* Tail */}
      <path d="M 140 180 Q 100 190 80 170" stroke="#6BCF7F" strokeWidth="25" fill="none" strokeLinecap="round"/>
      <polygon points="75,165 80,155 85,165" fill="#E74C3C"/>

      {/* Spikes on back */}
      <polygon points="190,155 195,140 200,155" fill="#9B7EDE"/>
      <polygon points="205,150 210,135 215,150" fill="#9B7EDE"/>
      <polygon points="220,155 225,140 230,155" fill="#9B7EDE"/>

      {/* Fire breath */}
      <polygon points="300,155 320,150 315,160" fill="#FF8C42"/>
      <polygon points="320,150 335,148 330,155" fill="#FFD93D"/>

      {/* Hearts (friendly dragon) */}
      <text x="150" y="120" fontSize="20" fill="#FF6B9D">💚</text>
      <text x="280" y="110" fontSize="18" fill="#FF6B9D">✨</text>
    </svg>
  );
}

export function SoccerIllustration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block'}}>
      {/* Sky */}
      <rect width="400" height="200" fill="#87CEEB"/>

      {/* Field */}
      <rect y="200" width="400" height="100" fill="#228B22"/>

      {/* Field lines */}
      <rect x="0" y="250" width="400" height="3" fill="white"/>
      <circle cx="200" cy="250" r="40" stroke="white" strokeWidth="3" fill="none"/>
      <circle cx="200" cy="250" r="3" fill="white"/>

      {/* Goal */}
      <rect x="320" y="200" width="5" height="60" fill="white"/>
      <rect x="325" y="200" width="70" height="5" fill="white"/>
      <rect x="390" y="200" width="5" height="60" fill="white"/>
      <line x1="325" y1="205" x2="390" y2="180" stroke="white" strokeWidth="3"/>
      <line x1="325" y1="260" x2="390" y2="240" stroke="white" strokeWidth="3"/>
      <line x1="390" y1="180" x2="390" y2="240" stroke="white" strokeWidth="3"/>

      {/* Soccer player */}
      <circle cx="180" cy="220" r="20" fill="#FFD1DC"/>

      {/* Hair */}
      <path d="M 165 210 Q 180 200 195 210" fill="#8B4513"/>

      {/* Eyes */}
      <circle cx="173" cy="218" r="3" fill="black"/>
      <circle cx="187" cy="218" r="3" fill="black"/>

      {/* Smile */}
      <path d="M 173 228 Q 180 233 187 228" stroke="black" fill="none" strokeWidth="2"/>

      {/* Jersey */}
      <rect x="165" y="240" width="30" height="35" fill="#4A90E2" rx="5"/>
      <text x="172" y="263" fontSize="20" fill="white" fontWeight="bold">7</text>

      {/* Arms */}
      <rect x="150" y="245" width="12" height="25" fill="#FFD1DC" rx="6" transform="rotate(-30 156 257)"/>
      <rect x="198" y="245" width="12" height="25" fill="#FFD1DC" rx="6" transform="rotate(30 204 257)"/>

      {/* Legs */}
      <rect x="170" y="275" width="10" height="30" fill="#4A90E2" rx="5"/>
      <rect x="185" y="275" width="10" height="30" fill="#4A90E2" rx="5"/>

      {/* Soccer ball */}
      <circle cx="250" cy="240" r="20" fill="white" stroke="black" strokeWidth="2"/>
      <polygon points="250,225 245,235 255,235" fill="black"/>
      <polygon points="250,240 242,248 250,255" fill="black"/>
      <polygon points="250,240 258,248 250,255" fill="black"/>

      {/* Crowd */}
      <circle cx="50" cy="180" r="10" fill="#FF6B9D"/>
      <circle cx="70" cy="180" r="10" fill="#FFD93D"/>
      <circle cx="90" cy="180" r="10" fill="#9B7EDE"/>
      <circle cx="110" cy="180" r="10" fill="#FF8C42"/>

      {/* Trophy */}
      <polygon points="335,100 345,120 355,100" fill="#FFD700"/>
      <rect x="342" y="120" width="6" height="15" fill="#FFD700"/>
      <rect x="337" y="135" width="16" height="5" fill="#FFD700"/>

      {/* Stars */}
      <text x="300" y="80" fontSize="25" fill="#FFD700">⭐</text>
      <text x="370" y="90" fontSize="20" fill="#FFD700">✨</text>
      <text x="330" y="60" fontSize="18" fill="#FFD700">🏆</text>

      {/* Sun */}
      <circle cx="60" cy="50" r="25" fill="#FFD93D"/>
    </svg>
  );
}
