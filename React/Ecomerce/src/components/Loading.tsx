import {Spinner} from "@/components/ui/spinner";

export function Loading() {
    return (
        <div className="absolute top-1/2 left-1/2 translate-[-50%]">
            <Spinner className="size-20"/>
        </div>
    )
}