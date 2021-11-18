import http from "./HttpService";

export function postAllComments(data){
    return http.post("/comments",data)
}