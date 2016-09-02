export default (state="", action) => {
  switch(action.type){
    case 'RETRIEVAL_ERROR':
      return action.error
    default:
      return state
  }
}
