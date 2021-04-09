import React from 'react'
import styles from './button.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

interface Props {
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<Props> = ({ children, onClick, disabled }) => (
  <button className={cx('button', { disabled })} onClick={() => onClick()} disabled={disabled}>
    {children}
  </button>
)

Button.defaultProps = {
  disabled: false
}
