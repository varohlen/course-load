import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">        
            <a href="/Biologi/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check"><path d="M18.24 7.56c-0.52-0.68-1.4-1.040-2.16-0.88-0.88 0.040-8.36 0.6-12.040 4.28-2.56 2.56-2.68 6.68-0.4 9.56l-3.36 3.36c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.36 0.24 0.6 0.24s0.44-0.080 0.6-0.24l3.36-3.36c1.32 1.040 2.92 1.64 4.6 1.64 1.88 0 3.64-0.72 4.96-2.040 3.84-3.84 4.28-11.16 4.32-12.040 0.080-0.6-0.080-1.2-0.48-1.72zM17.040 8.96c0 0.040-0.040 0.12-0.040 0.16 0 0.080-0.28 7.48-3.8 11-1 1-2.32 1.56-3.76 1.56-1.24 0-2.44-0.4-3.4-1.16l7.36-7.36c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-7.36 7.4c-1.64-2.2-1.56-5.28 0.36-7.2 3.36-3.36 10.92-3.8 11-3.8 0.040 0 0.12 0 0.16-0.040 0.040 0 0.040 0 0.080 0 0.16 0 0.32 0.12 0.44 0.28 0.12 0.12 0.16 0.24 0.16 0.36z"/></svg>

            Biologi</a>    
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor