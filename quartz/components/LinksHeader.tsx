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
        <div class="dropdown">
  <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check"><path d="M18.24 7.56c-0.52-0.68-1.4-1.040-2.16-0.88-0.88 0.040-8.36 0.6-12.040 4.28-2.56 2.56-2.68 6.68-0.4 9.56l-3.36 3.36c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.36 0.24 0.6 0.24s0.44-0.080 0.6-0.24l3.36-3.36c1.32 1.040 2.92 1.64 4.6 1.64 1.88 0 3.64-0.72 4.96-2.040 3.84-3.84 4.28-11.16 4.32-12.040 0.080-0.6-0.080-1.2-0.48-1.72zM17.040 8.96c0 0.040-0.040 0.12-0.040 0.16 0 0.080-0.28 7.48-3.8 11-1 1-2.32 1.56-3.76 1.56-1.24 0-2.44-0.4-3.4-1.16l7.36-7.36c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-7.36 7.4c-1.64-2.2-1.56-5.28 0.36-7.2 3.36-3.36 10.92-3.8 11-3.8 0.040 0 0.12 0 0.16-0.040 0.040 0 0.040 0 0.080 0 0.16 0 0.32 0.12 0.44 0.28 0.12 0.12 0.16 0.24 0.16 0.36z"/></svg>
            Biologi</a>
  <div class="dropdown-content">
    <a href="/Biologi-1/Planering-NA24">Biologi 1</a>
    <a href="/Biologi-2/Planering-NA22-23">Biologi 2</a>
  </div>
</div>
<div class="dropdown">
  <a href="">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
            Matematik</a>
  <div class="dropdown-content">
    <a href="/Matematik-1a/Planering-FT24">Matematik 1a</a>
    <a href="/Matematik-2b/Planering-SA23b">Matematik 2b</a>
  </div>
</div>

            <a href="/Miljö--och-energikunskap/Planering-NA22">
            <svg fill="none" width="24" height="24" viewBox="0 0 60 60" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M53,30.1c0-0.4-0.3-0.8-0.7-0.9c-0.2-0.1-5-1.5-8,0.8c-0.3,0.3-0.6,0.6-0.9,0.9v-2.2c1.5-1.2,6.4-5.4,6.4-10.7  c0-6.1-6.5-10.8-6.8-11c-0.3-0.2-0.8-0.2-1.2,0c-0.3,0.2-6.8,4.9-6.8,11c0,5.3,4.9,9.5,6.4,10.7v2.9c-0.3-0.4-0.7-0.8-1.1-1.1  c-3.1-2.2-7.8-0.6-8-0.6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0,5.2,3.1,7.4c1.3,0.9,2.8,1.2,4.2,1.2c1,0,1.8-0.1,2.5-0.3v2.2  c0,3.3-2.7,6-6,6H17.3c-3.3,0-6-2.7-6-6V27.1c3.6-0.5,6.4-3.6,6.4-7.3v-6.4c0-0.6-0.4-1-1-1h-2.2V8.7c0-0.6-0.4-1-1-1s-1,0.4-1,1  v3.8H8V8.7c0-0.6-0.4-1-1-1s-1,0.4-1,1v3.8H4c-0.6,0-1,0.4-1,1v6.4c0,3.7,2.8,6.8,6.4,7.3v14.2c0,4.4,3.6,8,8,8h18.1  c4.4,0,8-3.6,8-8v-2.6c0.6,0.1,1.4,0.2,2.2,0.2c1.5,0,3.1-0.3,4.5-1.3C53.1,35.3,53,30.3,53,30.1z M5,19.9v-5.4h10.7v5.4  c0,3-2.4,5.4-5.4,5.4S5,22.8,5,19.9z M37,17.9c0-4.1,3.9-7.7,5.4-8.9c1.5,1.2,5.4,4.8,5.4,8.9c0,3.4-2.6,6.4-4.4,8.1v-8.1  c0-0.6-0.4-1-1-1s-1,0.4-1,1V26C39.6,24.3,37,21.3,37,17.9z M35.8,36.6c-1.7-1.2-2.1-3.8-2.3-5c1.2-0.3,3.8-0.7,5.5,0.5  c1.7,1.2,2.1,3.8,2.3,5C39.9,37.5,37.4,37.7,35.8,36.6z M48.9,36c-1.6,1.2-4.2,0.9-5.5,0.7c0.1-1.3,0.5-3.8,2.1-5.1  c1.6-1.2,4.2-0.9,5.5-0.7C50.9,32.2,50.5,34.8,48.9,36z"/></svg>
            Miljö- och energikunskap</a> 
              <div class="dropdown">
              <a href="">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
</svg>
            Naturkunskap</a> 
  <div class="dropdown-content">
    <a href="/Naturkunskap-1a1/Planering-FT23">Naturkunskap 1a1</a>
    <a href="/Naturkunskap-1b/Planering-NS22+Nellie">Naturkunskap 1b</a>
    <a href="/Naturkunskap-2/Planering-SA23b">Naturkunskap 2</a>
  </div>
</div> 
            
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor