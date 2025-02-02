import {TableDemo} from "@/components/TableDemo";
import {Button} from "@/components/ui/button";

export default function Page() {
    return <div className="p-12">
        <div className="mb-8 flex flex-row justify-between gap-8">
            <h1 className="text-5xl font-bold font-mono">You're (not) Cooked</h1>
            <nav className="flex flex-row gap-4 mt-2.5">
                <div className="">
                    <Button variant="outline">Application Menu</Button>
                </div>
                <div className="">
                    <Button variant="outline">Back</Button>
                </div>
            </nav>
        </div>
        <TableDemo></TableDemo>
    </div>
}