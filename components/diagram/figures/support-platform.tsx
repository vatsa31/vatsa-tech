import { Diagram, DNode, DEdge, DBox, DLabel } from '..'

export function SupportPlatformDiagram() {
  return (
    <Diagram
      viewBox="0 0 720 372"
      label="Support platform modernization: legacy frontend migrated via strangler pattern into a TypeScript monorepo of apps and packages, built and tested in CI, then promoted through dev, staging, and production environments"
      caption="Strangler migration in a single codebase - the legacy frontend was re-implemented app-behavior by app-behavior as the typed React app, while shared packages carried the API contract and UI baseline. Promotion through dev → staging → production made releases reversible."
    >
      <DNode
        x={24}
        y={176}
        w={150}
        h={60}
        label="Legacy frontend"
        sub="verbose UI · slow releases"
      />

      <DBox x={210} y={36} w={340} h={300} label="TypeScript monorepo" labelX={222} labelY={58}>
        <DNode
          x={230}
          y={76}
          w={300}
          h={44}
          label="apps / support-platform"
          sub="React · Vite · type-safe"
        />
        <DNode x={230} y={196} w={88} h={58} label="ui" sub="primitives · tokens" />
        <DNode x={346} y={196} w={88} h={58} label="api-client" sub="typed models" />
        <DNode x={462} y={196} w={88} h={58} label="core" sub="config · utils" />
      </DBox>

      <DNode x={576} y={64} w={96} h={104} label="CI pipeline" sub="typecheck · lint · test · build" />
      <DNode x={576} y={200} w={96} h={34} label="dev" />
      <DNode x={576} y={244} w={96} h={34} label="staging" />
      <DNode x={576} y={288} w={96} h={46} label="production" sub="300 employees" accent />

      <DEdge d="M274,120 L274,192" arrow />
      <DEdge d="M390,120 L390,192" arrow />
      <DEdge d="M506,120 L506,192" arrow />

      <DEdge d="M660,168 L688,168 L688,213 L676,213" arrow />
      <DEdge d="M660,168 L688,168 L688,257 L676,257" arrow />
      <DEdge d="M660,168 L688,168 L688,304 L676,304" arrow />

      <DEdge d="M174,206 L206,206" arrow />

      <DLabel x={30} y={164}>
        strangler migration
      </DLabel>
    </Diagram>
  )
}