import { Diagram, DNode, DEdge, DBox } from '..'

export function AmbientSystemDiagram() {
  return (
    <Diagram
      viewBox="0 0 720 560"
      label="Ambient audio SDK system architecture: host application, SDK boundary, session orchestration, capture, worker, IndexedDB spool, WebSocket transport, and ingestion backend"
      caption="Ambient SDK - a headed and headless SDK embedded into applications we don't control. The session state machine owns the lifecycle; capture, encoding, and delivery run inside a single worker to keep the host thread free; IndexedDB holds the offline spool for recovery."
    >
      <DNode x={270} y={24} w={180} h={40} label="Host application" sub="page we don't control" />

      <DBox x={44} y={84} w={632} h={368} label="Ambient SDK" labelX={60} labelY={104}>
        <DNode
          x={250}
          y={126}
          w={220}
          h={48}
          label={'Public API\nheaded + headless'}
          sub="command / event contract"
        />
        <DNode
          x={256}
          y={198}
          w={208}
          h={48}
          label="Session orchestrator"
          sub="XState - lifecycle + recovery"
          accent
        />
        <DNode
          x={64}
          y={292}
          w={168}
          h={52}
          label="Web Audio capture"
          sub="mic in · PCM encode"
        />
        <DNode
          x={276}
          y={292}
          w={168}
          h={52}
          label="Web Worker"
          sub="encode · buffer · offload"
        />
        <DNode
          x={488}
          y={292}
          w={168}
          h={52}
          label="IndexedDB"
          sub="offline spool · resume"
        />
        <DNode
          x={246}
          y={398}
          w={228}
          h={44}
          label="WebSocket transport"
          sub="chunk · ack · reconnect"
        />
      </DBox>

      <DNode x={288} y={508} w={144} h={36} label="Ingestion backend" sub="assemble · store" />

      <DEdge d="M360,64 L360,120" arrow />
      <DEdge d="M360,174 L360,194" arrow />
      <DEdge d="M258,222 C 248,244 220,266 200,288" arrow />
      <DEdge d="M232,318 L272,318" flow />
      <DEdge d="M444,318 L484,318" arrow />
      <DEdge d="M360,344 L360,394" flow />
      <DEdge
        d="M492,316 C 544,342 524,392 478,414"
        arrow
        dashed
        accent
        label="recovery → re-upload"
        labelX={496}
        labelY={376}
      />
      <DEdge d="M360,442 L360,504" flow />
    </Diagram>
  )
}