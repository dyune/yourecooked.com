"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {useState} from "react";
import {ButtonDemo} from "@/components/ButtonDemo";
import {Pie2} from "@/components/ui/pie-chart";
// const [applications, setApplications] = useState([
//     {
//       id: "APP001",
//       company: "Company A",
//       position: "Software Engineer",
//       status: "Submitted",
//     },
//     {
//       id: "APP002",
//       company: "Company B",
//       position: "Product Manager",
//       status: "Interview",
//     },
//     {
//       id: "APP003",
//       company: "Company C",
//       position: "Data Scientist",
//       status: "Accepted",
//     },
//     {
//       id: "APP004",
//       company: "Company D",
//       position: "UX Designer",
//       status: "Rejected",
//     },
//     {
//       id: "APP005",
//       company: "Company E",
//       position: "Backend Developer",
//       status: "Submitted",
//     },
//     {
//       id: "APP006",
//       company: "Company F",
//       position: "Frontend Developer",
//       status: "Pending",
//     },
//     {
//       id: "APP007",
//       company: "Company G",
//       position: "QA Engineer",
//       status: "Interview",
//     },
//     {
//         id: "APP008",
//         company: "Company G",
//         position: "QA Engineer",
//         status: "Interview",
//       },
//       {
//         id: "APP009",
//         company: "Company G",
//         position: "QA Engineer",
//         status: "Interview",
//       },
//       {
//         id: "APP010",
//         company: "Company G",
//         position: "QA Engineer",
//         status: "Interview",
//       },
//       {
//         id: "APP011",
//         company: "Company G",
//         position: "QA Engineer",
//         status: "Interview",
//       },
//       {
//         id: "APP012",
//         company: "Company G",
//         position: "QA Engineer",
//         status: "Interview",
//       },
//   ]);

export const TableDemo = () => {
    const [applications, setApplications] = useState([
        {
            id: "APP001",
            company: "Company A",
            position: "Software Engineer",
            //status: "Submitted",
        },
        {
            id: "APP002",
            company: "Company B",
            position: "Product Manager",
            //status: "Interview",
        },
        {
            id: "APP003",
            company: "Company C",
            position: "Data Scientist",
            //status: "Accepted",
        },
        {
            id: "APP004",
            company: "Company D",
            position: "UX Designer",
            //status: "Rejected",
        },
        {
            id: "APP005",
            company: "Company E",
            position: "Backend Developer",
            //status: "Submitted",
        },
        {
            id: "APP006",
            company: "Company F",
            position: "Frontend Developer",
            //status: "Pending",
        },
        {
            id: "APP007",
            company: "Company G",
            position: "QA Engineer",
            //status: "Interview",
        },
        {
            id: "APP008",
            company: "Company G",
            position: "QA Engineer",
            //status: "Interview",
        },
        {
            id: "APP009",
            company: "Company G",
            position: "QA Engineer",
            //status: "Interview",
        },
        {
            id: "APP010",
            company: "Company G",
            position: "QA Engineer",
            //status: "Interview",
        },
        {
            id: "APP011",
            company: "Company G",
            position: "QA Engineer",
            //status: "Interview",
        },
        {
            id: "APP012",
            company: "Company G",
            position: "QA Engineer",
            //status: "Interview",
        },
    ]);
    const handleStatusChange = (id, newStatus) => {
        setApplications((prev) =>
            prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
        );
    };
    return (

        <div className="flex flex-col space-y-4 w-full">
            {/* Content above the table */}
            <div className="flex flex-row gap-4 justify-between">
                <Pie2 ></Pie2>
                {/* Table Container */}
                <div className="bg-white w-[73%] min-h-[100%] flex flex-col p-6 rounded-xl shadow-lg">
                    <div className="flex flex-row gap-4">
                        <h2 className="text-xl font-semibold font-mono mb-4 mr-4 text-left ml-2">Applications</h2>
                        <ButtonDemo/>
                    </div>
                    <h2 className="text-sm font-mono mb-4 mr-4 text-left ml-2">
                        A list of your recent job applications.
                    </h2>

                    <Table className="w-full table-auto border border-gray-300">
                        <TableHeader>
                            <TableRow className="bg-gray-100">
                                <TableHead
                                    className="text-xl font-bold font-mono text-violet-500 p-3">Company</TableHead>
                                <TableHead
                                    className="text-xl font-bold font-mono text-violet-500 p-3">Position</TableHead>
                                <TableHead
                                    className="text-xl font-bold font-mono text-violet-500 p-3">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applications.map((application) => (
                                <TableRow key={application.id} className="hover:bg-gray-50">
                                    <TableCell className="font-mono font-semibold p-3">{application.company}</TableCell>
                                    <TableCell className="font-mono font-medium p-3">{application.position}</TableCell>
                                    <TableCell className="p-3">
                                        <select
                                            value={application.status}
                                            onChange={(e) => handleStatusChange(application.id, e.target.value)}
                                            className="border rounded-md p-2 bg-violet-200 text-xs font-mono"
                                        >
                                            <option value="Submitted">Submitted</option>
                                            <option value="Interview">Interview</option>
                                            <option value="Accepted">Accepted</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2} className="font-bold font-mono text-sm p-3">
                                    Total Applications
                                </TableCell>
                                <TableCell className="font-semibold text-right text-sm font-mono p-3">
                                    {applications.length}
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </div>

    )
}


