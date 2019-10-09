declare namespace Text {
  type Style = 'Alpha' | 'Beta' | 'Gamma' | 'Delta' | 'Epsilon' | 'Intro'
  type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

  interface IProps {
    className?: string
    children: any
    style?: Style
    tag?: Tag
  }
}
