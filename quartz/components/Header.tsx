import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}

@media (max-width: 600px) {
  header {
    flex-direction: column; /* Stack items vertically on smaller screens */
    gap: 1rem;              /* Adjust gap for better spacing on small screens */
  }
}
`

export default (() => Header) satisfies QuartzComponentConstructor
