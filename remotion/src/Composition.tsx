import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

type KernelSpaceIntroProps = {
  title: string;
};

type Video01HookCardsProps = {
  introLine: string;
  questionLine: string;
  emphasisLine: string;
  footerLabel: string;
};

type Video01SkillSplitProps = {
  leftTitle: string;
  rightTitle: string;
  leftPoints: string[];
  rightPoints: string[];
  mergeLabel: string;
};

type Video01NextTeaseProps = {
  title: string;
  cards: string[];
  footerLabel: string;
};

const accents = ["#4ec9b0", "#569cd6", "#ce9178", "#dcdcaa"];
const shellFont = '"SF Mono", "JetBrains Mono", "IBM Plex Mono", Menlo, monospace';
const displayFont = '"SF Pro Display", "Helvetica Neue", Arial, sans-serif';

const typingSlice = (text: string, frame: number, startFrame: number, endFrame: number) => {
  const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return text.slice(0, Math.max(0, Math.floor(progress * text.length)));
};

const WorkspaceShell: React.FC<{
  children: React.ReactNode;
  showChrome?: boolean;
  showFrame?: boolean;
  kicker?: string;
  rightLabel?: string;
}> = ({ children, showChrome = true, showFrame = true, kicker, rightLabel }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d0d0d",
        color: "#f0f0f0",
        fontFamily: shellFont,
        overflow: "hidden",
      }}
    >
      {showFrame ? (
        <AbsoluteFill
          style={{
            inset: 60,
            border: "1px solid rgba(240,240,240,0.08)",
          }}
        />
      ) : null}

      {showChrome ? (
        <>
          <div
            style={{
              position: "absolute",
              top: 84,
              left: 84,
              right: 84,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(240,240,240,0.55)",
            }}
          >
            <span>{kicker}</span>
            <span>{rightLabel}</span>
          </div>

          <div
            style={{
              position: "absolute",
              left: 84,
              right: 84,
              top: 132,
              height: 1,
              backgroundColor: "rgba(240,240,240,0.08)",
            }}
          />
        </>
      ) : null}

      {children}
    </AbsoluteFill>
  );
};

const Pill: React.FC<{
  text: string;
  color?: string;
}> = ({ text, color = "rgba(240,240,240,0.18)" }) => {
  return (
    <div
      style={{
        padding: "12px 18px",
        borderRadius: 999,
        border: `1px solid ${color}`,
        backgroundColor: "rgba(255,255,255,0.02)",
        color: "rgba(240,240,240,0.78)",
        fontSize: 18,
        lineHeight: 1,
        fontFamily: shellFont,
      }}
    >
      {text}
    </div>
  );
};

export const KernelSpaceIntro: React.FC<KernelSpaceIntroProps> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const reveal = spring({
    frame,
    fps,
    config: {
      damping: 200,
      stiffness: 140,
      mass: 0.9,
    },
  });

  const titleSlide = interpolate(frame, [0, 28], [36, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleText = typingSlice(title, frame, 4, 24);
  const holdOpacity = frame >= 62 ? 0 : interpolate(frame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorOpacity = frame >= 62 ? 0 : frame % 24 < 12 ? 1 : 0.18;
  const isSelected = frame >= 54 && frame < 62;
  const isDeleted = frame >= 62;
  const textOpacity = isDeleted ? 0 : 1;
  const selectionOpacity = isSelected ? 1 : 0;

  return (
    <WorkspaceShell showChrome={false} showFrame={false}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `translateY(calc(-50% + ${titleSlide}px)) scale(${0.96 + reveal * 0.04})`,
          opacity: titleOpacity * holdOpacity,
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -18,
              top: 24,
              height: 134,
              width: 950,
              backgroundColor: "#569cd6",
              opacity: selectionOpacity * 0.92,
            }}
          />
          <span
            style={{
              position: "relative",
              fontFamily: displayFont,
              fontSize: 152,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: -7,
              color: "#f0f0f0",
              opacity: textOpacity,
            }}
          >
            {titleText}
          </span>
          <span
            style={{
              position: "relative",
              fontFamily: shellFont,
              fontSize: 148,
              fontWeight: 500,
              lineHeight: 0.88,
              letterSpacing: -3,
              color: "#f0f0f0",
              opacity: cursorOpacity * textOpacity,
            }}
          >
            |
          </span>
        </div>
      </div>
    </WorkspaceShell>
  );
};

