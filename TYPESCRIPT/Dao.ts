import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: T): boolean {
        console.log('logica update')
        return true
    }
    remover(id: number): T {
        console.log('logica delete')
        return Object()
    }
    selecionar(id: number): T {
        console.log('logica select')
        return Object()
    }
    selecionarTodos(): [any] {
        console.log('logica getAll')
        return [Object()]
    }
}