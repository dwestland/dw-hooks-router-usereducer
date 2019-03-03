import React, { useState, useEffect } from 'react'
import { debounce } from 'debounce'

export default function Home() {

  // Counter - local sate //
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
    console.log('%c useEffect count ', 'background: blue; color: white',)
  }, [count])


  // Screen width event listener - local state //
  let viewportWidth = window.innerWidth
  const [screenWidth, setScreenWidth] = useState(viewportWidth)

  const resize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.onresize = debounce(resize, 300);
  }, [])


  // Online event listener - local state //
  let onlineStatus = window.navigator.onLine
  const [isOnline, setIsOnline] = useState(onlineStatus)

  useEffect(() => {
    let onlineStatus = window.navigator.onLine
    setIsOnline(onlineStatus)
    window.addEventListener("online", () => (setIsOnline(true)))
    window.addEventListener("offline", () => (setIsOnline(false)))
  }, [])

  return (
    <div>
      <h2>Home <span role="img" aria-label="Cool Kid emoji">😎</span></h2>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <p>Screen Width: {screenWidth}</p>

      <p>Internet Status: {isOnline ? "Online" : "Offline"}</p>

    </div>
  )
}
