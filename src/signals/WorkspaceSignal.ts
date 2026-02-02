import { App, Signal, State } from '../interfaces/entities'
import LocalStorageState from '../state_adapters/localstorage'

class WorkspaceSignal implements Signal{
    _state : State = new LocalStorageState()
    _app : App
    
    constructor(app: App){
        this._app = app
    }

    public signal(signal: string){
        // Lista as ações que o usuário espera desempenhar na página
        switch(signal){
            case 'goToHome':
                this._app.navigate('HomePageComponent')
                break;
        }
    }
}

export default WorkspaceSignal