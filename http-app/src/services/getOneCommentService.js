import http from "./HttpService";

export function getOneComment(commentId){
    return http.get(`/comments/${commentId}`)
}