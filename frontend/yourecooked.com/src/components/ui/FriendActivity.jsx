import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export const Friendboard = () => {
    return(
        <div className="border-black border-4 w-3/6 px-0 py-10 bg-gradient-to-br from-white to-gray-400 rounded-xl">
            <Table>
                <TableCaption className="text-2 font-extrabold text-violet-500">Friend Activities</TableCaption>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium text-2xl">David got rejected at DRW</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium text-2xl">Tyler got rejected at DRW</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium text-2xl">Hamza got in Amazon?</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium text-2xl">Celine got</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="font-medium text-2xl">idk at this point</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>

        </div>
    );
};