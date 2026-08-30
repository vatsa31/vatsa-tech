import { Diagram, DNode, DEdge, DBox, DLabel } from '..'

export function UsagentArchitectureDiagram() {
  return (
    <Diagram
      viewBox="0 0 720 560"
      label="Usagent architecture: macOS menu bar on top, Tauri Rust runtime in the middle with commands, usage cache, provider trait, Codex and Cursor providers, and a React renderer below separated by an IPC boundary that only carries normalized usage"
      caption="The provider trait is the seam: each provider discovers its source, fetches, and normalizes into ProviderUsage, and everything the renderer ever sees is that normalized model - credentials and raw payloads never cross the IPC boundary."
    >
      <DNode x={288} y={24} w={144} h={38} label="Menu-bar tray" sub="Cx 64 · Cu 38" accent />

      <DBox x={64} y={80} w={592} h={320} label="Usagent - Tauri runtime (Rust)" labelX={78} labelY={102}>
        <DNode
          x={84}
          y={120}
          w={248}
          h={44}
          label="Tauri commands"
          sub="get_codex_usage · get_cursor_usage"
        />
        <DNode
          x={84}
          y={188}
          w={248}
          h={40}
          label="UsageCache"
          sub="Mutex<HashMap<provider, Usage>>"
        />
        <DNode
          x={84}
          y={252}
          w={248}
          h={40}
          label="UsageProvider trait"
          sub="normalize → ProviderUsage"
        />
        <DNode
          x={84}
          y={316}
          w={248}
          h={40}
          label="Credentials stay in Rust"
          sub="Keychain · CLI · never to JS"
          accent
        />
        <DNode
          x={360}
          y={120}
          w={272}
          h={66}
          label="CodexProvider"
          sub="spawn CLI · local reads - poll 3m"
        />
        <DNode
          x={360}
          y={210}
          w={272}
          h={78}
          label="CursorProvider"
          sub="Keychain token → api2.cursor.sh - remote"
        />
      </DBox>

      <DNode
        x={240}
        y={468}
        w={240}
        h={44}
        label="React renderer"
        sub="menu-bar popover · tabs · freshness"
      />

      <DEdge dashed d="M64,440 L656,440" />
      <DLabel x={360} y={432} accent anchor="middle">
        IPC - normalized usage only · no tokens · no raw payloads
      </DLabel>

      <DEdge d="M360,174 L360,194" arrow />
      <DEdge d="M208,188 L208,164" arrow />
      <DEdge d="M208,248 L208,232" arrow />
      <DEdge d="M356,144 C 340,190 340,240 330,268" arrow />
      <DEdge d="M356,252 C 344,260 336,266 330,272" arrow />
      <DEdge flow d="M360,400 L360,468" arrow />
      <DEdge
        flow
        d="M118,136 C 46,136 40,46 282,44"
        label="update tray title"
        labelX={46}
        labelY={158}
      />
    </Diagram>
  )
}