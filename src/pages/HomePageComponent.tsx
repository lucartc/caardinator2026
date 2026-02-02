import { PageProps } from '../interfaces/utils'
import './assets/HomePageComponent.css'

function HomePageComponent(_props: PageProps) {

  const goToWorkspace = () => _props.signal.signal('goToWorkspace')

  return (
    <>
      <div>Home</div>
      <button onClick={goToWorkspace}>Go to Workspace</button>
    </>
  )
}

export default HomePageComponent