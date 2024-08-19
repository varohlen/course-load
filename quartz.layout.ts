import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [ (Component.LinksHeader())],
  afterBody: [],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    //Component.ContentMeta(),
    //Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.OnlyFor({ tags: ["Bio1"]}, (Component.Explorer({
      folderDefaultState: "open",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["biologi-2", "naturkunskap-1a1", "hosting","naturkunskap-1b","biologi","naturkunskap","naturkunskap-2","miljö--och-energikunskap"])
        return !omit.has(node.name.toLowerCase())
      },
    


    })))),
    Component.DesktopOnly(Component.OnlyFor({ tags: ["Nak1a1"]}, (Component.Explorer({
      folderDefaultState: "open",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["biologi-2", "biologi-1", "hosting","naturkunskap-1b","biologi","naturkunskap","naturkunskap-2","miljö--och-energikunskap"])
        return !omit.has(node.name.toLowerCase())
      },
    


    })))),
    
   
  ],
  right: [

  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(), 
    //Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.OnlyFor({ tags: ["Bio1"]}, (Component.Explorer({
      folderDefaultState: "open",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["biologi-2", "naturkunskap-1a1", "hosting","naturkunskap-1b","biologi","naturkunskap","naturkunskap-2","miljö--och-energikunskap"])
        return !omit.has(node.name.toLowerCase())
      },
    


    })))),
    Component.DesktopOnly(Component.OnlyFor({ tags: ["Nak1a1"]}, (Component.Explorer({
      folderDefaultState: "open",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["biologi-2", "biologi-1", "hosting","naturkunskap-1b","biologi","naturkunskap","naturkunskap-2","miljö--och-energikunskap"])
        return !omit.has(node.name.toLowerCase())
      },
    


    })))),
    
   
 
  ],
  right: [

  ],
}
