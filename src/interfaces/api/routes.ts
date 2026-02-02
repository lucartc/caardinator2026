import {
    CreateListDTO,
    CreateCardDTO,
    GetProjectsDTO,
    GetListsDTO,
    GetCardsDTO,
    UpdateProjectsDTO,
    UpdateListsDTO,
    UpdateCardsDTO,
    DeleteProjectsDTO,
    DeleteListsDTO,
    DeleteCardsDTO,
    MoveCardDTO,
    MoveListDTO,
    CreateProjectDTO
} from './dtos'

import{
    Project,
    List,
    Card
} from '../entities'

// API Services

type NavigateFunction = (page: string) => void

type CreateProjectFunction = (data: CreateProjectDTO) => void

type CreateListFunction = (data: CreateListDTO) => void

type CreateCardFunction = (data: CreateCardDTO) => void

type GetProjectsFunction = (data: GetProjectsDTO) => Project[]

type GetListsFunction = (data: GetListsDTO) => List[]

type GetCardsFunction = (data: GetCardsDTO) => Card[]

type UpdateProjectFunction = (data: UpdateProjectsDTO) => void

type UpdateListFunction = (data: UpdateListsDTO) => void

type UpdateCardFunction = (data: UpdateCardsDTO) => void

type DeleteProjectsFunction = (data: DeleteProjectsDTO) => void

type DeleteListsFunction = (data: DeleteListsDTO) => void

type DeleteCardsFunction = (data: DeleteCardsDTO) => void

type MoveCardFunction = (data: MoveCardDTO) => void

type MoveListFunction = (data: MoveListDTO) => void

type SignalFunction = (signal: string) => void

export type{
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
    MoveListFunction,
    SignalFunction
}