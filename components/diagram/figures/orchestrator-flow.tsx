import { Diagram, DNode, DEdge, DBox, DLabel } from '..'

// Paint a theme-aware halo behind branch conditions so labels stay legible.
const branchLabelClass =
  'stroke-paper [paint-order:stroke] [stroke-linejoin:round] [stroke-width:4px]'

export function OrchestratorWorkflowDiagram() {
  return (
    <Diagram
      viewBox="0 0 640 650"
      minWidth={600}
      label="Request flows through recon, planning, and plan review. Approved tasks are routed into isolated parallel worktrees. The orchestrator reruns checks, then cross-family code review passes work to a PR. Failed checks or blocking findings return for fixes. Disputes and security/data work go to a judge. The human reviews and merges the PR."
      caption="The orchestrator moves work through the gates. Workers write code; reviewers inspect it; I review the PR and decide whether to merge."
    >
      <DBox
        x={20}
        y={20}
        w={600}
        h={506}
        label="Agent workflow · persisted state at every step"
      >
        <DNode
          x={40}
          y={62}
          w={150}
          h={52}
          label="My request"
          sub="saved verbatim"
          accent
        />
        <DNode
          x={244}
          y={62}
          w={150}
          h={52}
          label="Recon + plan"
          sub="facts · tasks · criteria"
        />
        <DNode
          x={448}
          y={62}
          w={150}
          h={52}
          label="Plan review"
          sub="cross-family gate"
        />
        <DEdge d="M190,88 H244" />
        <DEdge d="M394,88 H448" />
        <DEdge d="M523,114 V150 H320 V178" />
        <DLabel x={320} y={143} anchor="middle">
          approved plan
        </DLabel>
        <DNode
          x={244}
          y={178}
          w={150}
          h={50}
          label="route.mjs"
          sub="tier + risk + path rules"
          accent
        />
        <DEdge d="M320,228 V246 H115 V270" />
        <DEdge d="M320,228 V270" />
        <DEdge d="M320,228 V246 H523 V270" />
        <DNode
          x={40}
          y={270}
          w={150}
          h={54}
          label="Worker A"
          sub="worktree / branch A"
        />
        <DNode
          x={244}
          y={270}
          w={150}
          h={54}
          label="Worker B"
          sub="worktree / branch B"
        />
        <DNode
          x={448}
          y={270}
          w={150}
          h={54}
          label="Worker C"
          sub="worktree / branch C"
        />
        <DLabel x={320} y={350} anchor="middle">
          parallel when dependencies + file scopes allow
        </DLabel>
        <DEdge d="M115,324 V370 H320 V392" />
        <DEdge d="M320,324 V392" />
        <DEdge d="M523,324 V370 H320" arrow={false} />
        <DNode
          x={244}
          y={392}
          w={150}
          h={50}
          label="Re-run checks"
          sub="trust exit codes"
        />
        <DEdge d="M320,442 V470" />
        <DNode
          x={244}
          y={470}
          w={150}
          h={50}
          label="Code review"
          sub="different model family"
        />
        <DNode
          x={40}
          y={392}
          w={150}
          h={50}
          label="Fix task"
          sub="bounded retries"
        />
        <DEdge d="M244,412 H190" label="fail" labelX={207} labelY={403} />
        <DEdge
          d="M244,494 H115 V442"
          label="blocking"
          labelX={159}
          labelY={483}
        />
        <DEdge d="M115,392 V370 H40 V324" />
        <DNode
          x={448}
          y={470}
          w={150}
          h={50}
          label="Judge"
          sub="disputes · security/data"
        />
        <DEdge d="M394,494 H448" />
      </DBox>
      <DEdge d="M320,520 V570" label="gates pass" labelX={332} labelY={548} />
      <DEdge d="M523,520 V594 H420" label="accept" labelX={533} labelY={548} />
      <DNode
        x={220}
        y={570}
        w={200}
        h={54}
        label="PR → human review"
        sub="assumptions · evidence · merge"
        accent
      />
      <DLabel x={320} y={644} anchor="middle">
        judge may also return fix, replan, or escalate to me
      </DLabel>
    </Diagram>
  )
}

