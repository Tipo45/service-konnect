import { useQuery } from "@tanstack/react-query";
import { pb } from "../lib/pocketbase";

export function useArtisanDetails() {
    const id = pb.authStore.model.id
    return useQuery({
        queryFn: () => ,
        queryKey: [, id],
        networkMode: "always"
    })
}