export const Video01HookCards: React.FC<Video01HookCardsProps> = ({
  introLine,
  questionLine,
  emphasisLine,
}) => {
  const frame = useCurrentFrame();

  const introText = typingSlice(introLine, frame, 0, 22);
  const questionText = typingSlice(questionLine, frame, 24, 50);
  const questionOpacity = interpolate(frame, [20, 44, 70], [0, 1, 0.32], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const emphasisOpacity = interpolate(frame, [58, 76], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const heroSlide = interpolate(frame, [0, 26], [90, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const emphasisWords = emphasisLine.replace(/\./g, "").split(" ");

  return (
    <WorkspaceShell showChrome={false} showFrame={false}>
      <div
        style={{
          position: "absolute",
          left: 108,
          top: 112,
          width: 760,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <span
          style={{
            color: accents[0],
            fontSize: 16,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          kernel_space intro
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            minHeight: 168,
            transform: `translateY(${heroSlide}px)`,
          }}
        >
          <span
            style={{
              fontFamily: displayFont,
              fontSize: 150,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: -7,
            }}
          >
            {introText}
          </span>
        </div>

        <div
          style={{
            width: 560,
            paddingTop: 18,
            opacity: questionOpacity,
            transform: `translateX(${interpolate(frame, [18, 44], [120, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px)`,
            borderTop: "1px solid rgba(240,240,240,0.14)",
          }}
        >
          <div
            style={{
              fontFamily: displayFont,
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: -2,
              color: "rgba(240,240,240,0.92)",
            }}
          >
            {questionText}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 118,
          top: 136,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
          opacity: emphasisOpacity,
        }}
      >
        <span
          style={{
            color: "rgba(240,240,240,0.46)",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          {emphasisWords.slice(0, 2).join(" ")}
        </span>
        <span
          style={{
            fontFamily: displayFont,
            fontSize: 164,
            fontWeight: 600,
            lineHeight: 0.88,
            letterSpacing: -8,
            color: accents[0],
          }}
        >
          {emphasisWords[2] ?? "game"}
        </span>
        <div
          style={{
            width: 340,
            height: 1,
            backgroundColor: "rgba(240,240,240,0.14)",
          }}
        />
        <span
          style={{
            width: 360,
            fontFamily: displayFont,
            fontSize: 24,
            lineHeight: 1.2,
            color: "rgba(240,240,240,0.64)",
          }}
        >
          Real software still needs architecture, debugging, deployment, and judgment.
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 108,
          bottom: 92,
          width: 980,
          display: "flex",
          gap: 14,
          opacity: interpolate(frame, [56, 80], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Pill text="real systems" color={accents[0]} />
        <Pill text="deploy pressure" color="rgba(240,240,240,0.18)" />
        <Pill text="manual effort" color="rgba(240,240,240,0.18)" />
        <Pill text="engineering judgment" color="rgba(240,240,240,0.18)" />
      </div>
    </WorkspaceShell>
  );
};

export const Video01SkillSplit: React.FC<Video01SkillSplitProps> = ({
  leftTitle,
  rightTitle,
  leftPoints,
  rightPoints,
  mergeLabel,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftPanel = spring({
    frame,
    fps,
    config: {
      damping: 200,
      stiffness: 130,
      mass: 0.85,
    },
  });
  const rightPanel = spring({
    frame: Math.max(0, frame - 8),
    fps,
    config: {
      damping: 200,
      stiffness: 130,
      mass: 0.85,
    },
  });
  const mergeProgress = spring({
    frame: Math.max(0, frame - 72),
    fps,
    config: {
      damping: 210,
      stiffness: 130,
      mass: 0.95,
    },
  });

  return (
    <WorkspaceShell showChrome={false} showFrame={false}>
      <div
        style={{
          position: "absolute",
          left: 108,
          top: 102,
          fontFamily: displayFont,
          fontSize: 122,
          fontWeight: 600,
          lineHeight: 0.92,
          letterSpacing: -6,
          color: "#f0f0f0",
        }}
      >
        Build faster.
      </div>

      <div
        style={{
          position: "absolute",
          left: 112,
          top: 208,
          fontFamily: displayFont,
          fontSize: 64,
          fontWeight: 500,
          lineHeight: 0.96,
          letterSpacing: -3,
          color: "rgba(240,240,240,0.42)",
        }}
      >
        Think deeper.
      </div>

      <div
        style={{
          position: "absolute",
          left: 108,
          right: 108,
          top: 324,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 560,
            minHeight: 250,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            transform: `translateX(${(1 - leftPanel) * -80 + mergeProgress * 64}px)`,
            opacity: 0.28 + leftPanel * 0.72,
          }}
        >
          <div
            style={{
              width: 80,
              height: 2,
              backgroundColor: accents[0],
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <span
              style={{
                fontFamily: displayFont,
                fontSize: 84,
                fontWeight: 600,
                lineHeight: 0.92,
                letterSpacing: -4,
                color: "#f0f0f0",
              }}
            >
              {leftTitle}
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                maxWidth: 500,
              }}
            >
              {leftPoints.map((point, index) => (
                <div
                  key={point}
                  style={{
                    opacity: interpolate(frame, [12 + index * 5, 30 + index * 5], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <Pill text={point} color={accents[0]} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            width: 220,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: 118,
            opacity: 0.2 + mergeProgress * 0.8,
          }}
        >
          <span
            style={{
              fontFamily: displayFont,
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: -1,
              color: "rgba(240,240,240,0.38)",
            }}
          >
            +
          </span>
        </div>

        <div
          style={{
            width: 560,
            minHeight: 250,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            transform: `translateX(${(1 - rightPanel) * 80 - mergeProgress * 64}px)`,
            opacity: 0.28 + rightPanel * 0.72,
          }}
        >
          <div
            style={{
              width: 80,
              height: 2,
              backgroundColor: accents[1],
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <span
              style={{
                fontFamily: displayFont,
                fontSize: 84,
                fontWeight: 600,
                lineHeight: 0.92,
                letterSpacing: -4,
                color: "#f0f0f0",
              }}
            >
              {rightTitle}
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                maxWidth: 500,
              }}
            >
              {rightPoints.map((point, index) => (
                <div
                  key={point}
                  style={{
                    opacity: interpolate(frame, [20 + index * 5, 38 + index * 5], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <Pill text={point} color={accents[1]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 108,
          right: 108,
          bottom: 126,
          display: "flex",
          justifyContent: "center",
          transform: `translateY(${(1 - mergeProgress) * 26}px)`,
          opacity: mergeProgress,
        }}
      >
        <span
          style={{
            fontFamily: displayFont,
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.06,
            color: "#f0f0f0",
            letterSpacing: -3,
          }}
        >
          {mergeLabel}
        </span>
      </div>
    </WorkspaceShell>
  );
};

export const Video01NextTease: React.FC<Video01NextTeaseProps> = ({ cards }) => {
  const frame = useCurrentFrame();
  const heroCards = cards.slice(0, 4);

  return (
    <WorkspaceShell showChrome={false} showFrame={false}>
      <div
        style={{
          position: "absolute",
          left: 108,
          top: 106,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: displayFont,
            fontSize: 118,
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: -5,
            width: 700,
          }}
        >
          TinqrBox
        </span>
        <span
          style={{
            fontFamily: displayFont,
            fontSize: 34,
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: -1,
            color: accents[0],
          }}
        >
          full story
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 108,
          top: 300,
          width: 540,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: accents[0],
          }}
        />
        <span
          style={{
            fontFamily: displayFont,
            fontSize: 30,
            fontWeight: 500,
            lineHeight: 1.18,
            letterSpacing: -1,
            color: "rgba(240,240,240,0.78)",
          }}
        >
          Real architecture, real trade-offs, real places where AI helped and where engineering still had to step in.
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          right: 124,
          top: 124,
          width: 760,
          height: 700,
          display: "block",
        }}
      >
        {heroCards.map((card, index) => {
          const positions = [
            { top: 36, left: 68, size: 32, opacity: 0.54, width: 220, weight: 500 },
            { top: 182, left: 196, size: 56, opacity: 0.72, width: 380, weight: 500 },
            { top: 334, left: 62, size: 98, opacity: 0.98, width: 520, weight: 600 },
            { top: 542, left: 252, size: 46, opacity: 0.64, width: 360, weight: 500 },
          ];

          const position = positions[index] ?? positions[positions.length - 1];
          const opacity = interpolate(frame, [16 + index * 6, 42 + index * 6], [0, position.opacity], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const translateY = interpolate(frame, [14 + index * 6, 40 + index * 6], [34, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={card}
              style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                transform: `translateY(${translateY}px)`,
                opacity,
              }}
            >
              <span
                style={{
                  fontFamily: displayFont,
                  fontSize: position.size,
                  lineHeight: 1.04,
                  letterSpacing: -1,
                  fontWeight: position.weight,
                  width: position.width,
                  color: "rgba(240,240,240,0.92)",
                }}
              >
                {card}
              </span>
            </div>
          );
        })}

        <div
          style={{
            position: "absolute",
            right: 46,
            bottom: 46,
            width: 280,
            fontFamily: displayFont,
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.2,
            color: "rgba(240,240,240,0.22)",
            textAlign: "left",
          }}
        >
          AI exact aayi evide help cheythu.
          <br />
          Engineer evide step in cheythu.
        </div>
      </div>
    </WorkspaceShell>
  );
};
