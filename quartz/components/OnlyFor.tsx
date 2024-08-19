import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface OnlyForOptions {
  /**
   * The tags to look for
   */
  tags: string[];
}

export default ((opts?: Partial<OnlyForOptions>, component?: QuartzComponent) => {
  if (component) {
    const Component = component
    function OnlyFor(props: QuartzComponentProps) {
      // Check if any of the tags in `opts.tags` match the tags in `props.fileData.frontmatter?.tags`
      const hasMatchingTag = opts?.tags?.some(tag => props.fileData.frontmatter?.tags?.includes(tag));

      return hasMatchingTag ? 
        <Component {...props} />:
       // Render nothing if there's a matching tag
         < ></> ;  // Render the component if there's no matching tag
    }

    OnlyFor.displayName = component.displayName
    OnlyFor.afterDOMLoaded = component.afterDOMLoaded
    OnlyFor.beforeDOMLoaded = component.beforeDOMLoaded
    OnlyFor.css = component.css
    return OnlyFor
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
