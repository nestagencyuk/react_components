declare namespace ISlider {
  interface IProps {
    className?: string
    variant?: 'Fade' | 'Slide'
    navbar?: 'Buttons' | 'Dots'
    init?: number
    tick?: number
    items?: React.ReactNode[]
  }
}

export { ISlider }
