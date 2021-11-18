import http from "./HttpService";

export function deleteComment(commentId){
    return http.delete(`/comments/${commentId}`)
}