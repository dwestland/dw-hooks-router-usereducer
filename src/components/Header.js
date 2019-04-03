import React from 'react'
import { Link } from "react-router-dom"
import './Headers.scss'

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
        <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}
