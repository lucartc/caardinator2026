import { Api, App, Signal } from "../interfaces/entities";
import HomePageSignal from "./HomePageSignal";
import WorkspaceSignal from "./WorkspaceSignal";

type SignalConstructor = {
  new (app: App, api: Api): Signal
}

class SignalFactory{
    private static signalMap : Record<string,SignalConstructor> = {
        'HomePageSignal' : HomePageSignal,
        'WorkspaceSignal' : WorkspaceSignal
    }

    public static createSignal(signalName: string, app: App, api: Api) : Signal | undefined {
        const SignalClass = SignalFactory.signalMap[signalName]

        if(SignalClass){
            return new SignalClass(app,api)
        }
    }
}

export default SignalFactory