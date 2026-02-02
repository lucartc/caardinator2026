import { Card, List, Project, Api } from "../interfaces/entities";
import {
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
} from "../interfaces/api/routes";

class LocalStorageApi implements Api{
    _projects : Project[]
    _lists: List[]
    _cards: Card[]

    constructor(){
        this._projects = this.getFromLocalStorage('projects')
        this._lists = this.getFromLocalStorage('lists')
        this._cards = this.getFromLocalStorage('cards')
    }

    public createProject : CreateProjectFunction = (data) => {
        const new_project = {
            id: this.getNextProjectId(),
            title: data.title,
            lists: []
        }
        this._projects.push(new_project)
    }

    public createList: CreateListFunction = (data) => {
        const new_list = {
            id: this.getNextListId(),
            title: data.title,
            cards: []
        }

        this._lists.push(new_list)
    }

    public createCard: CreateCardFunction = (data) => {
        const new_card = {
            id: this.getNextCardId(),
            title: data.title,
            cards: []
        }

        this._lists.push(new_card)
    }

    public getProjects: GetProjectsFunction = (data) => {
        const projects = this.getFromLocalStorage('projects')
        const results = projects.filter((proj : Project) => data.ids.includes(proj.id))
        return results
    }

    public getLists: GetListsFunction = (data) => {
        const lists = this.getFromLocalStorage('lists')
        const results = lists.filter((list : List) => data.ids.includes(list.id))
        return results
    }

    public getCards: GetCardsFunction = (data) => {
        const cards = this.getFromLocalStorage('cards')
        const results = cards.filter((card : Card) => data.ids.includes(card.id))
        return results
    }

    public updateProject: UpdateProjectFunction = (data) => {
        const project : Project = this.getProjects({ids: [data.id]})[0]
        project.lists = data.lists ? data.lists : project.lists
        project.title = data.title ? data.title : project.title
        this._projects = this._projects.filter(proj => proj.id != project.id)
        this._projects.push(project)
        this.setInLocalStorage('projects',JSON.stringify(this._projects))
    }

    public updateList: UpdateListFunction = (data) => {
        const list : List = this.getLists({ids: [data.id]})[0]
        list.cards = data.cards ? data.cards : list.cards
        list.title = data.title ? data.title : list.title
        this._lists = this._lists.filter(li => li.id != list.id)
        this._lists.push(list)
        this.setInLocalStorage('lists',JSON.stringify(this._lists))
    }

    public updateCard: UpdateCardFunction = (data) => {
        const card : Card = this.getCards({ids: [data.id]})[0]
        card.description = data.description ? data.description : card.description
        card.title = data.title ? data.title : card.title
        this._cards = this._cards.filter(c => c.id != card.id)
        this._cards.push(card)
        this.setInLocalStorage('cards',JSON.stringify(this._cards))
    }

    public deleteProjects: DeleteProjectsFunction = (data) => {
        const project : Project = this.getProjects({ids: [data.id]})[0]
        this._projects = this._projects.filter(proj => proj.id != project.id)
        this.setInLocalStorage('projects',JSON.stringify(this._projects))
    }

    public deleteLists: DeleteListsFunction = (data) => {
        const list : List = this.getLists({ids: [data.id]})[0]
        this._lists = this._lists.filter(li => li.id != list.id)
        this.setInLocalStorage('lists',JSON.stringify(this._lists))
    }

    public deleteCards: DeleteCardsFunction = (data) => {
        const card : Card = this.getCards({ids: [data.id]})[0]
        this._cards = this._cards.filter(c => c.id != card.id)
        this.setInLocalStorage('cards',JSON.stringify(this._cards))
    }

    public moveCard: MoveCardFunction = (data) => {
        const card : Card = this.getCards({ids: [data.id]})[0]
        const list : List = this.getLists({ids: [data.to]})[0]
        let old_list_id : number| null = null

        this._lists.forEach(li => {
            if(li.id != list.id){
                const card_ids = li.cards.map(card => card.id)

                if(card_ids.includes(card.id)){
                    old_list_id = li.id
                }
            }
        })

        if(old_list_id != null){
            const old_list = this.getLists({ids: [old_list_id]})[0]
            old_list.cards = old_list.cards.filter(c => c.id != card.id)
            this.updateList({id: old_list_id, cards: old_list.cards})
        }
        
        list.cards.push(card)
        this.updateList({id: data.to, cards: list.cards.map(c => c)})
    }

    public moveList: MoveListFunction = (data) => {
        const list : List = this.getLists({ids: [data.id]})[0]
        const project : Project = this.getProjects({ids: [data.project]})[0]
        project.lists = project.lists.filter(li => li.id != list.id)

        const start = project.lists.splice(0,data.position)
        const end = project.lists.splice(data.position)
        project.lists = [start,list,end].flat()
        this.updateProject({id: project.id, lists: project.lists})
    }

    private getFromLocalStorage(key: string){
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : data
    }

    private setInLocalStorage(key: string, data: string){
        localStorage.setItem(key,data)
    }

    private getNextProjectId() : number{
        const sorted_projects = this._projects.sort((a : Project, b : Project) => b.id - a.id)
        return sorted_projects[0].id ? sorted_projects[0].id : 0
    }

    private getNextListId() : number{
        const sorted_list = this._lists.sort((a : List, b : List) => b.id - a.id)
        return sorted_list[0].id ? sorted_list[0].id : 0
    }
    
    private getNextCardId() : number{
        const sorted_card = this._cards.sort((a : Card, b : Card) => b.id - a.id)
        return sorted_card[0].id ? sorted_card[0].id : 0
    }
}

export default LocalStorageApi