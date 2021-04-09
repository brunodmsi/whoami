import React from 'react'
import styles from './header.module.css'
import { bind } from '../utils/bind'
import logo from './logo.svg'

const cx = bind(styles)

export const Header: React.FC = () => {
  return (
    <header className={cx('wrapper')}>
      <a href="/" className={cx("link")}>
        <img src={logo} alt="logo" />
        <h1 className={cx('header')}> Quem sou eu?</h1>
      </a>
    </header>
  )
}
