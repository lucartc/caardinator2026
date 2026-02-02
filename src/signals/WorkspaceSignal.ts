import { App, Signal, Api } from '../interfaces/entities'

class WorkspaceSignal implements Signal{
    api : Api
    app : App
    
    constructor(app: App, api: Api){
        this.app = app
        this.api = api
    }

    public signal(signal: string){
        // Lista as ações que o usuário espera desempenhar na página
        switch(signal){
            case 'goToHome':
                this.app.navigate('HomePageComponent')
                break;
        }
    }
}

export default WorkspaceSignal