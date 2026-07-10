import { BriefcaseIcon, CodeIcon, LayersIcon } from "lucide-react"

import type { ResearchItem, SnapshotItem } from "../types/featured"

export const SNAPSHOT_ITEMS: SnapshotItem[] = [
  {
    id: "role",
    label: "current role",
    value: "SDE II, Full Stack Developer at AdsCrush",
    icon: BriefcaseIcon,
  },
  {
    id: "fit",
    label: "strongest fit",
    value: "SaaS workflows, e-commerce, CMS platforms, internal tools",
    icon: LayersIcon,
  },
  {
    id: "stack",
    label: "daily stack",
    value: "TypeScript, Next.js, React, Node.js, PostgreSQL",
    icon: CodeIcon,
  },
]

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "imace",
    title: "Project IMACE",
    subtitle: "Integrated Modular Architecture for Cognitive Emulation",
    description:
      "Open-source cognitive architecture framework for intelligence emulation research.",
    link: "https://github.com/project-imace",
  },
  {
    id: "the-altern",
    title: "The Altern",
    subtitle: "AI Research Collective",
    description:
      "Collaborated with **IBM Research** on advancing language model architectures and anthropomorphic AI systems.",
    link: "https://github.com/thealtern",
  },
  {
    id: "revarie-lm",
    title: "Revarie LM v1.0",
    subtitle:
      "Research on the Empirical Values of Anthropomorphic Reflections in Intelligence Emulation via Language Models",
    description:
      "Exploring anthropomorphic reflection in LLM-based cognitive emulation systems.",
    link: "https://revarie.imace.online/lm-v1",
  },
]
