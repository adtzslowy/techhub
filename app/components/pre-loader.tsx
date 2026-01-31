import { Skeleton } from "@/components/ui/skeleton";

export function PreLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="flex w-full max-w-sm flex-col gap-4 px-6">
                <div className="flex justify-center">
                    <Skeleton className="h-10 w-10 rounded-full"/>
                </div>

                <Skeleton className="mx-auto h-4 w-2/3"/>
                <Skeleton className="mx-auto h-4 w-1/2"/>

                <Skeleton className="mx-auto mt-6 h-10 w-32 rounded-md"/>
            </div>
        </div>
    )
}