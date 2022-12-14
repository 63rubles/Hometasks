import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'down') {
            state.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state // need to fix
        }
        case 'check': {
            return state.filter(a => a.age >= action.payload).reverse()
            // need to fix
        }
        default:
            return state
    }
}

export const sortUsersAC = () => {
    return {
        type: 'sort',
        payload: {
            up: 'up',
            down: 'down'
        }
    } as const
}

export const checkUsersAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}
