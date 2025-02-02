import { Button } from "@/components/ui/button"
import { Popover, PopoverContent } from "@radix-ui/react-popover";
import { Form } from "react-hook-form";
import { useForm } from "react-hook-form";
import {useState} from "react";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import ApiService from "@/app/APIs";


export function ButtonDemo() {

    const userId = 1;

    const [open, setOpen] = useState(false);
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit(){
        try {
            const response = await ApiService.createJobApplication(1, {
                companyName: company,
                roleName: position,
                description: description,
                status: "APPLIED",
            })

            if (response.status === 200) {
                setCompany("");
                setPosition("");
                setOpen(false); // Close the modal
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                    <div>
                        <Label htmlFor="position">Description</Label>
                        <Input
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter job description"
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
