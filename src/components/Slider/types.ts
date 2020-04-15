declare namespace ISlider {
  interface IProps {
    className?: string
    type?: 'Fade' | 'Slide'
    nav?: 'Buttons' | 'Dots'
    init?: number
    tick?: number
    items?: React.ReactNode[]
  }
}

export { ISlider }
