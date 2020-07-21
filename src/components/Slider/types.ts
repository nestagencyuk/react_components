declare namespace ISlider {
  interface IProps {
    className?: string
    variant?: 'Fade' | 'Slide'
    navbar?: 'Buttons' | 'Dots'
    initialSlide?: number
    tick?: number
    items?: React.ReactNode[]
  }
}

export { ISlider }
