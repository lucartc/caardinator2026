import {
  Api,
    Signal
} from './entities'


// As props de toda página devem ter um Signal
// para permitir que a página utilize a API.
interface PageProps{
  signal: Signal
}

// O App é inicializado com todas as rotas e
// com o Signal respectivo de cada página. Dessa forma,
// o App sabe qual Signal deve ser enviado para a página.
interface AppProps{
  routes: RouteMap
}

// Representa um nome de classe qualquer.
// Alternativa a nomes de classe hardcoded.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassName = new (...args: any[]) => any

// Tupla onde o primeiro elemento
// é a componente React da Página,
// e o segundo é a classe do Signal
// dessa mesma página.
type RouteMap = [React.FC<PageProps>,ClassName,Api][]

export type {
    PageProps,
    AppProps
}