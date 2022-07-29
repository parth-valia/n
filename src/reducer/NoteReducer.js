export const initState = [

]

export const NoteReducer =(state,{type,payload})=>{
    switch (type) {
        case "add":
            return [...state,{id:state.length+1,title:payload.title,content:payload.content}]
        case "delete":
            return state.filter((note)=> payload !== note.id)
        case "edit":
            return state.map((note)=>{
                if (note.id == payload.id)
                    return payload
                else
                    return note 
            })
        default:
            return state;
    }
}