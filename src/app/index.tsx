import React, { useState } from 'react'
import Context, { IItem } from 'Src/context'
import Main from 'Src/pages/main'
import style from './app.module.scss'

const App = () => {
  const [ items, setItems ] = useState<IItem[] | []>([])

  return (
    <Context.Provider value={ { temp: items } }>
      <main className={ style.wrapper }>
        <Main />
      </main>
    </Context.Provider>
  )
}

export default App
