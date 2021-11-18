import http from "./HttpService";

export function getAllComments(){
    return http.get("/comments")
}