import {
  SignalFunction,
  NavigateFunction,
  CreateProjectFunction,
  CreateListFunction,
  CreateCardFunction,
  GetProjectsFunction,
  GetListsFunction,
  GetCardsFunction,
  UpdateProjectFunction,
  UpdateListFunction,
  UpdateCardFunction,
  DeleteProjectsFunction,
  DeleteListsFunction,
  DeleteCardsFunction,
  MoveCardFunction,
  MoveListFunction

} from './api'

interface Signal{
  signal: SignalFunction
}

interface App{
  navigate: NavigateFunction
}

interface State{
  createProject: CreateProjectFunction
  createList: CreateListFunction
  createCard: CreateCardFunction
  getProjects: GetProjectsFunction
  getLists: GetListsFunction
  getCards: GetCardsFunction
  updateProject: UpdateProjectFunction
  updateList: UpdateListFunction
  updateCard: UpdateCardFunction
  deleteProjects: DeleteProjectsFunction
  deleteLists: DeleteListsFunction
  deleteCards: DeleteCardsFunction
  moveCard: MoveCardFunction
  moveList: MoveListFunction
}

interface List{
  id: number
  title: string
  cards: Card[]
}

interface Card{
  id: number
  title: string
  description: string
}

interface Project{
  id: number
  title: string
  lists: List[]
}

export type{
  Signal,
  App,
  State,
  List,
  Card,
  Project
}