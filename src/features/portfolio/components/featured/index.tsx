import { ArrowUpRightIcon, FileDownIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { Markdown } from "@/components/markdown"
import { CONTACT_EMAIL, CV_URL } from "@/config/site"
import { decodeEmail } from "@/utils/string"

import { RESEARCH_ITEMS, SNAPSHOT_ITEMS } from "../../data/featured"
import { Panel, PanelHeader, PanelTitle } from "../panel"

export function Featured() {
  return (
    <Panel id="featured">
      <PanelHeader>
        <PanelTitle>Featured</PanelTitle>
      </PanelHeader>

      <div className="relative py-5">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge" />
          <div className="border-l border-edge" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:pr-3 sm:pl-3">
            <SnapshotColumn />
          </div>
          <div className="sm:pr-3 sm:pl-3">
            <ResearchColumn />
          </div>
        </div>
      </div>
    </Panel>
  )
}

function SnapshotColumn() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs tracking-[0.22em] text-success uppercase">
          recruiter snapshot
        </h3>
        <span className="rounded-md border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-xs font-semibold tracking-wider text-success">
          SDE II
        </span>
      </div>
      <div className="space-y-3">
        <h4 className="font-mono text-2xl font-semibold tracking-tight">
          quick signal
        </h4>
        <p className="font-mono text-sm leading-relaxed text-muted-foreground">
          the short version: i am an SDE II full stack developer, hands-on
          across the stack, most interested in teams where product thinking and
          engineering ownership meet.
        </p>
      </div>
      <ul className="space-y-3">
        {SNAPSHOT_ITEMS.map((item) => (
          <li key={item.id}>
            <div className="rounded-lg border border-edge p-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-edge bg-muted/50">
                  <item.icon className="size-4 text-muted-foreground" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="font-mono text-sm">{item.value}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 font-mono"
          nativeButton={false}
          render={<a href={`mailto:${decodeEmail(CONTACT_EMAIL)}`} />}
        >
          <MailIcon />
          contact
          <ArrowUpRightIcon className="size-3 text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 font-mono"
          nativeButton={false}
          render={<a href={CV_URL} target="_blank" rel="noopener" />}
        >
          <FileDownIcon />
          download CV
          <ArrowUpRightIcon className="size-3 text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}

function ResearchColumn() {
  return (
    <div className="space-y-4">
      <h3 className="font-mono text-xs tracking-[0.22em] text-success uppercase">
        open source & research
      </h3>
      <p className="font-mono text-sm leading-relaxed text-muted-foreground">
        projects and research i actively contribute to, spanning cognitive
        architectures, language model systems, and developer tooling.
      </p>
      <ul className="space-y-3">
        {RESEARCH_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              className="group block rounded-lg border border-edge p-3 transition-colors hover:bg-accent-muted"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <p className="font-mono text-sm font-medium">{item.title}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {item.subtitle}
                  </p>
                  <div className="font-mono text-xs leading-relaxed text-muted-foreground/80 [&_p]:!m-0 [&_p]:!text-xs [&_p]:!leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground">
                    <Markdown>{item.description}</Markdown>
                  </div>
                </div>
                <ArrowUpRightIcon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
