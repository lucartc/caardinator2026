import { App, Signal, State } from '../interfaces/entities'
import LocalStorageState from '../state_adapters/localstorage'

class HomePageSignal implements Signal{
    _state : State = new LocalStorageState()
    _app : App

    constructor(app: App){
        this._app = app
    }

    public signal(signal: string){
        // Implementa signal
        switch(signal){
            case 'goToWorkspace':
                this._app.navigate('WorkspaceComponent')
                break;
        }
    }
}

export default HomePageSignal