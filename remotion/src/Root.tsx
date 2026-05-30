import "./index.css";
import { Composition } from "remotion";
import { KernelSpaceIntro, Video01HookCards, Video01NextTease, Video01SkillSplit } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KernelSpaceIntro"
        component={KernelSpaceIntro}
        durationInFrames={90}
        fps={30}
        width={2560}
        height={1440}
        defaultProps={{
          title: "kernel_space",
        }}
      />

      <Composition
        id="Video01HookCards"
        component={Video01HookCards}
        durationInFrames={120}
        fps={30}
        width={2560}
        height={1440}
        defaultProps={{
          introLine: "AI code ezhuthum.",
          questionLine: "Pakshe production software?",
          emphasisLine: "Vere oru game.",
          footerLabel: "code generate cheyyunnathil ninn production vare",
        }}
      />

      <Composition
        id="Video01SkillSplit"
        component={Video01SkillSplit}
        durationInFrames={150}
        fps={30}
        width={2560}
        height={1440}
        defaultProps={{
          leftTitle: "Strong fundamentals",
          rightTitle: "AI leverage",
          leftPoints: ["System thinking", "Debugging", "Maintainability"],
          rightPoints: ["Speed", "Iteration", "Tool use"],
          mergeLabel: "Speed + judgment",
        }}
      />

      <Composition
        id="Video01NextTease"
        component={Video01NextTease}
        durationInFrames={120}
        fps={30}
        width={2560}
        height={1440}
        defaultProps={{
          title: "Next: TinqrBox full story",
          cards: [
            "What it is",
            "Why I built it",
            "Architecture",
            "AI helped where?",
            "Engineer stepped in where?",
            "What actually broke",
          ],
          footerLabel: "adutha video-yil proper aayi dive cheyyam",
        }}
      />
    </>
  );
};
