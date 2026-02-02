import {
    List,
    Card
} from './entities'

// API DTOs

interface CreateProjectDTO{
    title: string
}

interface CreateListDTO{
    title: string
}

interface CreateCardDTO{
    title: string,
    description: string
}

interface GetProjectsDTO{
    ids: number[]
}

interface GetListsDTO{
    ids: number[]
}

interface GetCardsDTO{
    ids: number[]
}

interface UpdateProjectsDTO{
    id: number,
    title?: string,
    lists?: List[]
}

interface UpdateListsDTO{
    id: number,
    title?: string,
    cards?: Card[]
}

interface UpdateCardsDTO{
    id: number,
    title?: string,
    description?: string
}

interface DeleteProjectsDTO{
    id: number
}

interface DeleteListsDTO{
    id: number
}

interface DeleteCardsDTO{
    id: number
}

interface MoveCardDTO{
    id: number
    to: number
}

interface MoveListDTO{
    id: number
    project: number
    position: number
}

export type {
    CreateProjectDTO,
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
    MoveListDTO
}