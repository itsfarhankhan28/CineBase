const AllMoviesreducer = (state,action)=>{

    switch(action.type){
        case "IS_LOADING":
            return{
                ...state,
                isLoading:true
            }

        case "ALL_MOVIES_DATA":
            return{
                allmovies:action.payload
            }

        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }
    }

}

export default AllMoviesreducer