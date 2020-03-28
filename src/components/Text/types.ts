declare namespace Text {
  interface IProps {
    className?: string
    children: any
    type?: 'Alpha' | 'Beta' | 'Gamma' | 'Delta' | 'Epsilon' | 'Intro' | 'P'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    align?: 'Left' | 'Center' | 'Right'
  }
}

export default Text
