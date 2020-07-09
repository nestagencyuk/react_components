import { IIcon } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Icon Picker
 */
const IconPicker: React.FC<IIcon.IProps> = ({ className, name }) => {
  const svgClassName = cx(className && `${className.split(' ')[0]}-svg`, 'icn__svg')
  const pathClassName = cx(className && `${className.split(' ')[0]}-path`, 'icn__path')

  switch (name) {
    case 'Branch':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M10,2.06A1.32,1.32,0,1,0,8.21,3.3C8.29,5.18,7.33,5.38,6,5.66a4.52,4.52,0,0,0-2.21.91V3.29A1.31,1.31,0,0,0,3.37.74a1.31,1.31,0,0,0-.44,2.55V8.71A1.31,1.31,0,1,0,4.68,9.94a1.32,1.32,0,0,0-.86-1.23C3.94,7,5,6.78,6.2,6.52s3-.63,2.89-3.24A1.3,1.3,0,0,0,10,2.06Zm-7.37,0a.79.79,0,1,1,.79.78A.79.79,0,0,1,2.58,2.06ZM4.16,10a.79.79,0,1,1-.79-.79A.78.78,0,0,1,4.16,10ZM8.63,2.84a.79.79,0,1,1,.79-.78A.78.78,0,0,1,8.63,2.84Z'
          />
        </svg>
      )
    case 'Caret-down':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M10.47,3.76,6,8.24,1.53,3.76Z' />
        </svg>
      )
    case 'Caret-left':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M8.24,10.47,3.76,6,8.24,1.53Z' />
        </svg>
      )
    case 'Caret-right':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M3.76,1.53,8.24,6,3.76,10.47Z' />
        </svg>
      )
    case 'Caret-up':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M1.76,8.24,6.24,3.76l4.47,4.48Z' />
        </svg>
      )
    case 'Caret':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M9.81,6.66,6,10.47,2.19,6.66Z' />
          <path className={pathClassName} d='M2.19,5,6,1.19,9.81,5Z' />
        </svg>
      )
    case 'Chevron-down':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M11,3.53H8.31L6,5.83,3.69,3.53H1L6,8.47Z' />
        </svg>
      )
    case 'Chevron-left':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M8.47,11V8.31L6.17,6l2.3-2.31V1L3.53,6Z' />
        </svg>
      )
    case 'Chevron-right':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M3.53,1V3.69L5.83,6,3.53,8.31V11L8.47,6Z' />
        </svg>
      )
    case 'Chevron-up':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M1,8.47H3.69L6,6.17l2.31,2.3H11L6,3.53Z' />
        </svg>
      )
    case 'Code-alt':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M11.76,5.55v1L7.92,8.46V7.39l2.71-1.33L7.92,4.72V3.65ZM4.08,7.39,1.37,6.06,4.08,4.72V3.65L.24,5.55v1L4.08,8.46ZM7.46,2.16h-1L4.54,9.84h1Z'
          />
        </svg>
      )
    case 'Code-square-alt':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M10.17,3.5v6.67H1.83V3.5ZM11,1H1V11H11ZM6.42,5.63v.69l1.34.56-1.34.56v.69L8.5,7.22V6.55ZM3.5,6.55v.67l2.08.91V7.44L4.24,6.88l1.34-.56V5.63Z'
          />
        </svg>
      )
    case 'Code':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M11.28,5.44V6.56A1.45,1.45,0,0,0,9.84,7.94c0,1,.61,2.86-2.88,2.86v-1c2.36,0,1.9-.77,1.9-1.91A2.12,2.12,0,0,1,10,6a1.7,1.7,0,0,1-1.1-1.59c0-1.14.45-2.25-1.9-2.25v-1c3.5,0,2.88,2.16,2.88,3.21C9.84,5.15,10.53,5.44,11.28,5.44Zm-9.12-1C2.16,3.36,1.54,1.2,5,1.2v1c-2.35,0-1.9,1.11-1.9,2.25A1.7,1.7,0,0,1,2,6a2.12,2.12,0,0,1,1.1,1.93c0,1.14-.46,1.91,1.9,1.91v1C1.55,10.8,2.16,9,2.16,7.93A1.45,1.45,0,0,0,.72,6.56V5.44C1.47,5.44,2.16,5.15,2.16,4.41Z'
          />
        </svg>
      )
    case 'Controls':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,4.75a.42.42,0,0,1,.42.42.42.42,0,0,1-.84,0A.42.42,0,0,1,6,4.75Zm0-.83A1.25,1.25,0,1,0,7.25,5.17,1.25,1.25,0,0,0,6,3.92ZM2.25,5.58A1.25,1.25,0,1,0,3.5,6.83,1.25,1.25,0,0,0,2.25,5.58Zm7.5,0A1.25,1.25,0,1,0,11,6.83,1.25,1.25,0,0,0,9.75,5.58ZM6,3.08a2,2,0,0,1,.42,0V1.83a.42.42,0,0,0-.84,0v1.3A2,2,0,0,1,6,3.08ZM9.75,4.75a2,2,0,0,1,.42,0v-3a.42.42,0,0,0-.84,0v3A2,2,0,0,1,9.75,4.75Zm0,4.17a2,2,0,0,1-.42-.05v1.3a.42.42,0,0,0,.84,0V8.87A2,2,0,0,1,9.75,8.92ZM2.25,4.75a2,2,0,0,1,.42,0v-3a.42.42,0,0,0-.84,0v3A2,2,0,0,1,2.25,4.75ZM6,7.25a2,2,0,0,1-.42,0v3a.42.42,0,0,0,.84,0v-3A2,2,0,0,1,6,7.25ZM2.25,8.92a2,2,0,0,1-.42-.05v1.3a.42.42,0,0,0,.84,0V8.87A2,2,0,0,1,2.25,8.92Z'
          />
        </svg>
      )
    case 'Cross':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M11,9.41,7.54,6,11,2.54,9.41,1,6,4.47,2.53,1.05,1,2.58,4.47,6,1.05,9.47,2.58,11,6,7.53,9.46,11Z'
          />
        </svg>
      )
    case 'Dashboard':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M11,6.42A5,5,0,0,0,1.35,4.5,5.12,5.12,0,0,0,1.9,9.35H3.73A2.63,2.63,0,0,0,6,10.6,2.66,2.66,0,0,0,8.28,9.35H10.1A5.1,5.1,0,0,0,11,6.42ZM9.14,3.78l-.92.92a2.4,2.4,0,0,0-.45-.45l.92-.92A3.82,3.82,0,0,1,9.14,3.78ZM7.29,2.54a3.23,3.23,0,0,1,.58.24L7.37,4a3,3,0,0,0-.58-.24Zm-1.71-.2h.84V3.65L6,3.63l-.42,0Zm0,4.37L6,4.5l.47,2.21A1,1,0,0,1,7,7.57a1,1,0,0,1-2,0A1,1,0,0,1,5.53,6.71ZM4.7,2.54l.5,1.2A2.48,2.48,0,0,0,4.62,4l-.51-1.2A4.35,4.35,0,0,1,4.7,2.54Zm-1.39.79.92.92a2.4,2.4,0,0,0-.45.45l-.92-.92A3.82,3.82,0,0,1,3.31,3.33ZM2.07,5.18a3.23,3.23,0,0,1,.24-.58l1.2.5a3,3,0,0,0-.24.58Zm6.65.46a3,3,0,0,0-.26-.58l1.2-.52a3.76,3.76,0,0,1,.25.58Z'
          />
        </svg>
      )
    case 'Download':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M3.81,1.62V.74H8.19v.88Zm0,1.75H8.19V2.49H3.81ZM8.19,6.44V4.25H3.81V6.44H1.18L6,11.26l4.82-4.82Z'
          />
        </svg>
      )
    case 'Edit':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M3.85,10.65l-3.14.64.64-3.14ZM4.48,10,9.42,5.08l-2.5-2.5L2,7.52ZM8.78.71,7.54,2l2.51,2.51,1.24-1.24Z'
          />
        </svg>
      )
    case 'Error':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,1.2A4.8,4.8,0,1,1,1.2,6,4.8,4.8,0,0,1,6,1.2Zm0-1A5.76,5.76,0,1,0,11.76,6,5.76,5.76,0,0,0,6,.24ZM5.52,3.06h1V6.9h-1ZM6,9a.6.6,0,1,1,.6-.6A.6.6,0,0,1,6,9Z'
          />
        </svg>
      )
    case 'External':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M9.75,6.42v4.16H1V2.67H6V3.5H1.83V9.75H8.92V6.42Zm1.25-5H6.42L8.1,3.08,5.2,6,6.37,7.21,9.28,4.26,11,6Z'
          />
        </svg>
      )
    case 'Hamburger':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M10.9,3.55H1.1V1.92h9.8Zm0,1.63H1.1V6.82h9.8Zm0,3.27H1.1v1.63h9.8Z' />
        </svg>
      )
    case 'Home':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,3.07l4.32,4v4.4H7.44V8.61H4.56v2.88H1.68V7.09Zm5.76,2.79L6,.51.24,5.85l.65.71L6,1.82l5.11,4.74Z'
          />
        </svg>
      )
    case 'Image':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M2.64,4.38a.72.72,0,1,1,.72.72A.72.72,0,0,1,2.64,4.38ZM7,4.56,5.75,6.48,4.56,5.54,2.64,8.4H9.36ZM10.8,2.64V9.36H1.2V2.64Zm1-1H.24v8.64H11.76Z'
          />
        </svg>
      )
    case 'Info':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6.6,3.6A.6.6,0,1,1,6,3,.6.6,0,0,1,6.6,3.6ZM11.76,6A5.76,5.76,0,1,1,6,.24,5.76,5.76,0,0,1,11.76,6Zm-1,0A4.8,4.8,0,1,0,6,10.8,4.8,4.8,0,0,0,10.8,6ZM4.56,5v1h1V8.82h1V5Z'
          />
        </svg>
      )
    case 'Twitter':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,1.28c1.54,0,1.72,0,2.33,0a2.16,2.16,0,0,1,2.36,2.36c0,.61,0,.79,0,2.33s0,1.72,0,2.33a2.16,2.16,0,0,1-2.36,2.36c-.61,0-.79,0-2.33,0s-1.72,0-2.33,0A2.17,2.17,0,0,1,1.31,8.33c0-.61,0-.79,0-2.33s0-1.72,0-2.33A2.16,2.16,0,0,1,3.67,1.31C4.28,1.28,4.46,1.28,6,1.28Zm0-1c-1.56,0-1.76,0-2.37,0A3.18,3.18,0,0,0,.28,3.62c0,.62,0,.82,0,2.38s0,1.76,0,2.38a3.19,3.19,0,0,0,3.35,3.35c.62,0,.82,0,2.38,0s1.76,0,2.38,0a3.18,3.18,0,0,0,3.34-3.35c0-.62,0-.82,0-2.38s0-1.76,0-2.37A3.18,3.18,0,0,0,8.38.28C7.76.25,7.56.24,6,.24ZM6,3A3,3,0,1,0,9,6,3,3,0,0,0,6,3ZM6,7.92A1.92,1.92,0,1,1,7.92,6,1.92,1.92,0,0,1,6,7.92ZM9.07,2.23a.7.7,0,1,0,.7.7A.69.69,0,0,0,9.07,2.23Z'
          />
        </svg>
      )
    case 'Line':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M9.26,3.62a1.48,1.48,0,0,1-.38-1,1.44,1.44,0,1,1,1.44,1.44h-.21L8.51,7a1.42,1.42,0,0,1,.37,1A1.44,1.44,0,1,1,6,7.92a1.41,1.41,0,0,1,.22-.76L5,5.46a1.54,1.54,0,0,1-.43.06H4.38L2.77,8.42a1.42,1.42,0,0,1,.35.94A1.44,1.44,0,1,1,1.68,7.92l.26,0L3.52,5.08a1.43,1.43,0,0,1-.4-1,1.44,1.44,0,1,1,2.64.8L7,6.56a1.5,1.5,0,0,1,.47-.08l.23,0ZM7.44,7.44A.48.48,0,1,1,7,7.92.49.49,0,0,1,7.44,7.44ZM4.56,3.6a.48.48,0,1,1-.48.48A.49.49,0,0,1,4.56,3.6Z'
            fillRule='evenodd'
          />
        </svg>
      )
    case 'Link':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M3.44,4.55a3,3,0,0,1,.64-.48A2.83,2.83,0,0,1,7.8,5l-1,1a1.49,1.49,0,0,0-1.69-.86,1.46,1.46,0,0,0-.72.39L2.5,7.41A1.48,1.48,0,0,0,4.59,9.5l.58-.59a3.71,3.71,0,0,0,1.67.26L5.55,10.46a2.84,2.84,0,0,1-4-4Zm3-3L5.16,2.83a3.85,3.85,0,0,1,1.67.25l.58-.58A1.48,1.48,0,0,1,9.5,4.59L7.6,6.49a1.49,1.49,0,0,1-2.09,0A1.63,1.63,0,0,1,5.19,6l-1,1a2.94,2.94,0,0,0,.35.44,3,3,0,0,0,1.34.75,2.82,2.82,0,0,0,2-.28,2.64,2.64,0,0,0,.64-.47l1.9-1.9a2.84,2.84,0,0,0-4-4Z'
          />
        </svg>
      )
    case 'LinkedIn':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M9.21.5H2.79A2.3,2.3,0,0,0,.5,2.79V9.21A2.3,2.3,0,0,0,2.79,11.5H9.21A2.3,2.3,0,0,0,11.5,9.21V2.79A2.3,2.3,0,0,0,9.21.5Zm-5,8.71H2.79v-5H4.17ZM3.32,3.49a.81.81,0,1,1,.8-.81A.81.81,0,0,1,3.32,3.49ZM9.67,9.21H8.29V6.64c0-1.54-1.83-1.43-1.83,0V9.21H5.08v-5H6.46V5A1.74,1.74,0,0,1,9.67,6.11Z'
          />
        </svg>
      )
    case 'Message':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,1.18C3.22,1.18.74,3,.74,5.56A3.83,3.83,0,0,0,1.64,8a6.9,6.9,0,0,1-.88,2.79,12.42,12.42,0,0,0,3.5-1.11c4.05,1,7-1.49,7-4.15S8.76,1.18,6,1.18Z'
          />
        </svg>
      )
    case 'Pie-quarter-alt':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6.48,2.7V1.9L7.82.57A4.12,4.12,0,0,1,8.4.8Zm3.4-1L6.48,5.11v.41H6.9l3.38-3.4A5,5,0,0,0,9.88,1.72Zm-3.4-.65L7.17.39C7,.35,6.71.32,6.48.3Zm5.18,3.77L11,5.52h.76A5.06,5.06,0,0,0,11.66,4.84Zm-.17-.66c-.06-.19-.14-.38-.22-.57L9.37,5.52h.8ZM11,3.06c-.1-.16-.2-.32-.32-.48L7.74,5.52h.8ZM9.43,1.4c-.16-.11-.32-.22-.49-.32L6.48,3.53v.8ZM5.52,6.48V.24a5.77,5.77,0,1,0,6.24,6.24Z'
          />
        </svg>
      )
    case 'Pie-quarter':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M11.75,6.47A5.76,5.76,0,1,1,5.53.25V6.47Zm-5.26-1h5.26A5.76,5.76,0,0,0,6.49.25Z'
          />
        </svg>
      )
    case 'Pie':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M9.72,10.38A5.76,5.76,0,1,1,5.52.25V6.19ZM6.48,1.21A4.81,4.81,0,0,1,10.8,6,4.74,4.74,0,0,1,9.71,9l.69.69A5.76,5.76,0,0,0,6.48.25Z'
          />
        </svg>
      )
    case 'Pinterest':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,0A6,6,0,0,0,3.81,11.59a5.84,5.84,0,0,1,0-1.72l.71-3A2.16,2.16,0,0,1,4.36,6c0-.83.48-1.45,1.08-1.45a.75.75,0,0,1,.76.84,12,12,0,0,1-.49,2,.86.86,0,0,0,.88,1.08c1.07,0,1.89-1.12,1.89-2.74A2.37,2.37,0,0,0,6,3.27a2.59,2.59,0,0,0-2.7,2.61,2.33,2.33,0,0,0,.44,1.37.16.16,0,0,1,0,.17l-.16.68c0,.11-.09.13-.2.08A2.68,2.68,0,0,1,2.17,5.86a3.64,3.64,0,0,1,4-3.64,3.53,3.53,0,0,1,3.7,3.47c0,2.07-1.3,3.73-3.11,3.73a1.6,1.6,0,0,1-1.38-.69L5,10.16a6.71,6.71,0,0,1-.75,1.57A5.81,5.81,0,0,0,6,12,6,6,0,0,0,6,0Z'
            fillRule='evenodd'
          />
        </svg>
      )
    case 'Success':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,1.2A4.8,4.8,0,1,1,1.2,6,4.8,4.8,0,0,1,6,1.2Zm0-1A5.76,5.76,0,1,0,11.76,6,5.76,5.76,0,0,0,6,.24ZM9,4.51l-.68-.68-2.93,3L3.91,5.41l-.67.69L5.4,8.17Z'
          />
        </svg>
      )
    case 'Tick':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path className={pathClassName} d='M10,1.44,4.56,7,2,4.59.24,6.37l4.32,4.19,7.2-7.34Z' />
        </svg>
      )
    case 'Tools':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M2.32,6.08.24,4l.65-.66a.76.76,0,0,0,1-.07c.47-.47.33-1.16,1.36-1.94a3.28,3.28,0,0,1,2-.61,6.5,6.5,0,0,1,2.54.59c-2.17.22-3,1.08-2.09,2l.53.53L4.49,5.51,4,5c-.27-.27-.68-.57-1-.27a.51.51,0,0,0,0,.7ZM6.53,4.16,4.83,5.85l4.88,5.08a1.22,1.22,0,0,0,.85.35,1.2,1.2,0,0,0,1.2-1.2,1.23,1.23,0,0,0-.35-.85ZM4.87,7.28,2.65,9.44a1.74,1.74,0,0,1-.38.27L2,9.85l-.49,1,.4.4,1-.51.14-.28a1.72,1.72,0,0,1,.28-.37L5.54,8Zm3-3.16L9.7,2.27a.21.21,0,0,1,.3,0,.21.21,0,0,1,0,.29L8.11,4.42l.42.44L10.42,3a.22.22,0,0,1,.3,0,.21.21,0,0,1,0,.29L8.82,5.16l.49.5,2-2a1.42,1.42,0,0,0,.42-1,1.44,1.44,0,0,0-2.45-1l-2,2Z'
          />
        </svg>
      )
    case 'Instagram':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M11.76,2.43a4.72,4.72,0,0,1-1.36.37,2.34,2.34,0,0,0,1-1.31,4.78,4.78,0,0,1-1.5.58,2.36,2.36,0,0,0-4,2.15A6.73,6.73,0,0,1,1,1.75a2.38,2.38,0,0,0,.73,3.16A2.45,2.45,0,0,1,.7,4.61,2.37,2.37,0,0,0,2.6,7,2.4,2.4,0,0,1,1.53,7,2.36,2.36,0,0,0,3.74,8.64a4.74,4.74,0,0,1-3.5,1,6.71,6.71,0,0,0,3.62,1.06,6.69,6.69,0,0,0,6.72-7A4.89,4.89,0,0,0,11.76,2.43Z'
          />
        </svg>
      )
    case 'Upload':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M8.19,10.38v.88H3.81v-.88Zm0-1.75H3.81v.88H8.19ZM3.81,5.56V7.75H8.19V5.56h2.63L6,.74,1.18,5.56Z'
          />
        </svg>
      )
    case 'User':
      return (
        <svg className={svgClassName} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
          <title>{name}</title>
          <path
            className={pathClassName}
            d='M6,.24A5.76,5.76,0,1,0,11.76,6,5.76,5.76,0,0,0,6,.24ZM9.72,9a1.14,1.14,0,0,0-.9-.6C7.72,8.18,6.7,8,7.19,7,8.7,4.16,7.59,2.64,6,2.64S3.29,4.22,4.81,7c.51.94-.56,1.16-1.63,1.41a1.14,1.14,0,0,0-.9.6A4.8,4.8,0,1,1,9.72,9Z'
          />
        </svg>
      )
    default:
      return null
  }
}

export default IconPicker
