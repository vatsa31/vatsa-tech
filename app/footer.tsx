export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start justify-between gap-2 px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Shrivatsa Kashyap
        </p>
        <p className="font-mono text-xs text-faint">
          TypeScript · React · Rust
        </p>
      </div>
    </footer>
  )
}