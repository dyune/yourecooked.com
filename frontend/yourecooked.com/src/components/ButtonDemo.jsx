import { Button } from "@/components/ui/button"
import { Popover, PopoverContent } from "@radix-ui/react-popover";
import { Form } from "react-hook-form";
import { useForm } from "react-hook-form";
import {useState} from "react";
export function ButtonDemo() {
    return (
        <div className="flex flex-row gap-4">

            <Button className="w-7 h-7 text-xl"onClick={() => setOpen(true)}>
                +
            </Button>
                
            

            <Button className="w-7 h-7 text-xl">
                -
            </Button>
            
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Add New Application</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter company name"
                    />
                    </div>
                    <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Enter job position"
                    />
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    );
}
