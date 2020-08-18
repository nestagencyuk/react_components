import { IUpload } from './types'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Upload.scss'

/**
 * Components
 */
import { Action } from '../Action'
import { Overlay } from '../Overlay'

/**
 * A file upload component
 */
const Upload: React.FC<IUpload.IProps> = ({
  className,
  id,
  name,
  loadingState = 'Idle',
  value = null,
  placeholder = "Choose file(s) or drag 'n' drop here",
  onChange
}) => {
  const dragCounter = useRef(0)
  const [drag, setDrag] = useState(false)
  const [files, setFiles] = useState<File[]>(value)

  /**
   * Add files to state
   */
  const addFiles = (value: File[]) => {
    setFiles((prev) => {
      const newFiles: File[] = [...(prev || [])]
      for (let i = 0; i < value.length; i++) {
        const exists = newFiles.some((x) => x?.name === value[i]?.name)
        if (!exists) newFiles.push(value[i])
      }
      return newFiles
    })
  }

  /**
   * Delete file from state
   */
  const deleteFile = (value: File) => {
    setFiles((prev) => [...prev.filter((x) => x.name !== value.name)])
  }

  /**
   * Prevent default on the drag event
   */
  const handleDrag = (e: any) => {
    e.preventDefault()
  }

  /**
   * Handle the dragging in
   */
  const handleDragIn = (e: any) => {
    e.preventDefault()
    dragCounter.current++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true)
    }
  }

  /**
   * Handle dragging out
   */
  const handleDragOut = (e: any) => {
    e.preventDefault()
    dragCounter.current--
    if (dragCounter.current === 0) {
      setDrag(false)
    }
  }

  /**
   * Handle the drop files
   */
  const handleDrop = (e: any) => {
    e.preventDefault()
    setDrag(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files)
      e.dataTransfer.clearData()
      dragCounter.current = 0
    }
  }

  /**
   * Handle the input change
   */
  const handleChange = (e: any) => {
    addFiles(e.currentTarget.files)
  }

  /**
   * Listen to state updates
   */
  useEffect(() => {
    if (loadingState === 'Done') setFiles(null)
  }, [loadingState])

  return (
    <div
      className={cx(className, 'upload')}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className={cx('upload__drop', { 'upload__drop--active': drag })}>
        {drag && (
          <Overlay className="upload__overlay" variant="Inverse">
            Drop here
          </Overlay>
        )}

        <label className="upload__label" htmlFor={id}>
          {loadingState === 'Loading' ? 'Uploading...' : placeholder}
        </label>

        <Action
          className="upload__action"
          variant="Primary"
          icon={{ name: loadingState === 'Loading' ? 'Loading' : 'Upload', active: true }}
          size="Small"
          disabled={files?.length > 0 ? false : true}
          onClick={() => onChange(files)}
        >
          Upload
        </Action>

        <input className="upload__input" id={id} name={id} type="file" multiple onChange={handleChange} />
      </div>
      {files?.length > 0 && (
        <ul className="upload__list">
          {files.map((file) => (
            <li key={`file-${file.name}`} className="upload__item">
              {file.name}
              <Action
                variant="Secondary"
                icon={{ name: 'Cross', size: 'XSmall' }}
                size="XSmall"
                onClick={() => deleteFile(file)}
              >
                Clear
              </Action>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Upload
