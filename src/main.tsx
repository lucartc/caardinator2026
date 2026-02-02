import React from 'react'
import ReactDOM from 'react-dom/client'
import AppComponent from './AppComponent.tsx'
import './index.css'
import HomePageComponent from './pages/HomePageComponent.tsx'
import WorkspaceComponent from './pages/WorkspaceComponent.tsx'
import HomePageSignal from './signals/HomePageSignal.ts'
import WorkspaceSignal from './signals/WorkspaceSignal.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppComponent routes={
      [
        [HomePageComponent,HomePageSignal],
        [WorkspaceComponent,WorkspaceSignal],
      ]
    }/>
  </React.StrictMode>,
)

//Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
