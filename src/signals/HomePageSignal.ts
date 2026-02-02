import { App, Signal, Api } from '../interfaces/entities'

class HomePageSignal implements Signal{
    api : Api
    app : App

    constructor(app: App, api: Api){
        this.app = app
        this.api = api
    }

    public signal(signal: string){
        // Implementa signal
        switch(signal){
            case 'goToWorkspace':
                this.app.navigate('WorkspaceComponent')
                break;
        }
    }
}

export default HomePageSignal