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
      <svg className={frameClass} viewBox="0 0 420 290" aria-hidden="true">
        <g className="motif-line">
          <path d="M420 42H322v44H252" />
          <path d="M420 94H348v55H252" />
          <path d="M420 146H322v54H252" />
          <path d="M420 200H348v46H252" />
          <path d="M102 108H0" />
          <path d="M102 148H0" />
          <path d="M102 188H0" />
          <path d="M144 54V0" />
          <path d="M190 54V0" />
          <path d="M144 246v44" />
          <path d="M190 246v44" />
        </g>
        <rect className="motif-core" x="102" y="54" width="150" height="192" rx="10" />
        <g className="motif-line motif-fine">
          <path d="M127 83h100M127 113h100M127 143h100M127 173h100M127 203h100" />
        </g>
        <circle className="motif-node" cx="322" cy="42" r="5" />
        <circle className="motif-node" cx="322" cy="200" r="4" />
        <circle className="motif-node" cx="102" cy="148" r="4" />
      </svg>
    );
  }

  if (kind === "signal-grid") {
    return (
      <svg className={frameClass} viewBox="0 0 520 250" aria-hidden="true">
        <g className="motif-line">
          <path d="M0 207h108v-58h86v-72h130v-77" />
          <path d="M0 153h58V77h92v62h84v-34h138v-105" />
          <path d="M18 250v-44h130v-57h107v101" />
          <path d="M300 250v-62h142V84h78" />
        </g>
        <g className="motif-line motif-fine">
          <path d="M86 0v77M234 0v105M372 0v84M442 188v62M148 149v101" />
        </g>
        <circle className="motif-node" cx="108" cy="149" r="5" />
        <circle className="motif-node" cx="234" cy="105" r="4" />
        <circle className="motif-node" cx="442" cy="188" r="5" />
        <circle className="motif-node" cx="324" cy="77" r="4" />
      </svg>
    );
  }

  if (kind === "robot-arm") {
    return (
      <svg className={frameClass} viewBox="0 0 460 310" aria-hidden="true">
        <g className="motif-line">
          <path d="M36 267h144" />
          <path d="M76 286h188" />
          <path d="M180 267 224 193 306 141 364 65" />
          <path d="M224 193 278 228" />
          <path d="M306 141 344 182" />
          <path d="M364 65l44 12" />
          <path d="M400 52v52M425 55v41" />
        </g>
        <g className="motif-core">
          <circle cx="180" cy="267" r="28" />
          <circle cx="224" cy="193" r="24" />
          <circle cx="306" cy="141" r="22" />
          <circle cx="364" cy="65" r="18" />
        </g>
        <g className="motif-line motif-fine">
          <path d="M158 267h44M180 245v44M204 193h40M224 173v40M286 141h40M306 121v40M350 65h28M364 51v28" />
        </g>
        <circle className="motif-node" cx="180" cy="267" r="5" />
        <circle className="motif-node" cx="306" cy="141" r="5" />
        <circle className="motif-node" cx="408" cy="77" r="4" />
      </svg>
    );
  }

  if (kind === "connector") {
    return (
      <svg className={frameClass} viewBox="0 0 440 260" aria-hidden="true">
        <g className="motif-line">
          <path d="M0 134h96M344 134h96" />
          <path d="M0 74h126M0 194h126M314 74h126M314 194h126" />
          <path d="M126 74v120M314 74v120" />
        </g>
        <rect className="motif-core" x="126" y="58" width="188" height="152" rx="12" />
        <g className="motif-line motif-fine">
          <path d="M154 86v96M180 86v96M206 86v96M234 86v96M260 86v96M286 86v96" />
        </g>
        <circle className="motif-node" cx="154" cy="74" r="4" />
        <circle className="motif-node" cx="286" cy="194" r="4" />
        <circle className="motif-node" cx="220" cy="134" r="5" />
      </svg>
    );
  }

  if (kind === "team-network") {
    return (
      <svg className={frameClass} viewBox="0 0 430 270" aria-hidden="true">
        <g className="motif-line">
          <path d="M42 206 124 58l96 82 74-104 92 142-166 54z" />
          <path d="m124 58 170-22M220 140l166 38M42 206l178-66M124 58 220 260" />
        </g>
        <g className="motif-core">
          <circle cx="42" cy="206" r="16" />
          <circle cx="124" cy="58" r="16" />
          <circle cx="220" cy="140" r="18" />
          <circle cx="294" cy="36" r="15" />
          <circle cx="386" cy="178" r="16" />
          <circle cx="220" cy="260" r="14" />
        </g>
        <circle className="motif-node" cx="124" cy="58" r="5" />
        <circle className="motif-node" cx="294" cy="36" r="5" />
        <circle className="motif-node" cx="220" cy="140" r="5" />
      </svg>
    );
  }

  if (kind === "arena-path") {
    return (
      <svg className={frameClass} viewBox="0 0 430 280" aria-hidden="true">
        <rect className="motif-core" x="62" y="38" width="306" height="196" rx="5" />
        <g className="motif-line">
          <path d="M94 86h86l38 40-48 46 76 30 46-62h43" />
          <path d="M94 190l54-36 65 28 43-74 58 16" />
          <path d="M94 140h46M335 86v108" />
          <path d="M22 38h40M368 234h40" />
        </g>
        <circle className="motif-node" cx="180" cy="86" r="5" />
        <circle className="motif-node" cx="170" cy="172" r="5" />
        <circle className="motif-node" cx="292" cy="140" r="5" />
        <circle className="motif-node" cx="335" cy="124" r="4" />
      </svg>
    );
  }

  return (
    <svg className={frameClass} viewBox="0 0 450 280" aria-hidden="true">
      <g className="motif-line">
        <path d="M26 210h100l42-72h102l42-72h112" />
        <path d="M26 66h92l50 72M312 66l-42 72" />
        <path d="M224 138v112M168 138v84M270 138v84" />
      </g>
      <g className="motif-core">
        <circle cx="168" cy="138" r="32" />
        <circle cx="270" cy="138" r="32" />
        <circle cx="224" cy="250" r="20" />
      </g>
      <g className="motif-line motif-fine">
        <path d="M152 138h32M168 122v32M254 138h32M270 122v32" />
      </g>
      <circle className="motif-node" cx="126" cy="210" r="5" />
      <circle className="motif-node" cx="312" cy="66" r="5" />
    </svg>
  );
}
