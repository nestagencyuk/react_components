declare namespace IText {
  interface IProps {
    className?: string
    children: any
    type?: 'Alpha' | 'Beta' | 'Gamma' | 'Delta' | 'Epsilon' | 'Intro' | 'P' | 'Small'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    align?: 'Left' | 'Center' | 'Right'
  }
}

export { IText }
