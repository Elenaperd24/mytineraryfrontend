export const initialState = { // crear estados
    cities: [], //estado inicial de cities
    citiesNew: [],
    user: null,
   
}

export const accionType = { // mis accioness
    CITIESDB: "CITIESDB",
    USERDB: "USERDB",
    FILTER: "FILTER"

}

const reducer = (state, action) => {
    //console.log(action); 
    switch (action.type) {
        case "CITIESDB":
            return {
                ...state,
                cities: action.cities,
                citiesNew: action.cities
            }
            case "USERDB":
                return {
                    ...state,
                    user: action.user
                }
                case "FILTER":
                    return {
                        ...state,
                        citiesNew: action.citiesNew
                    }
                                    
        default: return state
    }
}

export default reducer;