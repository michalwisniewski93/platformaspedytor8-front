const initialState = {
    isAdminLogged: false,
    temporaryBlogImageUrl: '',
    temporaryBlogAuthor: '',
    temporaryBlogTitle: '',
    temporaryBlogDescription: '',
} 

function reducer(state=initialState, action){
    switch(action.type){
        case 'CHANGE_ADMIN_LOGGED':
            return {...state, isAdminLogged: !state.isAdminLogged}
        case 'CHANGE_TEMPORARY_BLOG_IMAGE_URL': 
            return {...state, temporaryBlogImageUrl: action.temporaryBlogImageUrl}
        case 'CHANGE_TEMPORARY_BLOG_AUTHOR':
            return {...state, temporaryBlogAuthor: action.temporaryBlogAuthor}
        case 'CHANGE_TEMPORARY_BLOG_TITLE':
            return {...state, temporaryBlogTitle: action.temporaryBlogTitle}
        case 'CHANGE_TEMPORARY_BLOG_DESCRIPTION':
            return {...state, temporaryBlogDescription: action.temporaryBlogDescription}
         default:
            return {...state}
    }
}

export default reducer