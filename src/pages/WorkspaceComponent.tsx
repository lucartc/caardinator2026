import { PageProps } from '../interfaces/props'

function WorkspaceComponent(_props: PageProps) {

  const goToHome = () => {
    _props.signal.signal('goToHome')
  }

  return (
    <>
      <div>Workspace</div>
      <button onClick={goToHome}>Go to Home</button>
    </>
  )
}

export default WorkspaceComponent