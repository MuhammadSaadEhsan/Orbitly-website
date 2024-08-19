import { getToken } from "../Auth";
import { myAxios, privateAxios } from "./helper"

//create post function
export const createPost = (postData) => {
    console.log(postData);
    return privateAxios.post(`/api/user/${postData.userId}/category/${postData.categoryId}/posts`, postData).then(response => {
    return response.data});
}

//${postData.userId}


//get post from server
// export const loadAllPosts = () =>{
//    return privateAxios.get("/api/posts").then(response =>response.data);
// }


export const loadAllPosts = async () => {
    try {
        const response = await privateAxios.get("/api/posts");
        const data = response.data;

        if (Array.isArray(data.content)) {
            return { ...data, content: data.content.reverse() }; // Reverse the 'content' property
        } else {
            console.error('Data content is not an array:', data);
            throw new Error('Data content is not an array');
        }
    } catch (error) {
        console.error('Error loading posts:', error.response ? error.response.data : error.message);
        throw error;
    }
};

//load single post of givn id
export const laodPost = (postId) => {
    return privateAxios.get("/api/posts/"+postId).then(response =>response.data);
}


// export const fetchImage = async (imageName) => {
//     try {
//         // console.log(getToken());
//         const response = await privateAxios.get(`/api/post/imagenpnote/${imageName}`, {
//             responseType: 'blob'
//         });
//         return URL.createObjectURL(response.data);
//     } catch (error) {
//         console.error('Error fetching image:', error);
//         throw error;
//     }
// };


export const createComment = (comment,postId,userId) =>{
    console.log(`Posting comment to postId: ${postId}, userId: ${userId}`);// Add this line to debug
    return privateAxios.post(`api/posts/${postId}/comments/${userId}`,comment)
}


//upload post image
export const uploadPostImage =(image,postId)=>{
    let formData = new FormData();
    formData.append('image',image);

    return privateAxios.post(`api/post/image/upload/${postId}`,formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }).then((response)=>{response.data});
}