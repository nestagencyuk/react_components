import { AlignmentBox } from '../../types'

declare namespace IText {
  interface IProps {
    className?: string
    variant?: 'Alpha' | 'Beta' | 'Gamma' | 'Delta' | 'Epsilon' | 'Intro' | 'P' | 'Small'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    align?: Exclude<Exclude<AlignmentBox, 'Top'>, 'Bottom'>
    inverse?: boolean
    muted?: boolean
    children: any
  }
}

export { IText }
