import { LoadingState } from '../../types'

declare namespace IUpload {
  interface IProps {
    className?: string
    id: string
    name?: string
    loadingState?: LoadingState
    value?: File[]
    placeholder?: string
    onChange: (value: File[]) => void
  }
}

export { IUpload }
