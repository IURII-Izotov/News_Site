import axios from "axios";

//API
const settings ={
    headers: {
        "Authorization": "Token 4636db43fb079c6778743830cccdb72bfe1aebae",
    }
}
const instance=axios.create({
    baseURL:'https://megalab.pythonanywhere.com/',
    ...settings

})

export const newsApi={
    getUserData(){
       return  instance.get('user')
    },
    createPost(title:string='Не введен заголовок',text:string='Не введен текст новости',image:string,tag:string){
        return instance.post('post',{title,text,image,tag})
    },
    getPostList(){
        return  instance.get('post')
    },
    getPostDetail(id:number){
        return  instance.get(`post/${id}`)
    },
    deletePost(id:string){
        return instance.delete(`post/${id}`)
    },
    getTagList(){
        return  instance.get('tag')
    },
    postLike(id:number){
        return  instance.post(`like`,{post:id})
    },
    postUnLike(id:number){
        return  instance.post(`like`,{post:id})
    },
    getLike(){
        return  instance.get('like')
    },
    createComment(id:number,commentText:string){
        return  instance.post(`comment`,{post:id,text:commentText})
    },
    createReplyComment(id:number,commentText:string,parent:number){
        return  instance.post(`comment`,{post:id,text:commentText,parent})
    },
}