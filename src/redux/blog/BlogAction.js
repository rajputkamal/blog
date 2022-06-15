const data = 'new data'
export const CREATE_BLOG = 'CREATE_BLOG'

export const createBlog = () => {
    return {
        type: CREATE_BLOG,
        payload: data
    }
}
export default createBlog;