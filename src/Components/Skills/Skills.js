import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiOpenai,
  SiVercel,
  SiMui,
  SiAntdesign,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiBitbucket,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaBootstrap, FaReact, FaJira } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import { RiRobot2Line } from "react-icons/ri";
import { TbLink, TbTopologyStar3, TbPlugConnected, TbPrompt, TbSearch } from "react-icons/tb";
import { SkillsContainerWrapper } from "./SkillsStyled";
import { Section, SectionHeading, Reveal } from "../Shared";

const SKILL_GROUPS = [
  {
    label: "Core",
    skills: [
      { name: "TypeScript", Icon: SiTypescript, vendor: "typescript" },
      { name: "JavaScript", Icon: SiJavascript, vendor: "javascript" },
      { name: "HTML", Icon: AiFillHtml5, vendor: "html" },
      { name: "CSS", Icon: SiCss3, vendor: "css" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "ReactJs", Icon: FaReact, vendor: "react" },
      { name: "NextJs", Icon: SiNextdotjs, vendor: "nextjs" },
      { name: "Redux", Icon: SiRedux, vendor: "redux" },
      { name: "Tailwind", Icon: SiTailwindcss, vendor: "tailwind" },
      { name: "Bootstrap", Icon: FaBootstrap, vendor: "bootstrap" },
      { name: "Material-UI", Icon: SiMui, vendor: "mui" },
      { name: "ANT-Design", Icon: SiAntdesign, vendor: "antd" },
    ],
  },
  {
    label: "AI & LLM",
    skills: [
      { name: "OpenAI API", Icon: SiOpenai, vendor: "openai" },
      { name: "Claude API", Icon: HiOutlineSparkles, vendor: "claude" },
      { name: "Gemini", Icon: BsStars, vendor: "gemini" },
      { name: "LangChain", Icon: TbLink, vendor: "langchain" },
      { name: "LangGraph", Icon: TbTopologyStar3, vendor: "langgraph" },
      { name: "AI Agents", Icon: RiRobot2Line, vendor: "agents" },
      { name: "MCP", Icon: TbPlugConnected, vendor: "mcp" },
      { name: "Vercel AI SDK", Icon: SiVercel, vendor: "vercel" },
      { name: "Prompt Engineering", Icon: TbPrompt, vendor: "prompt" },
      { name: "Typesense", Icon: TbSearch, vendor: "typesense" },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "NodeJs", Icon: IoLogoNodejs, vendor: "nodejs" },
      { name: "ExpressJs", Icon: SiExpress, vendor: "express" },
      { name: "MongoDB", Icon: SiMongodb, vendor: "mongodb" },
      { name: "Firebase", Icon: SiFirebase, vendor: "firebase" },
    ],
  },
  {
    label: "Tooling",
    skills: [
      { name: "Github", Icon: SiGithub, vendor: "github" },
      { name: "BitBucket", Icon: SiBitbucket, vendor: "bitbucket" },
      { name: "Jira", Icon: FaJira, vendor: "jira" },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" tinted>
      <SkillsContainerWrapper>
        <SectionHeading eyebrowNumber="02" eyebrow="Skills" title="My Skills" />

        <div className="skill-groups">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 80}>
              <span className="skill-group-label">{group.label}</span>
              <div className="skill-chips">
                {group.skills.map(({ name, Icon, vendor }) => (
                  <span key={name} className="skill-chip" style={{ "--chip-vendor": `var(--vendor-${vendor})` }}>
                    <Icon className="skill-chip-icon" aria-hidden="true" />
                    <span className="skill-chip-label">{name}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </SkillsContainerWrapper>
    </Section>
  );
};

export default Skills;
