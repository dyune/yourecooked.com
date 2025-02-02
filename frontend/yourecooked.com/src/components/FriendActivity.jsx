import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export const FriendActivity = () => {
    return(
        <div className="border-black px-4 py-6 bg-white rounded-lg">
            <Table>
                <TableCaption className="text-2 font-extrabold font-mono text-violet-500">Friend Activities</TableCaption>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium font-mono text-2xl">David got rejected at DRW</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium font-mono text-2xl">Tyler got rejected at DRW</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium font-mono text-2xl">Hamza got in Amazon?</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium font-mono text-2xl">Celine got</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium font-mono text-2xl">idk at this point</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>

        </div>
    );
};