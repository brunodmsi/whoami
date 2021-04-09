import React from 'react'
import styles from './input.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)
interface Props {
  onChange(value: string): void
  value: string
  label: string
  className?: string
}

export const Input: React.FC<Props> = ({ label, value, onChange, className }) => {
  return (
    <input
      className={cx('input', className)}
      placeholder={label}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  )
}
