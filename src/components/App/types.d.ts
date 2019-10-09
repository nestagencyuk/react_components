declare namespace App {
  type Page = {
    path: string
    exact?: boolean
    config: {
      uid: string
      view: React.ReactElement
      dataset: string | string[]
      content: { [key: string]: any }
    }
  }

  type Navigation = {
    brand?: Navigation.Brand
    links: Navigation.Link[]
  }

  interface IProps {
    client?: any
    navigation: Navigation
    pages: Page[]
  }
}
