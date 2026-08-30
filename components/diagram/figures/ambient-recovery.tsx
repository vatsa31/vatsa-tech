import { Diagram, DNode, DEdge, DBox, DLabel, DPulse } from '..'

export function AmbientRecoveryDiagram() {
  return (
    <Diagram
      viewBox="0 0 720 400"
      label="Upload recovery flow: capture, encode, stream, and ack stages with a recovery lane that persists chunks, retries with exponential backoff, and resumes from the last acknowledged offset"
      caption="Every stage is interruptible. Failure marks the pipeline to the recovery lane - the chunk is persisted, retried with exponential backoff capped at 30s, and resumes from the last acknowledged offset. Uploads are never re-sent from zero, and duplicate chunks are dropped by idempotency keys."
    >
      <DNode x={24} y={40} w={150} h={54} label="capture" sub="mic stream" />
      <DNode x={198} y={40} w={150} h={54} label="encode" sub="PCM → chunks" />
      <DNode x={372} y={40} w={150} h={54} label="stream" sub="WebSocket" />
      <DNode x={546} y={40} w={142} h={54} label="ack" sub="idempotent receipt" />

      <DEdge d="M174,67 L194,67" arrow />
      <DEdge d="M348,67 L368,67" arrow />
      <DEdge d="M522,67 L542,67" arrow />

      <DBox x={24} y={180} w={672} h={196} label="Recovery - interruptible at every stage" labelX={36} labelY={200}>
        <DNode x={44} y={252} w={210} h={56} label={'persist\nchunk + state'} sub="offline spool" />
        <DNode x={292} y={252} w={180} h={56} label="retry gate" sub="backoff 1s → 30s" accent />
        <DNode x={510} y={252} w={170} h={56} label="resume" sub="from last ack offset" />
        <DPulse x={382} y={280} />
      </DBox>

      <DEdge
        d="M205,94 C 150,140 136,196 130,248"
        arrow
        dashed
        label="encode error"
        labelX={128}
        labelY={122}
        labelAnchor="end"
      />
      <DEdge
        d="M430,94 C 420,150 404,196 394,248"
        arrow
        dashed
        label="socket drop"
        labelX={412}
        labelY={126}
        labelAnchor="end"
      />
      <DEdge
        d="M600,94 C 598,150 596,196 596,248"
        arrow
        dashed
        label="partial ack"
        labelX={612}
        labelY={114}
      />

      <DEdge d="M254,280 L288,280" arrow />
      <DEdge d="M472,280 L506,280" arrow />
      <DEdge
        d="M520,252 C 560,180 500,130 500,102"
        arrow
        accent
        label="resume from offset"
        labelX={676}
        labelY={144}
        labelAnchor="end"
      />

      <DLabel x={24} y={24} accent>
        happy path
      </DLabel>
    </Diagram>
  )
}