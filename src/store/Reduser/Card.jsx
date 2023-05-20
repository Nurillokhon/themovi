const initastate = {
    card : []
}
function setCard(state = initastate , action){
   if(action.type === 'add'){
    let clone = [...state.card]
    let son = 0
    if(clone.length>0){
       clone.map(item =>{
        if(item.id === action.payload.id){
            son++
        }
       })
       if(son === 0){
        clone.push(action.payload)
       }
       else{
        console.log('kalla');
       }
    }
    else{
        clone.push(action.payload)
    }
    
    let yangi = {
        ...state,
        card: clone
    }
    return state = yangi
   }

    return state
}

export {setCard}