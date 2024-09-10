import { useQuery } from "@tanstack/react-query"
import { artisan_info, pb } from "../lib/pocketbase"

export function useArtisanData(){
    const id = pb.authStore.model.id
    return useQuery({
        queryFn: () => artisan_info(),
        queryKey: ["artisan_info", id],
        networkMode: "always"
    })
}