export function OrchestratorRoutingDiagram() {
  return (
    <Diagram
      viewBox="0 0 640 454"
      minWidth={600}
      label="Planner tier and risk tags plus project path rules enter route.mjs. Normal-risk mechanical tasks use Haiku or Luna; routine tasks use Luna or Grok; hard tasks start with Sonnet with strong-model escalation available. Security or data risk overrides the cheap route with a strong worker and extra review. Infra risk stops for the human. Reviewer selection excludes the author's model family."
      caption="Risk takes precedence over tier. These model assignments are starter defaults; the cross-family review rule remains the same when the models change."
    >
      <DNode
        x={32}
        y={28}
        w={174}
        h={50}
        label="Planner tags"
        sub="tier · risk"
      />
      <DNode
        x={32}
        y={98}
        w={174}
        h={50}
        label="Project rules"
        sub="sensitive paths"
      />
      <DEdge d="M206,53 H239 V87 H270" />
      <DEdge d="M206,123 H239 V87" arrow={false} />
      <DNode
        x={270}
        y={62}
        w={174}
        h={50}
        label="route.mjs"
        sub="deterministic policy"
        accent
      />
      <DEdge d="M444,87 H510 V170" />
      <DEdge d="M357,112 V146 H228 V170" />
      <DEdge d="M357,146 H87 V170" />
      <DEdge d="M357,146 H369 V170" />
      <DNode
        x={22}
        y={170}
        w={130}
        h={56}
        label="Mechanical"
        sub="Haiku / Luna"
      />
      <DNode x={163} y={170} w={130} h={56} label="Routine" sub="Luna / Grok" />
      <DNode
        x={304}
        y={170}
        w={130}
        h={56}
        label="Hard"
        sub="Sonnet → strong"
      />
      <DNode
        x={456}
        y={170}
        w={156}
        h={56}
        label="Risk override"
        sub="takes precedence"
        accent
      />
      <DBox x={22} y={266} w={412} h={158} label="Review selection">
        <DNode
          x={42}
          y={303}
          w={164}
          h={50}
          label="Author: OpenAI"
          sub="example · Luna worker"
        />
        <DNode
          x={250}
          y={303}
          w={164}
          h={50}
          label="Reviewer: Claude"
          sub="example · Opus review"
          accent
        />
        <DEdge d="M206,328 H250" />
        <DLabel x={228} y={381} anchor="middle">
          exclude the author&apos;s family
        </DLabel>
        <DLabel x={228} y={400} anchor="middle">
          prefer a third family for the judge
        </DLabel>
      </DBox>
      <DEdge d="M534,226 V264" />
      <DNode
        x={456}
        y={264}
        w={156}
        h={62}
        label={'Security / data'}
        sub="strong worker + review"
        accent
      />
      <DEdge d="M534,245 H448 V381 H456" />
      <DNode
        x={456}
        y={350}
        w={156}
        h={62}
        label="Infra → human"
        sub="stop before execution"
        accent
      />
      <DLabel x={320} y={445} anchor="middle">
        single-family profiles explicitly mark review as degraded
      </DLabel>
    </Diagram>
  )
}

export function OrchestratorPlanGateDiagram() {
  return (
    <Diagram
      viewBox="0 0 640 580"
      minWidth={600}
      label="The original request, plan, and task graph go to a cross-family plan-reviewer, then the fail-closed planreview gate. Clean normal-risk approval fans out. Requested changes or incomplete traceability return to the planner, up to two revision rounds. Security/data approvals or exhausted revisions need a judge. Infra, irreversible decisions, or escalation stop for the human. Reversible assumptions proceed and are recorded on every PR."
      caption="A model supplies the verdict and evidence. Code decides the next step. A missing traceability table cannot become an approval."
    >
      <DNode
        x={40}
        y={28}
        w={170}
        h={54}
        label="request.md"
        sub="human's exact words"
        accent
      />
      <DNode
        x={250}
        y={28}
        w={170}
        h={54}
        label="Plan + task graph"
        sub="criteria · dependencies"
      />
      <DEdge d="M125,82 V108 H320 V132" />
      <DEdge d="M335,82 V108" arrow={false} />
      <DNode
        x={220}
        y={132}
        w={200}
        h={54}
        label="Plan-reviewer"
        sub="opposite planner family"
      />
      <DEdge d="M320,186 V216" />
      <DNode
        x={220}
        y={216}
        w={200}
        h={54}
        label="planreview gate"
        sub="verdict + traceability + risk"
        accent
      />
      <DEdge d="M220,243 H125 V318" />
      <DLabel className={branchLabelClass} x={123} y={295} anchor="middle">
        changes / incomplete mapping
      </DLabel>
      <DNode
        x={40}
        y={318}
        w={170}
        h={58}
        label="Revise plan"
        sub="up to 2 revision rounds"
      />
      <DEdge d="M40,347 H24 V12 H335 V28" />
      <DEdge d="M320,270 V318" />
      <DLabel className={branchLabelClass} x={332} y={295}>
        normal + clean approval
      </DLabel>
      <DNode
        x={235}
        y={318}
        w={170}
        h={58}
        label="Fan out"
        sub="no human plan approval"
        accent
      />
      <DEdge d="M420,243 H540 V318" />
      <DLabel className={branchLabelClass} x={541} y={284} anchor="middle">
        security/data approval
      </DLabel>
      <DLabel className={branchLabelClass} x={541} y={301} anchor="middle">
        or revisions exhausted
      </DLabel>
      <DNode
        x={455}
        y={318}
        w={170}
        h={58}
        label="Plan judge"
        sub="accept or resolve"
      />
      <DEdge d="M455,347 H405" />
      <DLabel className={branchLabelClass} x={431} y={336} anchor="middle">
        accept
      </DLabel>
      <DEdge d="M540,376 V430 H430 V476" />
      <DLabel className={branchLabelClass} x={540} y={405} anchor="middle">
        unresolved / escalate
      </DLabel>
      <DEdge d="M420,243 H633 V455 H430 V476" />
      <DLabel className={branchLabelClass} x={620} y={441} anchor="end">
        infra / irreversible decision
      </DLabel>
      <DNode
        x={320}
        y={476}
        w={220}
        h={56}
        label="Stop → ask me"
        sub="owner decisions stay human"
        accent
      />
      <DEdge d="M320,376 V410 H140 V476" />
      <DNode
        x={40}
        y={476}
        w={200}
        h={56}
        label="Assumptions ledger"
        sub="reversible defaults → every PR"
      />
      <DLabel x={320} y={563} anchor="middle">
        request clauses ↔ tasks ↔ testable acceptance criteria
      </DLabel>
    </Diagram>
  )
}
