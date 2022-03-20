import React from 'react'
import classes from './footer.module.css'
export default function footer() {
  return (
    <footer>
    <div className={["container",classes.container].join(" ")}>
      <div>
        Copyright &copy;2020.
      </div>
      <div className="textRight">
        Built with <span className="red">&hearts;</span> by
        <a
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          target="_blank" rel="noreferrer"
          >Create React App</a
        >
      </div>
    </div>
  </footer>
  )
}
