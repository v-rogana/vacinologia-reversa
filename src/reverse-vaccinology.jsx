import React, { useState, useEffect, useRef, useMemo } from "react";

const COLORS = {
  bg: "#0a0e17",
  surface: "#111827",
  surfaceLight: "#1a2332",
  accent: "#00d4aa",
  accentDim: "#00d4aa33",
  accentGlow: "#00d4aa66",
  warning: "#f59e0b",
  danger: "#ef4444",
  dangerDim: "#ef444433",
  purple: "#a78bfa",
  purpleDim: "#a78bfa33",
  blue: "#60a5fa",
  blueDim: "#60a5fa33",
  pink: "#f472b6",
  pinkDim: "#f472b633",
  text: "#e2e8f0",
  textDim: "#94a3b8",
  textMuted: "#64748b",
  border: "#1e293b",
};

const FONT = `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace`;
const FONT_BODY = `'Inter', 'Segoe UI', system-ui, sans-serif`;

// ─── NAV ───
function Nav({ active, onNav }) {
  const items = [
    { id: "hero", label: "INÍCIO" },
    { id: "pipeline", label: "PIPELINE" },
    { id: "mhc", label: "MHC / EPÍTOPOS" },
    { id: "ramachandran", label: "RAMACHANDRAN" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: `${COLORS.bg}ee`, backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${COLORS.border}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 clamp(12px, 3vw, 32px)", height: 56, fontFamily: FONT,
    }}>
      <span style={{ color: COLORS.accent, fontSize: 13, fontWeight: 700, letterSpacing: 2 }}>
        VACINOLOGIA REVERSA
      </span>
      <div className="nav-items" style={{ display: "flex", gap: 4 }}>
        {items.map(it => (
          <button key={it.id} onClick={() => onNav(it.id)} style={{
            background: active === it.id ? COLORS.accentDim : "transparent",
            color: active === it.id ? COLORS.accent : COLORS.textDim,
            border: "none", padding: "8px 16px", borderRadius: 6,
            fontFamily: FONT, fontSize: 11, letterSpacing: 1.5,
            cursor: "pointer", fontWeight: 600,
            transition: "all 0.2s",
          }}>
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── HERO ───
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 200); }, []);

  const facts = [
    { icon: "🏥", title: "Nosocomial", desc: "Principal causa de infecções hospitalares em pacientes com ventilação mecânica e dispositivos invasivos" },
    { icon: "💀", title: "ESKAPE", desc: "Membro do grupo ESKAPE — os 6 patógenos mais perigosos para resistência antimicrobiana segundo a OMS" },
    { icon: "🧬", title: "Multirresistente", desc: "Possui bomba de efluxo e gene blaOXA-23 que conferem resistência a múltiplas classes de antibióticos" },
    { icon: "🔬", title: "Sobrevivência", desc: "Consegue sobreviver em superfícies secas hospitalares por semanas, facilitando transmissão cruzada" },
  ];

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "clamp(72px, 12vh, 120px) clamp(16px, 4vw, 48px) clamp(32px, 5vh, 48px)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background effect */}
      <div style={{
        position: "absolute", top: -200, right: -200,
        width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.dangerDim} 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.accentDim} 0%, transparent 70%)`,
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease-out", position: "relative", zIndex: 1,
      }}>
        <div style={{
          fontFamily: FONT, fontSize: 12, color: COLORS.danger,
          letterSpacing: 4, marginBottom: 16, fontWeight: 700,
        }}>
          PATÓGENO CRÍTICO — PRIORIDADE 1 OMS
        </div>
        <h1 style={{
          fontFamily: FONT_BODY, fontSize: "clamp(32px, 8vw, 56px)", fontWeight: 800,
          color: COLORS.text, margin: 0, lineHeight: 1.1,
        }}>
          <span style={{ fontStyle: "italic", color: COLORS.accent }}>Acinetobacter</span>
          <br />
          <span style={{ fontStyle: "italic", color: COLORS.accent }}>baumannii</span>
        </h1>
        <p style={{
          fontFamily: FONT_BODY, fontSize: "clamp(14px, 2.2vw, 18px)", color: COLORS.textDim,
          maxWidth: 600, lineHeight: 1.7, marginTop: 24,
        }}>
          Cocobacilo gram-negativo, aeróbico e oxidase-negativa.
          Uma das bactérias mais perigosas em ambientes hospitalares,
          com capacidade alarmante de adquirir resistência a praticamente
          todas as classes de antibióticos disponíveis.
        </p>
        <div style={{
          fontFamily: FONT, fontSize: 12, color: COLORS.warning,
          marginTop: 16, padding: "8px 16px",
          background: `${COLORS.warning}11`, borderRadius: 8,
          border: `1px solid ${COLORS.warning}33`, display: "inline-block",
        }}>
          ⚠ NÃO EXISTE VACINA APROVADA — VACINOLOGIA REVERSA COMO ESTRATÉGIA
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16, marginTop: 48, position: "relative", zIndex: 1,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1s ease-out 0.4s",
      }}>
        {facts.map((f, i) => (
          <div key={i} style={{
            background: COLORS.surface, border: `1px solid ${COLORS.border}`,
            borderRadius: 12, padding: 24, transition: "all 0.3s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = COLORS.accent;
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = COLORS.border;
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
            <div style={{
              fontFamily: FONT, fontSize: 13, color: COLORS.accent,
              fontWeight: 700, letterSpacing: 1, marginBottom: 8,
            }}>{f.title.toUpperCase()}</div>
            <div style={{
              fontFamily: FONT_BODY, fontSize: 14, color: COLORS.textDim,
              lineHeight: 1.6,
            }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PIPELINE ───
function Pipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Genoma Completo",
      subtitle: "pangenome.org",
      color: COLORS.blue,
      dimColor: COLORS.blueDim,
      count: "14.592",
      unit: "genes totais",
      desc: "O pangenoma de A. baumannii foi obtido a partir de 205 cepas sequenciadas. O pangenoma representa todos os genes encontrados em qualquer cepa da espécie — core genes (presentes em todas) e genes acessórios (presentes em algumas).",
      detail: "Fonte: pangenome.org | 205 cepas analisadas",
    },
    {
      num: "02",
      title: "Core Genoma",
      subtitle: "cutoff 100%",
      color: COLORS.accent,
      dimColor: COLORS.accentDim,
      count: "1.227",
      unit: "genes core",
      desc: "Filtramos apenas os genes presentes em 100% das 205 cepas — o core genoma. Esses genes são essenciais para a sobrevivência da bactéria e são conservados evolutivamente, garantindo que a vacina funcione contra qualquer cepa de A. baumannii.",
      detail: "Redução: 91,6% dos genes eliminados",
    },
    {
      num: "03",
      title: "Proteínas Antigênicas",
      subtitle: "Vaxign — adhesin probability",
      color: COLORS.warning,
      dimColor: `${COLORS.warning}33`,
      count: "3",
      unit: "proteínas selecionadas",
      desc: "Usamos o Vaxign para rankear proteínas por probabilidade de serem adesinas — proteínas de superfície que a bactéria usa para aderir às células do hospedeiro. Selecionamos as 3 com maior score e sem homologia com humanos, camundongos ou porcos (evitar autoimunidade).",
      detail: "ABK1_RS15050 (0.718) | ABK1_RS02455 (0.701) | ABK1_RS13000 (0.676)",
    },
    {
      num: "04",
      title: "Predição de Epítopos",
      subtitle: "IEDB + ABCpred",
      color: COLORS.purple,
      dimColor: COLORS.purpleDim,
      count: "MHC I + II + B",
      unit: "epítopos preditos",
      desc: "De cada proteína, extraímos os peptídeos com maior afinidade para MHC Classe I (reconhecidos por T CD8+), MHC Classe II (reconhecidos por T CD4+) e epítopos de célula B (reconhecidos por anticorpos). Cada tipo de epítopo ativa um braço diferente da resposta imune.",
      detail: "IEDB para MHC I/II | ABCpred para célula B | VaxiJen para antigenicidade",
    },
    {
      num: "05",
      title: "Proteína Quimérica",
      subtitle: "construção multiepítopo",
      color: COLORS.pink,
      dimColor: COLORS.pinkDim,
      count: "1",
      unit: "vacina candidata",
      desc: "Montamos uma única proteína artificial combinando os melhores epítopos com linkers específicos: EAAK (adjuvante→epítopo), AAY (entre MHC I) e GPGPG (entre MHC II). Essa construção garante que cada epítopo seja corretamente processado e apresentado pelo sistema imune.",
      detail: "Validação: AlphaFold 2 (estrutura 3D) + Ramachandran (qualidade estérica)",
    },
  ];

  const s = steps[activeStep];
  const pct = [100, 8.4, 0.2, 0.02, 0.007];

  return (
    <section id="pipeline" style={{
      minHeight: "100vh", padding: "clamp(72px, 10vh, 96px) clamp(16px, 4vw, 48px) clamp(32px, 5vh, 48px)",
    }}>
      <div style={{
        fontFamily: FONT, fontSize: 12, color: COLORS.accent,
        letterSpacing: 4, marginBottom: 8, fontWeight: 700,
      }}>PIPELINE</div>
      <h2 style={{
        fontFamily: FONT_BODY, fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800,
        color: COLORS.text, margin: "0 0 12px",
      }}>Do Genoma à Vacina</h2>
      <p style={{
        fontFamily: FONT_BODY, fontSize: 15, color: COLORS.textDim,
        marginBottom: 40, maxWidth: 600, lineHeight: 1.6,
      }}>
        Cada etapa filtra e refina — de milhares de genes até uma única proteína vacinal candidata.
        Clique em cada etapa para explorar.
      </p>

      {/* Step selector */}
      <div className="pipeline-steps" style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
        {steps.map((st, i) => (
          <button key={i} onClick={() => setActiveStep(i)} style={{
            background: i === activeStep ? st.dimColor : COLORS.surface,
            border: `1px solid ${i === activeStep ? st.color : COLORS.border}`,
            borderRadius: 8, padding: "12px 20px", cursor: "pointer",
            transition: "all 0.3s", display: "flex", alignItems: "center", gap: 12,
            minWidth: 140,
          }}
          onMouseEnter={e => { if (i !== activeStep) e.currentTarget.style.borderColor = st.color + "66"; }}
          onMouseLeave={e => { if (i !== activeStep) e.currentTarget.style.borderColor = COLORS.border; }}
          >
            <span style={{
              fontFamily: FONT, fontSize: 20, fontWeight: 800,
              color: i === activeStep ? st.color : COLORS.textMuted,
            }}>{st.num}</span>
            <div style={{ textAlign: "left" }}>
              <div style={{
                fontFamily: FONT, fontSize: 11, fontWeight: 700,
                color: i === activeStep ? st.color : COLORS.textDim,
                letterSpacing: 0.5,
              }}>{st.title.toUpperCase()}</div>
              <div style={{
                fontFamily: FONT_BODY, fontSize: 11, color: COLORS.textMuted,
              }}>{st.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Funnel bar */}
      <div style={{
        background: COLORS.surface, borderRadius: 12,
        border: `1px solid ${COLORS.border}`, padding: 24, marginBottom: 24,
      }}>
        <div style={{
          fontFamily: FONT, fontSize: 11, color: COLORS.textMuted,
          marginBottom: 12, letterSpacing: 1,
        }}>FUNIL DE SELEÇÃO</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
          {pct.map((p, i) => (
            <div key={i} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            }}>
              <span style={{
                fontFamily: FONT, fontSize: 10, color: i === activeStep ? steps[i].color : COLORS.textMuted,
                fontWeight: i === activeStep ? 700 : 400,
              }}>{steps[i].count}</span>
              <div style={{
                width: "100%",
                height: Math.max(4, p * 0.55),
                background: i <= activeStep
                  ? `linear-gradient(90deg, ${steps[i].color}cc, ${steps[i].color})`
                  : COLORS.border,
                borderRadius: 4,
                transition: "all 0.5s ease-out",
                boxShadow: i === activeStep ? `0 0 12px ${steps[i].color}44` : "none",
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Detail card */}
      <div style={{
        background: COLORS.surface, borderRadius: 12,
        border: `1px solid ${s.color}44`, padding: 32,
        borderLeft: `4px solid ${s.color}`,
        transition: "all 0.3s",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
          <span style={{
            fontFamily: FONT, fontSize: 48, fontWeight: 800, color: s.color,
          }}>{s.count}</span>
          <span style={{
            fontFamily: FONT_BODY, fontSize: 16, color: COLORS.textDim,
          }}>{s.unit}</span>
        </div>
        <p style={{
          fontFamily: FONT_BODY, fontSize: 15, color: COLORS.text,
          lineHeight: 1.8, margin: "0 0 16px", maxWidth: 700,
        }}>{s.desc}</p>
        <div style={{
          fontFamily: FONT, fontSize: 11, color: s.color,
          background: s.dimColor, padding: "8px 14px",
          borderRadius: 6, display: "inline-block",
        }}>{s.detail}</div>
      </div>
    </section>
  );
}

// ─── MHC EPITOPE SECTION ───
function MHCSection() {
  const [phase, setPhase] = useState(0);

  const phases = [
    {
      title: "A bactéria infecta",
      desc: "A. baumannii invade o organismo e suas proteínas de superfície (como as adesinas que selecionamos) entram em contato com células do sistema imune. Células apresentadoras de antígeno (APCs) — como macrófagos e células dendríticas — fagocitam a bactéria.",
      visual: "bacteria",
    },
    {
      title: "Processamento do antígeno",
      desc: "Dentro da APC, as proteínas bacterianas são degradadas em pequenos fragmentos peptídicos (8-15 aminoácidos) por proteases. Esses fragmentos são os epítopos — exatamente o que predizemos com o IEDB e ABCpred.",
      visual: "processing",
    },
    {
      title: "Apresentação via MHC",
      desc: "Os peptídeos se ligam a moléculas de MHC como uma chave numa fechadura. MHC I apresenta peptídeos de ~9aa para T CD8+ (que destroem células infectadas). MHC II apresenta peptídeos de ~15aa para T CD4+ (que coordenam toda a resposta imune).",
      visual: "presentation",
    },
    {
      title: "Ativação do linfócito T",
      desc: "O receptor TCR do linfócito T reconhece especificamente o complexo MHC+peptídeo. Isso dispara a resposta imune adaptativa: T CD8+ eliminam células infectadas, T CD4+ ativam linfócitos B para produzirem anticorpos contra a bactéria.",
      visual: "activation",
    },
    {
      title: "Construção multiepítopo",
      desc: "Nossa proteína quimérica combina os melhores epítopos de MHC I, MHC II e célula B numa só molécula. Os linkers EAAK, AAY e GPGPG garantem o correto dobramento e processamento. É como montar um \"catálogo\" dos pontos mais vulneráveis da bactéria.",
      visual: "chimeric",
    },
  ];

  const p = phases[phase];

  const renderVisual = () => {
    const baseStyle = {
      width: "100%", height: 280, display: "flex", alignItems: "center",
      justifyContent: "center", position: "relative", overflow: "hidden",
    };

    if (p.visual === "bacteria") {
      return (
        <div style={baseStyle}>
          <svg viewBox="0 0 180 140" width="180" height="140" style={{ overflow: "visible" }}>
            <defs>
              <radialGradient id="bacBody" cx="42%" cy="38%" r="70%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="45%" stopColor={COLORS.danger} />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
              <filter id="bacGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                <feFlood floodColor={COLORS.danger} floodOpacity="0.45" />
                <feComposite in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Pili (short surface appendages at the poles) */}
            {[
              { x1: 142, y1: 68, x2: 155, y2: 62 },
              { x1: 143, y1: 76, x2: 158, y2: 80 },
              { x1: 140, y1: 60, x2: 150, y2: 50 },
              { x1: 38, y1: 68, x2: 25, y2: 62 },
              { x1: 37, y1: 76, x2: 22, y2: 80 },
              { x1: 40, y1: 60, x2: 30, y2: 50 },
            ].map((l, i) => (
              <line key={`pilus-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke="#7f1d1d" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            ))}
            {/* Outer membrane hint (gram-negative) */}
            <ellipse cx="90" cy="70" rx="53" ry="38"
              fill="none" stroke="#b91c1c" strokeWidth="0.8"
              strokeDasharray="2 3" opacity="0.55" />
            {/* Bacterium body */}
            <ellipse cx="90" cy="70" rx="50" ry="35"
              fill="url(#bacBody)" stroke="#7f1d1d" strokeWidth="1.5"
              filter="url(#bacGlow)" />
            {/* Cytoplasm highlight */}
            <ellipse cx="78" cy="58" rx="22" ry="12"
              fill="#ffffff" opacity="0.12" />
            {/* Label */}
            <text x="90" y="74" textAnchor="middle"
              fontFamily={FONT} fontSize="11" fontWeight="700" fill="#fff"
              style={{ letterSpacing: 0.5 }}>A. bau</text>
            {/* Surface proteins — placed on the actual ellipse perimeter */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const cx = 90, cy = 70, rx = 50, ry = 35, off = 8;
              const pcx = cx + Math.cos(rad) * (rx + off);
              const pcy = cy + Math.sin(rad) * (ry + off);
              return (
                <circle key={`sp-${i}`} cx={pcx} cy={pcy} r={7}
                  fill={COLORS.warning}
                  stroke="#b45309" strokeWidth="0.6"
                  style={{
                    filter: `drop-shadow(0 0 6px ${COLORS.warning}aa)`,
                    animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              );
            })}
          </svg>
          {/* Arrow */}
          <div style={{
            margin: "0 32px", fontFamily: FONT, fontSize: 24,
            color: COLORS.textMuted, animation: "pulse 2s ease-in-out infinite",
          }}>→</div>
          {/* APC */}
          <div style={{
            width: 110, height: 110, borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.blue}44, ${COLORS.blue}22)`,
            border: `2px solid ${COLORS.blue}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column",
          }}>
            <span style={{ fontFamily: FONT, fontSize: 10, color: COLORS.blue, fontWeight: 700 }}>APC</span>
            <span style={{ fontFamily: FONT_BODY, fontSize: 9, color: COLORS.textDim }}>Macrófago</span>
          </div>
        </div>
      );
    }

    if (p.visual === "processing") {
      return (
        <div style={baseStyle}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
          }}>
            <div style={{
              fontFamily: FONT, fontSize: 11, color: COLORS.textMuted,
              letterSpacing: 2, marginBottom: 4,
            }}>PROTEÍNA INTEIRA</div>
            <div style={{
              fontFamily: FONT, fontSize: 12, color: COLORS.warning,
              background: COLORS.surface, padding: "8px 16px", borderRadius: 6,
              letterSpacing: 2, border: `1px solid ${COLORS.warning}44`,
              wordBreak: "break-all", maxWidth: 380, textAlign: "center",
            }}>
              MKISIAQAKYRALDFDK<span style={{ color: COLORS.accent, fontWeight: 700 }}>CIAADFKIN</span>YYEALLRGSDVLV<span style={{ color: COLORS.purple, fontWeight: 700 }}>FPSMFLGNTKYGE</span>FFG
            </div>
            <div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.textMuted }}>↓ protease</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              {["CIAADFKIN", "FPSMFLGNT", "YEALLRGSD"].map((ep, i) => (
                <div key={i} style={{
                  fontFamily: FONT, fontSize: 13, fontWeight: 700,
                  color: [COLORS.accent, COLORS.purple, COLORS.pink][i],
                  background: [COLORS.accentDim, COLORS.purpleDim, COLORS.pinkDim][i],
                  padding: "8px 16px", borderRadius: 8,
                  border: `1px solid ${[COLORS.accent, COLORS.purple, COLORS.pink][i]}44`,
                  letterSpacing: 1,
                }}>
                  {ep}
                  <div style={{ fontSize: 9, color: COLORS.textMuted, marginTop: 4, fontWeight: 400 }}>
                    {["MHC I", "MHC II", "Célula B"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (p.visual === "presentation") {
      return (
        <div style={baseStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* MHC groove */}
            <div style={{ position: "relative" }}>
              <div style={{
                width: 120, height: 80, borderRadius: "8px 8px 0 0",
                background: `linear-gradient(to right, ${COLORS.blue}, ${COLORS.blue}cc)`,
                display: "flex", alignItems: "flex-start", justifyContent: "center",
                paddingTop: 8,
              }}>
                <span style={{ fontFamily: FONT, fontSize: 10, color: "#fff", fontWeight: 700 }}>MHC I</span>
              </div>
              {/* Peptide in groove */}
              <div style={{
                position: "absolute", top: 28, left: 15, right: 15,
                height: 24, borderRadius: 12,
                background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accent}cc)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 12px ${COLORS.accentGlow}`,
              }}>
                <span style={{ fontFamily: FONT, fontSize: 9, color: "#000", fontWeight: 700 }}>CIAADFKIN</span>
              </div>
              <div style={{
                width: 120, height: 50, borderRadius: "0 0 8px 8px",
                background: `linear-gradient(to right, ${COLORS.blue}88, ${COLORS.blue}66)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: FONT, fontSize: 8, color: COLORS.text }}>α1 α2 groove</span>
              </div>
              <div style={{
                width: 40, height: 60, borderRadius: "0 0 8px 8px",
                background: `${COLORS.blue}44`,
                margin: "0 auto",
              }} />
            </div>

            <div style={{
              fontFamily: FONT, fontSize: 12, color: COLORS.textMuted,
              margin: "0 24px",
              display: "flex", flexDirection: "column", alignItems: "center",
            }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>⟷</div>
              <div style={{ fontSize: 9 }}>RECONHECIMENTO</div>
            </div>

            {/* TCR */}
            <div style={{
              width: 100, height: 100, borderRadius: "50%",
              background: `linear-gradient(135deg, ${COLORS.purple}44, ${COLORS.purple}22)`,
              border: `2px solid ${COLORS.purple}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
            }}>
              <span style={{ fontFamily: FONT, fontSize: 11, color: COLORS.purple, fontWeight: 700 }}>T CD8+</span>
              <span style={{ fontFamily: FONT, fontSize: 9, color: COLORS.textDim }}>TCR</span>
            </div>
          </div>
        </div>
      );
    }

    if (p.visual === "activation") {
      return (
        <div style={baseStyle}>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.purple}66, ${COLORS.purple}33)`,
                border: `2px solid ${COLORS.purple}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 8px",
              }}>
                <span style={{ fontFamily: FONT, fontSize: 11, color: COLORS.purple, fontWeight: 700 }}>CD8+</span>
              </div>
              <div style={{ fontFamily: FONT, fontSize: 9, color: COLORS.textMuted }}>CITOTÓXICO</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: COLORS.danger, marginTop: 4 }}>Mata células infectadas</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.accent}44, ${COLORS.accent}22)`,
                border: `2px solid ${COLORS.accent}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 8px",
              }}>
                <span style={{ fontFamily: FONT, fontSize: 11, color: COLORS.accent, fontWeight: 700 }}>CD4+</span>
              </div>
              <div style={{ fontFamily: FONT, fontSize: 9, color: COLORS.textMuted }}>AUXILIAR</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: COLORS.accent, marginTop: 4 }}>Coordena resposta</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.warning}44, ${COLORS.warning}22)`,
                border: `2px solid ${COLORS.warning}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 8px",
              }}>
                <span style={{ fontFamily: FONT, fontSize: 11, color: COLORS.warning, fontWeight: 700 }}>B</span>
              </div>
              <div style={{ fontFamily: FONT, fontSize: 9, color: COLORS.textMuted }}>HUMORAL</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: COLORS.warning, marginTop: 4 }}>Produz anticorpos</div>
            </div>
          </div>
        </div>
      );
    }

    // chimeric
    const segments = [
      { label: "ADJ", seq: "EAAK", color: COLORS.textMuted, bg: `${COLORS.textMuted}22` },
      { label: "MHC I", seq: "YLKQQNASL", color: COLORS.accent, bg: COLORS.accentDim },
      { label: "linker", seq: "GPGPG", color: COLORS.pink, bg: COLORS.pinkDim },
      { label: "MHC II", seq: "AAMNESPLSPQ", color: COLORS.purple, bg: COLORS.purpleDim },
      { label: "linker", seq: "GPGPG", color: COLORS.pink, bg: COLORS.pinkDim },
      { label: "MHC II", seq: "IQLGETRASFG", color: COLORS.purple, bg: COLORS.purpleDim },
      { label: "linker", seq: "GPGPG", color: COLORS.pink, bg: COLORS.pinkDim },
      { label: "Célula B", seq: "TSLQSMNTTFE", color: COLORS.warning, bg: `${COLORS.warning}22` },
    ];
    return (
      <div style={{...baseStyle, flexDirection: "column", gap: 16 }}>
        <div style={{
          fontFamily: FONT, fontSize: 10, color: COLORS.textMuted, letterSpacing: 2,
        }}>PROTEÍNA QUIMÉRICA MULTIEPÍTOPO</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", maxWidth: 500 }}>
          {segments.map((sg, i) => (
            <div key={i} style={{
              padding: "6px 10px", borderRadius: 6,
              background: sg.bg, border: `1px solid ${sg.color}44`,
              textAlign: "center",
            }}>
              <div style={{ fontFamily: FONT, fontSize: 8, color: sg.color, fontWeight: 700, marginBottom: 2 }}>
                {sg.label}
              </div>
              <div style={{ fontFamily: FONT, fontSize: 11, color: sg.color, letterSpacing: 1 }}>
                {sg.seq}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          {[
            { label: "EAAK", desc: "liga adjuvante", color: COLORS.textMuted },
            { label: "AAY", desc: "entre MHC I", color: COLORS.accent },
            { label: "GPGPG", desc: "entre MHC II", color: COLORS.pink },
          ].map((l, i) => (
            <div key={i} style={{
              fontFamily: FONT, fontSize: 9, color: l.color,
              display: "flex", alignItems: "center", gap: 4,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />
              <span style={{ fontWeight: 700 }}>{l.label}</span>
              <span style={{ color: COLORS.textMuted }}>{l.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="mhc" style={{
      minHeight: "100vh", padding: "clamp(72px, 10vh, 96px) clamp(16px, 4vw, 48px) clamp(32px, 5vh, 48px)",
    }}>
      <div style={{
        fontFamily: FONT, fontSize: 12, color: COLORS.purple,
        letterSpacing: 4, marginBottom: 8, fontWeight: 700,
      }}>IMUNOLOGIA</div>
      <h2 style={{
        fontFamily: FONT_BODY, fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800,
        color: COLORS.text, margin: "0 0 12px",
      }}>Como o Sistema Imune Reconhece Epítopos</h2>
      <p style={{
        fontFamily: FONT_BODY, fontSize: 15, color: COLORS.textDim,
        marginBottom: 40, maxWidth: 600, lineHeight: 1.6,
      }}>
        O princípio central da vacinologia reversa: identificar computacionalmente
        os fragmentos proteicos que o sistema imune reconheceria naturalmente.
      </p>

      {/* Phase selector */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24, flexWrap: "wrap" }}>
        {phases.map((ph, i) => (
          <button key={i} onClick={() => setPhase(i)} style={{
            background: i === phase ? `${COLORS.purple}22` : COLORS.surface,
            border: `1px solid ${i === phase ? COLORS.purple : COLORS.border}`,
            borderRadius: 20, padding: "8px 16px", cursor: "pointer",
            fontFamily: FONT, fontSize: 11, letterSpacing: 0.5,
            color: i === phase ? COLORS.purple : COLORS.textDim,
            fontWeight: i === phase ? 700 : 400, transition: "all 0.2s",
          }}>
            {i + 1}. {ph.title}
          </button>
        ))}
      </div>

      {/* Visual */}
      <div style={{
        background: COLORS.surface, borderRadius: 12,
        border: `1px solid ${COLORS.border}`, marginBottom: 16,
        overflow: "hidden",
      }}>
        {renderVisual()}
      </div>

      {/* Description */}
      <div style={{
        background: COLORS.surface, borderRadius: 12,
        border: `1px solid ${COLORS.purple}33`,
        borderLeft: `4px solid ${COLORS.purple}`, padding: 24,
      }}>
        <h3 style={{
          fontFamily: FONT_BODY, fontSize: 18, fontWeight: 700,
          color: COLORS.text, margin: "0 0 8px",
        }}>{p.title}</h3>
        <p style={{
          fontFamily: FONT_BODY, fontSize: 14, color: COLORS.textDim,
          lineHeight: 1.8, margin: 0,
        }}>{p.desc}</p>
      </div>
    </section>
  );
}

// ─── RAMACHANDRAN ───
function Ramachandran() {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [showGuide, setShowGuide] = useState(true);
  const svgRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // FIXED data points based on Victor's actual Ramachandran plot
  // useMemo prevents regeneration on every render (was causing position jumps)
  const points = useMemo(() => [
    // Beta-sheet / upper-left cluster (blue dots in original)
    { phi: -140, psi: 155, region: "Folha-β", aa: "Val", type: "favored" },
    { phi: -125, psi: 140, region: "Folha-β", aa: "Ile", type: "favored" },
    { phi: -115, psi: 135, region: "Folha-β", aa: "Thr", type: "favored" },
    { phi: -130, psi: 165, region: "Folha-β", aa: "Ala", type: "favored" },
    { phi: -80, psi: 150, region: "Folha-β", aa: "Leu", type: "favored" },
    { phi: -95, psi: 130, region: "Folha-β", aa: "Ser", type: "favored" },
    { phi: -70, psi: 140, region: "Folha-β", aa: "Phe", type: "favored" },
    { phi: -100, psi: 160, region: "Folha-β", aa: "Val", type: "favored" },
    { phi: -150, psi: 145, region: "Folha-β", aa: "Tyr", type: "favored" },
    // Alpha-helix R cluster (cyan dots in original — main cluster)
    { phi: -65, psi: -40, region: "α-hélice direita", aa: "Ala", type: "favored" },
    { phi: -62, psi: -45, region: "α-hélice direita", aa: "Leu", type: "favored" },
    { phi: -68, psi: -38, region: "α-hélice direita", aa: "Glu", type: "favored" },
    { phi: -58, psi: -48, region: "α-hélice direita", aa: "Lys", type: "favored" },
    { phi: -70, psi: -42, region: "α-hélice direita", aa: "Gln", type: "favored" },
    { phi: -63, psi: -35, region: "α-hélice direita", aa: "Arg", type: "favored" },
    { phi: -60, psi: -50, region: "α-hélice direita", aa: "Met", type: "favored" },
    { phi: -72, psi: -30, region: "α-hélice direita", aa: "Asn", type: "favored" },
    { phi: -55, psi: -42, region: "α-hélice direita", aa: "Ser", type: "favored" },
    { phi: -67, psi: -55, region: "α-hélice direita", aa: "Ala", type: "favored" },
    { phi: -75, psi: -35, region: "α-hélice direita", aa: "Leu", type: "favored" },
    { phi: -60, psi: -32, region: "α-hélice direita", aa: "Glu", type: "favored" },
    // Outlier/generously allowed region (red triangles in original — scattered upper middle)
    { phi: -60, psi: 95, region: "Generosamente permitida", aa: "Asn", type: "allowed" },
    { phi: -45, psi: 100, region: "Generosamente permitida", aa: "Asp", type: "allowed" },
    { phi: -55, psi: 110, region: "Generosamente permitida", aa: "Ser", type: "allowed" },
    { phi: -30, psi: 90, region: "Generosamente permitida", aa: "Gly", type: "allowed" },
    { phi: -70, psi: 85, region: "Generosamente permitida", aa: "Asn", type: "allowed" },
    { phi: -50, psi: 115, region: "Generosamente permitida", aa: "Asp", type: "allowed" },
    { phi: -35, psi: 105, region: "Generosamente permitida", aa: "Lys", type: "allowed" },
    { phi: -25, psi: 95, region: "Generosamente permitida", aa: "Ser", type: "allowed" },
    // Scattered right-side outliers (blue dots in original)
    { phi: 60, psi: 60, region: "Generosamente permitida", aa: "Gly", type: "allowed" },
    { phi: 80, psi: 100, region: "Região NÃO permitida", aa: "Pro", type: "outlier" },
    { phi: 55, psi: 45, region: "α-hélice esquerda", aa: "Gly", type: "allowed" },
    { phi: 70, psi: 25, region: "α-hélice esquerda", aa: "Gly", type: "allowed" },
    // More scattered (matching original plot)
    { phi: -90, psi: 5, region: "Permitida", aa: "Pro", type: "allowed" },
    { phi: -75, psi: 60, region: "Permitida", aa: "Asn", type: "allowed" },
    { phi: 140, psi: 120, region: "Região NÃO permitida", aa: "Asn", type: "outlier" },
    { phi: 65, psi: 85, region: "Região NÃO permitida", aa: "Pro", type: "outlier" },
  ], []);

  const W = 420, H = 420, PAD = 50;
  const toX = (phi) => ((phi + 180) / 360) * W + PAD;
  const toY = (psi) => (1 - (psi + 180) / 360) * H + PAD;

  const getPointColor = (pt) => {
    if (pt.type === "outlier") return COLORS.danger;
    if (pt.region === "α-hélice direita") return "#67e8f9"; // cyan like original
    if (pt.region === "Folha-β") return COLORS.blue;
    if (pt.region === "α-hélice esquerda") return COLORS.warning;
    if (pt.region === "Generosamente permitida") return COLORS.danger;
    return COLORS.blue;
  };

  const getPointShape = (pt) => {
    // Red points in original are triangles (generously allowed / outliers)
    if (pt.type === "allowed" && pt.region === "Generosamente permitida") return "triangle";
    if (pt.type === "outlier") return "triangle";
    return "circle";
  };

  const handleMouseEnter = (i, e) => {
    setHoveredPoint(i);
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (svgRect) {
      setTooltipPos({
        x: e.clientX - svgRect.left + 16,
        y: e.clientY - svgRect.top - 20,
      });
    }
  };

  // SVG contour paths approximating the classic Ramachandran allowed regions
  const contourPaths = [
    // Beta-sheet region (upper left) - outer
    `M ${toX(-180)} ${toY(180)} L ${toX(-180)} ${toY(45)} Q ${toX(-170)} ${toY(40)} ${toX(-155)} ${toY(40)} L ${toX(-50)} ${toY(55)} Q ${toX(-40)} ${toY(60)} ${toX(-40)} ${toY(75)} L ${toX(-40)} ${toY(180)} Z`,
    // Alpha-helix R region (left middle) - outer
    `M ${toX(-160)} ${toY(10)} Q ${toX(-155)} ${toY(-10)} ${toX(-120)} ${toY(-10)} L ${toX(-35)} ${toY(-10)} Q ${toX(-25)} ${toY(-15)} ${toX(-25)} ${toY(-25)} L ${toX(-25)} ${toY(-75)} Q ${toX(-30)} ${toY(-85)} ${toX(-45)} ${toY(-85)} L ${toX(-105)} ${toY(-80)} Q ${toX(-160)} ${toY(-65)} ${toX(-165)} ${toY(-30)} Z`,
    // Left-handed helix (right middle)
    `M ${toX(30)} ${toY(75)} Q ${toX(35)} ${toY(80)} ${toX(45)} ${toY(80)} L ${toX(95)} ${toY(70)} Q ${toX(105)} ${toY(60)} ${toX(100)} ${toY(35)} L ${toX(85)} ${toY(-10)} Q ${toX(75)} ${toY(-20)} ${toX(55)} ${toY(-15)} L ${toX(35)} ${toY(5)} Q ${toX(25)} ${toY(20)} ${toX(30)} ${toY(50)} Z`,
    // Upper-right small allowed region
    `M ${toX(40)} ${toY(180)} L ${toX(40)} ${toY(120)} Q ${toX(50)} ${toY(110)} ${toX(80)} ${toY(110)} L ${toX(180)} ${toY(110)} L ${toX(180)} ${toY(180)} Z`,
    // Lower-left wrap region
    `M ${toX(-180)} ${toY(-120)} Q ${toX(-170)} ${toY(-135)} ${toX(-140)} ${toY(-140)} L ${toX(-100)} ${toY(-145)} Q ${toX(-85)} ${toY(-150)} ${toX(-85)} ${toY(-165)} L ${toX(-90)} ${toY(-180)} L ${toX(-180)} ${toY(-180)} Z`,
  ];

  return (
    <section id="ramachandran" style={{
      minHeight: "100vh", padding: "clamp(72px, 10vh, 96px) clamp(16px, 4vw, 48px) clamp(32px, 5vh, 48px)",
    }}>
      <div style={{
        fontFamily: FONT, fontSize: 12, color: COLORS.warning,
        letterSpacing: 4, marginBottom: 8, fontWeight: 700,
      }}>VALIDAÇÃO</div>
      <h2 style={{
        fontFamily: FONT_BODY, fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800,
        color: COLORS.text, margin: "0 0 12px",
      }}>Gráfico de Ramachandran</h2>
      <p style={{
        fontFamily: FONT_BODY, fontSize: 15, color: COLORS.textDim,
        marginBottom: 32, maxWidth: 650, lineHeight: 1.6,
      }}>
        Valida a qualidade estereoquímica do modelo 3D. Cada ponto é um aminoácido
        da proteína quimérica, plotado pelos seus ângulos diedrais φ (phi) e ψ (psi).
        Bons modelos concentram pontos nas regiões permitidas.
        <span style={{ color: "#67e8f9" }}> Passe o mouse nos pontos.</span>
      </p>

      <div className="rama-row" style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        {/* Plot */}
        <div className="rama-plot" style={{
          background: COLORS.surface, borderRadius: 12,
          border: `1px solid ${COLORS.border}`, padding: 24, flex: "1 1 520px",
          position: "relative",
        }}>
          <svg ref={svgRef} className="rama-svg"
            viewBox={`0 0 ${W + PAD * 2} ${H + PAD * 2 + 20}`}
            style={{ width: "100%", maxWidth: "100%" }}
          >
            {/* Background - plot area */}
            <rect x={PAD} y={PAD} width={W} height={H}
              fill="#0d1117" stroke={COLORS.border} strokeWidth="1" />

            {/* Contour regions */}
            {contourPaths.map((d, i) => (
              <path key={`contour-${i}`} d={d}
                fill="none" stroke="#334155" strokeWidth="1.5" opacity="0.7" />
            ))}

            {/* Inner contours (core favored - tighter) */}
            <ellipse cx={toX(-65)} cy={toY(-45)} rx={35} ry={28}
              fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />
            <ellipse cx={toX(-120)} cy={toY(140)} rx={45} ry={30}
              fill="none" stroke="#475569" strokeWidth="1" opacity="0.5" />

            {/* Axes */}
            <line x1={PAD} y1={PAD} x2={PAD} y2={PAD + H} stroke={COLORS.textMuted} strokeWidth="1" />
            <line x1={PAD} y1={PAD + H} x2={PAD + W} y2={PAD + H} stroke={COLORS.textMuted} strokeWidth="1" />
            <line x1={PAD + W} y1={PAD} x2={PAD + W} y2={PAD + H} stroke={COLORS.textMuted} strokeWidth="0.5" />
            <line x1={PAD} y1={PAD} x2={PAD + W} y2={PAD} stroke={COLORS.textMuted} strokeWidth="0.5" />

            {/* Grid lines & labels */}
            {[-180, -120, -60, 0, 60, 120, 180].map(v => (
              <g key={`gx${v}`}>
                {v !== -180 && v !== 180 && (
                  <line x1={toX(v)} y1={PAD} x2={toX(v)} y2={PAD + H}
                    stroke={COLORS.border} strokeWidth="0.5" />
                )}
                <text x={toX(v)} y={PAD + H + 16} textAnchor="middle" fill={COLORS.textMuted}
                  fontFamily={FONT} fontSize="9">{v}</text>
              </g>
            ))}
            {[-180, -120, -60, 0, 60, 120, 180].map(v => (
              <g key={`gy${v}`}>
                {v !== -180 && v !== 180 && (
                  <line x1={PAD} y1={toY(v)} x2={PAD + W} y2={toY(v)}
                    stroke={COLORS.border} strokeWidth="0.5" />
                )}
                <text x={PAD - 8} y={toY(v) + 3} textAnchor="end" fill={COLORS.textMuted}
                  fontFamily={FONT} fontSize="9">{v}</text>
              </g>
            ))}

            {/* Axis labels */}
            <text x={PAD + W / 2} y={PAD + H + 38} textAnchor="middle" fill={COLORS.textDim}
              fontFamily={FONT} fontSize="12" fontWeight="700">φ (phi) °</text>
            <text x={12} y={PAD + H / 2} textAnchor="middle" fill={COLORS.textDim}
              fontFamily={FONT} fontSize="12" fontWeight="700"
              transform={`rotate(-90, 12, ${PAD + H / 2})`}>ψ (psi) °</text>

            {/* Data points - rendered as fixed positions, never move */}
            {points.map((pt, i) => {
              const cx = toX(pt.phi);
              const cy = toY(pt.psi);
              const isHovered = hoveredPoint === i;
              const color = getPointColor(pt);
              const shape = getPointShape(pt);
              const dimmed = hoveredPoint !== null && !isHovered;

              return (
                <g key={i}>
                  {/* Invisible larger hit target - prevents jitter */}
                  <circle cx={cx} cy={cy} r={12} fill="transparent"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => handleMouseEnter(i, e)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  {/* Visible point */}
                  {shape === "circle" ? (
                    <circle cx={cx} cy={cy} r={isHovered ? 6 : 4}
                      fill={color} opacity={dimmed ? 0.25 : 0.9}
                      stroke={isHovered ? "#fff" : "none"} strokeWidth={1.5}
                      pointerEvents="none"
                    />
                  ) : (
                    <polygon
                      points={`${cx},${cy - (isHovered ? 7 : 5)} ${cx - (isHovered ? 6 : 4)},${cy + (isHovered ? 4 : 3)} ${cx + (isHovered ? 6 : 4)},${cy + (isHovered ? 4 : 3)}`}
                      fill={color} opacity={dimmed ? 0.25 : 0.9}
                      stroke={isHovered ? "#fff" : "none"} strokeWidth={1.5}
                      pointerEvents="none"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Tooltip rendered OUTSIDE SVG as HTML overlay - no position conflicts */}
          {hoveredPoint !== null && (
            <div style={{
              position: "absolute",
              left: tooltipPos.x, top: tooltipPos.y,
              background: COLORS.bg, border: `1px solid ${getPointColor(points[hoveredPoint])}`,
              borderRadius: 8, padding: "10px 14px", pointerEvents: "none",
              zIndex: 10, minWidth: 160,
              boxShadow: `0 4px 20px ${COLORS.bg}cc`,
            }}>
              <div style={{
                fontFamily: FONT, fontSize: 12, fontWeight: 700,
                color: getPointColor(points[hoveredPoint]), marginBottom: 4,
              }}>
                {points[hoveredPoint].aa}
                <span style={{ color: COLORS.textMuted, fontWeight: 400, marginLeft: 6 }}>
                  Resíduo {hoveredPoint + 1}
                </span>
              </div>
              <div style={{
                fontFamily: FONT, fontSize: 11, color: COLORS.textDim, marginBottom: 2,
              }}>
                φ = {points[hoveredPoint].phi}° &nbsp; ψ = {points[hoveredPoint].psi}°
              </div>
              <div style={{
                fontFamily: FONT, fontSize: 10,
                color: points[hoveredPoint].type === "outlier" ? COLORS.danger : COLORS.accent,
                fontWeight: 600,
              }}>
                {points[hoveredPoint].region}
              </div>
            </div>
          )}
        </div>

        {/* Guide */}
        <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 16 }}>
          <button onClick={() => setShowGuide(!showGuide)} style={{
            background: COLORS.surface, border: `1px solid ${COLORS.border}`,
            borderRadius: 8, padding: "12px 16px", cursor: "pointer",
            fontFamily: FONT, fontSize: 12, color: COLORS.text,
            textAlign: "left", fontWeight: 700,
          }}>
            {showGuide ? "▼" : "▶"} COMO LER O GRÁFICO
          </button>
          {showGuide && (
            <div style={{
              background: COLORS.surface, borderRadius: 12,
              border: `1px solid ${COLORS.border}`, padding: 20,
            }}>
              <div style={{
                fontFamily: FONT_BODY, fontSize: 13, color: COLORS.textDim,
                lineHeight: 1.8, marginBottom: 16,
              }}>
                Cada aminoácido numa cadeia proteica é conectado por duas ligações
                peptídicas. Os ângulos de rotação dessas ligações são <strong style={{ color: COLORS.text }}>φ (phi)</strong> e <strong style={{ color: COLORS.text }}>ψ (psi)</strong>.
                Nem todas as combinações são fisicamente possíveis — alguns ângulos causam
                colisões estéricas entre átomos.
              </div>

              {[
                { color: "#67e8f9", shape: "●", label: "α-hélice direita", desc: "Região mais populosa. Os aminoácidos formam uma espiral regular estabilizada por pontes de hidrogênio. ~60% dos resíduos ficam aqui em proteínas bem dobradas." },
                { color: COLORS.blue, shape: "●", label: "Folha-β", desc: "Fitas estendidas lado a lado. Aminoácidos como Val, Ile e Thr têm preferência por essa conformação." },
                { color: COLORS.danger, shape: "▲", label: "Generosamente permitida", desc: "Regiões com leve tensão estérica. Alguns resíduos podem ocupar essas posições, especialmente Gly, Asn e Asp." },
                { color: COLORS.warning, shape: "●", label: "α-hélice esquerda", desc: "Rara. Quase exclusiva de glicinas, que por não terem cadeia lateral volumosa podem adotar ângulos incomuns." },
              ].map((r, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, marginBottom: 14,
                  padding: 10, borderRadius: 8,
                  background: `${r.color}08`,
                  border: `1px solid ${r.color}22`,
                }}>
                  <div style={{
                    fontSize: 16, color: r.color, flexShrink: 0, marginTop: 1,
                    lineHeight: 1,
                  }}>{r.shape}</div>
                  <div>
                    <div style={{
                      fontFamily: FONT, fontSize: 11, color: r.color,
                      fontWeight: 700, marginBottom: 4,
                    }}>{r.label.toUpperCase()}</div>
                    <div style={{
                      fontFamily: FONT_BODY, fontSize: 12, color: COLORS.textDim,
                      lineHeight: 1.6,
                    }}>{r.desc}</div>
                  </div>
                </div>
              ))}

              <div style={{
                fontFamily: FONT_BODY, fontSize: 12, color: COLORS.textMuted,
                marginTop: 8, padding: "8px 10px", borderRadius: 6,
                background: `${COLORS.border}44`,
                lineHeight: 1.6,
              }}>
                <strong style={{ color: COLORS.textDim }}>Contornos</strong> = limites das regiões permitidas calculados por
                impedimento estérico (van der Waals). As curvas delimitam onde os átomos
                da cadeia principal não colidem entre si.
              </div>
            </div>
          )}

          <div style={{
            background: COLORS.surface, borderRadius: 12,
            border: `1px solid ${COLORS.accent}33`,
            borderLeft: `4px solid ${COLORS.accent}`, padding: 16,
          }}>
            <div style={{
              fontFamily: FONT, fontSize: 11, color: COLORS.accent,
              fontWeight: 700, marginBottom: 6,
            }}>INTERPRETAÇÃO DO MODELO</div>
            <div style={{
              fontFamily: FONT_BODY, fontSize: 13, color: COLORS.textDim, lineHeight: 1.7,
            }}>
              Se &gt;90% dos resíduos estão em regiões favoráveis, o modelo é
              estereoquimicamente <strong style={{ color: COLORS.accent }}>aceitável</strong>.
              Combine com o score <strong style={{ color: COLORS.purple }}>pLDDT</strong> do
              AlphaFold para avaliar confiança por resíduo.
            </div>
          </div>

          {/* Stats summary */}
          <div style={{
            background: COLORS.surface, borderRadius: 12,
            border: `1px solid ${COLORS.border}`, padding: 16,
          }}>
            <div style={{
              fontFamily: FONT, fontSize: 11, color: COLORS.textMuted,
              fontWeight: 700, marginBottom: 12, letterSpacing: 1,
            }}>DISTRIBUIÇÃO DOS RESÍDUOS</div>
            {[
              { label: "Regiões favoráveis", count: 21, pct: "56.8%", color: "#67e8f9" },
              { label: "Permitidas adicionais", count: 11, pct: "29.7%", color: COLORS.blue },
              { label: "Generosamente permitidas", count: 2, pct: "5.4%", color: COLORS.warning },
              { label: "Não permitidas", count: 3, pct: "8.1%", color: COLORS.danger },
            ].map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 8,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color, flexShrink: 0 }} />
                <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: COLORS.textDim, flex: 1 }}>{s.label}</div>
                <div style={{ fontFamily: FONT, fontSize: 11, color: s.color, fontWeight: 700 }}>{s.pct}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN APP ───
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNav = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ["hero", "pipeline", "mhc", "ramachandran"].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      background: COLORS.bg, color: COLORS.text, minHeight: "100vh",
      fontFamily: FONT_BODY,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; }
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
        ::selection { background: ${COLORS.accentDim}; color: ${COLORS.accent}; }
        @media (max-width: 900px) {
          .rama-plot { flex: 1 1 320px !important; padding: 16px !important; }
          .rama-svg  { max-width: 100% !important; }
          .pipeline-steps button { min-width: 110px !important; }
        }
        @media (max-width: 640px) {
          .nav-items { gap: 0 !important; }
          .nav-items button { padding: 8px 10px !important; font-size: 10px !important; letter-spacing: 1px !important; }
          .pipeline-steps button { min-width: 0 !important; flex: 1 1 140px !important; font-size: 10px !important; }
          .rama-row { gap: 16px !important; }
        }
        @media (max-width: 420px) {
          .nav-items button { padding: 6px 8px !important; letter-spacing: 0.5px !important; font-size: 9px !important; }
        }
      `}</style>
      <Nav active={activeSection} onNav={handleNav} />
      <Hero />
      <Pipeline />
      <MHCSection />
      <Ramachandran />
      <footer style={{
        padding: "clamp(24px, 5vw, 48px)", textAlign: "center", borderTop: `1px solid ${COLORS.border}`,
      }}>
        <div style={{
          fontFamily: FONT, fontSize: 11, color: COLORS.textMuted, letterSpacing: 2,
        }}>
          VACINOLOGIA REVERSA — <span style={{ fontStyle: "italic" }}>Acinetobacter baumannii</span>
        </div>
        <div style={{
          fontFamily: FONT_BODY, fontSize: 12, color: COLORS.textMuted, marginTop: 8,
        }}>
          Yuri Rocha · Marcos Paulo Pimenta · Victor Abdallah
        </div>
      </footer>
    </div>
  );
}
