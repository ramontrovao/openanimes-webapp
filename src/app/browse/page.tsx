import { HighlightSection } from './components/HighlightSection'

export default function Browse() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full">
        <HighlightSection />
      </main>
    </div>
  )
}
