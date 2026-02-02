import { browser , expect, $} from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application title', async () => {
        await expect($('h1')).toHaveText('Caardinator')
        console.log('Hello', await browser.getTitle(), 'application!')
    })

    it('Usuário deve ser capaz de criar um novo projeto',async () => {
        // Usuário clica no botão de criar projeto
        // Usuário informa nome do projeto e confirma
        // Projeto é criado e aparece na tela
        const create_project = browser.$('#create_project')
        await create_project.click()
        //await expect($('#input')).toHaveValue('Hello!')
    })
})

