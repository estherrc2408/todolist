export const useToDoReducer = (state , action) => {

    switch (action.type) {
        case 'add':
            return [ action.payload,...state]

        case 'delete':
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        case 'toggle':
                //cambiará la propiedad done de true a false o de false a true
            return 
        
        default:
            return state;
    }
}