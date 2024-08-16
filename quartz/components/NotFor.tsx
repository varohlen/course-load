import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface NotForOptions {
  /**
   * The tags to look for
   */
  tags: string[];
}

export default ((opts?: Partial<NotForOptions>, component?: QuartzComponent) => {
  if (component) {
    const Component = component
    function NotFor(props: QuartzComponentProps) {
      // Check if any of the tags in `opts.tags` match the tags in `props.fileData.frontmatter?.tags`
      const hasMatchingTag = opts?.tags?.some(tag => props.fileData.frontmatter?.tags?.includes(tag));

      return hasMatchingTag ? 
        <></> :  // Render nothing if there's a matching tag
        <Component {...props} />;  // Render the component if there's no matching tag
    }

    NotFor.displayName = component.displayName
    NotFor.afterDOMLoaded = component.afterDOMLoaded
    NotFor.beforeDOMLoaded = component.beforeDOMLoaded
    NotFor.css = component.css
    return NotFor
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
