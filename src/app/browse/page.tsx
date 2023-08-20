import { animes } from '@constants/animes'

import { CategoryAnimesSection } from './components/CategoryAnimesSection'
import { HighlightSection } from './components/HighlightSection'

export default function Browse() {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full flex-col">
        <HighlightSection />
        <CategoryAnimesSection categoryTitle="Em alta" animes={animes} />
        <CategoryAnimesSection
          categoryTitle="Lançados recentemente"
          animes={animes}
        />
      </main>
    </div>
  )
}
