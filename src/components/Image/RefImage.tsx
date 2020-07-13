import { IImage } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { Image } from '.'

/**
 * Image with ref
 */
const RefImage = forwardRef(Image as (props: IImage.IProps & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement)

export default RefImage
