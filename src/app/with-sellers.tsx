import React, { useState, useEffect } from 'react'
import SellersContext, { ISeller } from 'Context/sellers'

const withSorting = (Component: any) => (props: any) => {
  const [ sellers, setSellers ] = useState<ISeller[]>([])

  const fetchSellers = async () => {
    const url = 'https://avito.dump.academy/sellers'
    const { data } = await fetch(url).then((res) => res.json())
    return data
  }

  useEffect(() => {
    const load = async () => {
      const loadedSellers = await fetchSellers()
      setSellers(loadedSellers)
    }

    load()
  }, [])

  return (
    <SellersContext.Provider value={{ sellers }}>
      <Component {...props} />
    </SellersContext.Provider>
  )
}

export default withSorting
