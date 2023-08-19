import { animes } from '@constants/animes'

import { CategoryAnimes } from './components/CategoryAnimes'
import { HighlightSection } from './components/HighlightSection'

export default function Browse() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-r  from-zinc-900 to-zinc-950">
      <main className="m-auto flex min-h-screen w-full flex-col">
        <HighlightSection />
        <CategoryAnimes categoryTitle="Em alta" animes={animes} />
        <CategoryAnimes categoryTitle="Lançados recentemente" animes={animes} />
      </main>
    </div>
  )
}
