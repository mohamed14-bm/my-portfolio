export type RoboticsMotifKind =
  | "microcontroller"
  | "signal-grid"
  | "arena-path"
  | "team-network"
  | "connector"
  | "mechatronic"
  | "robot-arm";

export function RoboticsMotif({
  kind,
  className = "",
}: {
  kind: RoboticsMotifKind;
  className?: string;
}) {
  const frameClass = `robotics-motif robotics-motif-${kind} ${className}`;

  if (kind === "microcontroller") {
    return (
      <svg className={frameClass} viewBox="0 0 420 300" aria-hidden="true">
        {/* Hand-drawn chip body with wobbly rect */}
        <path
          d="M 105 58 C 150 56, 210 59, 252 57 C 255 100, 253 180, 254 246 C 210 248, 140 245, 103 247 C 101 190, 104 110, 105 58 Z"
          className="motif-sketch"
        />
        {/* Notched marker circle at top */}
        <path
          d="M 170 57 C 172 68, 186 68, 188 57"
          className="motif-sketch"
        />
        {/* Handwritten text inside chip */}
        <text x="135" y="145" className="fill-current text-xs font-mono font-bold tracking-widest opacity-40">
          ESP32-S3
        </text>
        <text x="142" y="165" className="fill-current text-[10px] font-mono opacity-30">
          PWM·UART
        </text>
        {/* Left pins */}
        <g className="motif-sketch motif-fine">
          <path d="M 103 85 C 75 83, 40 86, 12 84" />
          <path d="M 103 115 C 65 117, 45 114, 12 116" />
          <path d="M 103 145 C 70 143, 35 147, 12 144" />
          <path d="M 103 175 C 60 176, 35 173, 12 175" />
          <path d="M 103 205 C 70 203, 30 207, 12 204" />
        </g>
        {/* Right pins & curved jumper traces */}
        <g className="motif-sketch">
          <path d="M 253 85 C 290 84, 320 86, 350 60 C 370 45, 395 44, 418 45" />
          <path d="M 253 125 C 295 127, 335 123, 370 145 C 390 155, 405 152, 418 150" />
          <path d="M 253 165 C 285 163, 315 167, 345 190 C 375 210, 395 212, 418 210" />
          <path d="M 253 205 C 280 207, 320 203, 350 240 C 370 260, 395 258, 418 255" />
        </g>
        {/* Hand-drawn solder pads */}
        <circle cx="350" cy="60" r="4" className="motif-node" />
        <circle cx="370" cy="145" r="4" className="motif-node" />
        <circle cx="345" cy="190" r="4" className="motif-node" />
        <circle cx="350" cy="240" r="4" className="motif-node" />
      </svg>
    );
  }

  if (kind === "signal-grid") {
    return (
      <svg className={frameClass} viewBox="0 0 520 260" aria-hidden="true">
        {/* Sketched logic signals & wavy breadboard rails */}
        <path
          d="M 10 75 C 50 72, 80 76, 95 35 C 105 15, 120 18, 140 18 C 160 18, 175 60, 195 62 C 230 65, 250 25, 280 28 C 310 30, 330 85, 360 88 C 400 90, 440 45, 510 48"
          className="motif-sketch"
          strokeDasharray="6 4"
        />
        <path
          d="M 10 145 C 60 143, 90 148, 115 110 C 130 90, 155 92, 175 140 C 190 170, 220 172, 250 145 C 280 120, 310 122, 340 180 C 365 220, 410 218, 510 215"
          className="motif-sketch"
        />
        <path
          d="M 10 210 C 80 208, 130 213, 170 175 C 200 150, 230 230, 275 228 C 320 225, 360 160, 400 162 C 450 165, 480 135, 510 132"
          className="motif-sketch motif-fine"
        />
        {/* Hand-drawn pulse wave */}
        <path
          d="M 30 235 L 70 235 L 72 205 L 110 205 L 112 235 L 160 235 L 162 205 L 200 205"
          className="motif-sketch motif-fine"
        />
        {/* Hand nodes */}
        <circle cx="95" cy="35" r="4.5" className="motif-node" />
        <circle cx="280" cy="28" r="4.5" className="motif-node" />
        <circle cx="250" cy="145" r="4.5" className="motif-node" />
        <circle cx="340" cy="180" r="4.5" className="motif-node" />
      </svg>
    );
  }

  if (kind === "robot-arm") {
    return (
      <svg className={frameClass} viewBox="0 0 460 320" aria-hidden="true">
        {/* Sketched base plate */}
        <path
          d="M 40 285 C 90 282, 160 286, 210 284 C 208 295, 209 302, 206 308 C 150 310, 80 308, 42 305 Z"
          className="motif-sketch motif-fill"
        />
        {/* Base pivot joint */}
        <path
          d="M 125 284 C 115 250, 155 245, 150 284"
          className="motif-sketch"
        />
        <circle cx="136" cy="265" r="14" className="motif-sketch" />
        <circle cx="136" cy="265" r="5" className="motif-node" />
        {/* Lower arm segment */}
        <path
          d="M 134 252 C 155 190, 185 155, 220 120"
          className="motif-sketch"
          strokeWidth="3.5"
        />
        <path
          d="M 142 255 C 165 195, 195 160, 228 126"
          className="motif-sketch motif-fine"
        />
        {/* Elbow joint & angle annotation */}
        <circle cx="224" cy="123" r="12" className="motif-sketch" />
        <circle cx="224" cy="123" r="4.5" className="motif-node" />
        <path
          d="M 205 105 C 220 95, 240 100, 248 115"
          className="motif-sketch motif-fine"
          strokeDasharray="3 3"
        />
        <text x="235" y="98" className="fill-current text-[11px] font-mono italic opacity-50">
          θ1
        </text>
        {/* Upper forearm */}
        <path
          d="M 234 118 C 280 85, 320 65, 370 50"
          className="motif-sketch"
          strokeWidth="3"
        />
        {/* Wrist joint */}
        <circle cx="370" cy="50" r="9" className="motif-sketch" />
        <circle cx="370" cy="50" r="3.5" className="motif-node" />
        {/* Sketched 2-finger gripper */}
        <path
          d="M 378 46 C 395 38, 415 32, 422 25 C 424 28, 418 36, 405 45"
          className="motif-sketch"
        />
        <path
          d="M 376 56 C 395 62, 415 68, 424 75 C 420 78, 412 70, 402 60"
          className="motif-sketch"
        />
      </svg>
    );
  }

  if (kind === "connector") {
    return (
      <svg className={frameClass} viewBox="0 0 440 260" aria-hidden="true">
        {/* Sketched breadboard connector header */}
        <path
          d="M 110 65 C 180 62, 260 66, 330 64 C 334 110, 332 160, 331 200 C 260 203, 170 199, 108 201 C 106 160, 109 110, 110 65 Z"
          className="motif-sketch"
        />
        {/* Pin holes */}
        <g className="motif-sketch">
          <circle cx="140" cy="95" r="6" />
          <circle cx="180" cy="95" r="6" />
          <circle cx="220" cy="95" r="6" />
          <circle cx="260" cy="95" r="6" />
          <circle cx="300" cy="95" r="6" />
          <circle cx="140" cy="165" r="6" />
          <circle cx="180" cy="165" r="6" />
          <circle cx="220" cy="165" r="6" />
          <circle cx="260" cy="165" r="6" />
          <circle cx="300" cy="165" r="6" />
        </g>
        {/* Hand drawn jumper wires exiting */}
        <path
          d="M 140 95 C 110 60, 60 50, 10 52"
          className="motif-sketch"
        />
        <path
          d="M 220 95 C 240 40, 290 25, 430 30"
          className="motif-sketch"
          strokeDasharray="5 3"
        />
        <path
          d="M 260 165 C 280 220, 340 240, 430 235"
          className="motif-sketch"
        />
        <circle cx="140" cy="95" r="3" className="motif-node" />
        <circle cx="260" cy="165" r="3" className="motif-node" />
      </svg>
    );
  }

  if (kind === "team-network") {
    return (
      <svg className={frameClass} viewBox="0 0 430 270" aria-hidden="true">
        {/* Sketched whiteboard team network graph */}
        <path
          d="M 50 205 C 85 130, 105 85, 130 65 C 165 95, 195 115, 230 145 C 265 90, 280 70, 305 45 C 340 100, 365 140, 395 180"
          className="motif-sketch"
        />
        <path
          d="M 130 65 C 190 55, 240 50, 305 45"
          className="motif-sketch motif-fine"
          strokeDasharray="5 4"
        />
        <path
          d="M 50 205 C 120 180, 170 165, 230 145 C 290 160, 340 170, 395 180"
          className="motif-sketch motif-fine"
        />
        <path
          d="M 230 145 C 228 190, 232 225, 230 255"
          className="motif-sketch"
        />
        {/* Hand drawn wobbly node circles */}
        <g className="motif-sketch">
          <circle cx="50" cy="205" r="16" />
          <circle cx="130" cy="65" r="17" />
          <circle cx="230" cy="145" r="20" />
          <circle cx="305" cy="45" r="15" />
          <circle cx="395" cy="180" r="17" />
          <circle cx="230" cy="255" r="14" />
        </g>
        <circle cx="130" cy="65" r="5" className="motif-node" />
        <circle cx="305" cy="45" r="5" className="motif-node" />
        <circle cx="230" cy="145" r="6" className="motif-node" />
      </svg>
    );
  }

  if (kind === "arena-path") {
    return (
      <svg className={frameClass} viewBox="0 0 430 280" aria-hidden="true">
        {/* Robot competition arena track */}
        <path
          d="M 45 45 C 150 40, 280 48, 385 45 C 388 110, 384 180, 386 240 C 280 244, 150 238, 45 242 C 42 180, 46 110, 45 45 Z"
          className="motif-sketch"
        />
        {/* Hand drawn obstacle line track */}
        <path
          d="M 75 90 C 130 88, 170 120, 200 150 C 230 180, 270 140, 300 100 C 330 70, 355 120, 355 190 C 320 210, 250 215, 180 190 C 120 170, 85 200, 75 190"
          className="motif-sketch"
          strokeDasharray="6 4"
        />
        <circle cx="75" cy="90" r="5" className="motif-node" />
        <circle cx="200" cy="150" r="5" className="motif-node" />
        <circle cx="300" cy="100" r="5" className="motif-node" />
      </svg>
    );
  }

  // Mechatronic gear sketch
  return (
    <svg className={frameClass} viewBox="0 0 450 280" aria-hidden="true">
      {/* Hand-sketched gear pair with meshing teeth */}
      <circle cx="160" cy="140" r="42" className="motif-sketch" />
      <circle cx="160" cy="140" r="12" className="motif-sketch" />
      <circle cx="160" cy="140" r="4.5" className="motif-node" />
      {/* Sketched teeth */}
      <path
        d="M 160 92 L 160 82 M 160 188 L 160 198 M 112 140 L 102 140 M 208 140 L 218 140 M 126 106 L 119 99 M 194 174 L 201 181 M 126 174 L 119 181 M 194 106 L 201 99"
        className="motif-sketch"
        strokeWidth="3.5"
      />
      {/* Meshing companion gear */}
      <circle cx="265" cy="140" r="32" className="motif-sketch" />
      <circle cx="265" cy="140" r="9" className="motif-sketch" />
      <circle cx="265" cy="140" r="4" className="motif-node" />
      {/* Connecting sketch shaft */}
      <path
        d="M 40 210 C 100 208, 130 190, 160 140 C 200 80, 280 70, 410 75"
        className="motif-sketch motif-fine"
        strokeDasharray="4 3"
      />
    </svg>
  );
}
