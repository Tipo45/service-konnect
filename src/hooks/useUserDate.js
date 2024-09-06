import {
    user_info, pb
} from "../lib/pocketbase"
import {
    useQuery
} from "@tanstack/react-query"

export function useUserData(){
    const id = pb.authStore.model.id
    return useQuery({
        queryFn: () => user_info(),
        queryKey: ["user_info", id],
        networkMode:"always"
    })
}

