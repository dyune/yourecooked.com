import { Button } from "@/components/ui/button"

export function ButtonDemo() {
    return (
        <div className="flex flex-row gap-4">
            <Button className="w-7 h-7 text-xl">
                +
            </Button>

            <Button className="w-7 h-7 text-xl">
                -
            </Button>
        </div>
    );
}
