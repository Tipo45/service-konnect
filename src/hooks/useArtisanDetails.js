import { useQuery } from "@tanstack/react-query";
import { pb, reviews } from "../lib/pocketbase";

export function useArtisanDetails() {
    const id = pb.authStore.model.id
    return useQuery({
        queryFn: () => reviews(),
        queryKey: ["reviews", id],
        networkMode: "always"
    });
}