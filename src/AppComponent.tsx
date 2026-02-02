import './App.css'
import { AppProps } from './interfaces/props'
import { App } from './interfaces/entities'
import { useState } from 'react'
import SignalFactory from './signals/SignalFactory'

function AppComponent(props : AppProps) {
  const [currentRouteIndex,setCurrentRouteIndex] = useState(0)
  const [Component, signal] = props.routes[currentRouteIndex]

  const AppApi : App = {
    navigate: function (page: string): void {
      const routeNames = props.routes.map(r => r[0].name)
      const newRouteIndex = routeNames.indexOf(page)

      if(newRouteIndex >= 0){
        setCurrentRouteIndex(newRouteIndex)
      }
    }
  }

  const showRoutePage = () => {
    const signalObject = SignalFactory.createSignal(signal.name,AppApi)

    if(signalObject){
      return <Component signal={signalObject}></Component>
    }

    return <></>
  }

  return (
    <>
      {showRoutePage()}
    </>
  )
}

export default AppComponent
