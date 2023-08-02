const Tmoviesreducer = (state,action)=>{

    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }

        case "MOVIES_API_DATA":
            return{
                ...state,
                isLoading:false,
                moviesdata: action.payload
            }
        
        case "API_FETCH_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }

        default:
            return state
    }
}

export default Tmoviesreducer