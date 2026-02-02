import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppComponent from './AppComponent'
import HomePageComponent from '../../pages/HomePageComponent'
import WorkspaceComponent from '../../pages/WorkspaceComponent'
import HomePageSignal from '../../signals/HomePageSignal'
import WorkspaceSignal from '../../signals/WorkspaceSignal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppComponent routes={
      [
        [HomePageComponent,HomePageSignal],
        [WorkspaceComponent,WorkspaceSignal],
      ]
    }/>
  </StrictMode>,
)
