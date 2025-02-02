
"use client";
export const ApplicationPage = () => {
    return (
        <div className="bg-gradient-to-br from-violet-500 to-pink-500 min-h-screen">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Your other content goes here */}
        </main>
      {/* Bottom white rectangle */}
      <div className="bg-white w-[85%] h-[45%] flex justify-center items-center absolute bottom-8 left-1/2 transform -translate-x-1/2 rounded-xl shadow-lg">        {/* Clickable horizontal rectangles inside */}
          <div className="space-y-4">
          <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 1
    </div>
    <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 2
    </div>
    <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 3
    </div>
    <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 4
    </div>
          </div>
        </div>
      </div>
    );
};

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

      const [open, setOpen] = useState(false);
      const [company, setCompany] = useState("");
      const [position, setPosition] = useState("");

    const handleStatusChange = (id, newStatus) => {
        setApplications((prev) =>
          prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
        );
      };

      const handleSubmit = () => {
        if (company && position) {
          setApplications((prevApps) => {
            const newId = `APP${(prevApps.length + 1).toString().padStart(3, "0")}`;
            return [...prevApps, { id: newId, company, position, status: "Submitted" }];
          });
      
          setCompany("");
          setPosition("");
          setOpen(false);
        }
      };
      

  return (

    <div className="flex flex-col h-screen">
    {/* Content above the table (optional, can be empty if you just want the table at the bottom) */}
    <div className="flex-1 bg-gradient-to-br from-violet-500 to-blue-500 p-8">
    <div className="text-center mt-0">
    <h1 className="text-5xl font-mono font-bold">You're Cooked</h1>
    </div>
    <div className="absolute top-0 right-12 mt-4 mr-4 text-xl font-mono font-semibold">
    Username
    </div>
    <div className="bg-white w-[44%] h-[35%] flex justify-center items-center absolute top-24 right-14 transform rounded-xl shadow-lg">
    </div>
    <div className="bg-white w-[44%] h-[35%] flex justify-center items-center absolute top-24 left-14 transform rounded-xl shadow-lg">
    </div>

    {/* Table placed in the bottom half */}
    <div className="bg-white w-[90%] h-[70%%] flex justify-center items-center p-4 absolute bottom-8 left-1/2 transform -translate-x-1/2 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold font-mono mb-4 mr-4 text-center">Applications</h2>
    <Table>
      <TableCaption className="font-semibold font-mono text-violet-500">A list of your recent job applications.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl font-bold font-mono text-violet-500">Company</TableHead>
          <TableHead className="text-xl font-bold font-mono text-violet-500">Position</TableHead>
         <TableHead className="text-xl font-bold font-mono text-violet-500">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell className="font-mono font-semibold">{application.company}</TableCell>
            <TableCell className="font-mono font-medium">{application.position}</TableCell>
            {/*<TableCell>{application.status}</TableCell>*/}
            <TableCell>
                  <select
                    value={application.status}
                    onChange={(e) => handleStatusChange(application.id, e.target.value)}
                    className="border rounded-md p-1 bg-violet-200"
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
          <TableCell colSpan={2} className=" font-bold font-mono">Total Applications</TableCell>
          <TableCell className=" font-semibold text-right">{applications.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  </div>
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

import { Button } from "@/components/ui/button"


import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ButtonDemo() {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [applications, setApplications] = useState([]); // Stores submitted applications

  const handleSubmit = () => {
    if (company && position) {
      setApplications([...applications, { company, position }]);
      setCompany("");
      setPosition("");
      setOpen(false);
    }
};

//   const handleSubmit = () => {
//     console.log("Company:", company);
//     console.log("Position:", position);
//     setOpen(false);
//   };

  return (
    <div className="relative">
      <Button className="absolute font-semibold font-mono top-4 left-4">
        Back
      </Button>

      {/* Plus Button to Open Modal */}
      <Button className="absolute top-12 right-16 w-10 h-10 text-3xl" onClick={() => setOpen(true)}>
        +
      </Button>

      <Button className="absolute top-12 right-28 w-10 h-10 text-3xl">
        -
      </Button>

      {/* Dialog (Pop-up Form) */}
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


// export function ButtonDemo() {
//     return (
//       <div className="relative">
//         <Button className="absolute font-semibold font-mono top-4 left-4">
//           Back
//         </Button>

//         <Button className="absolute top-12 right-16 w-10 h-10 text-3xl">
//         +
//       </Button>

//       <Button className="absolute top-12 right-28 w-10 h-10 text-3xl">
//         -
//       </Button>
//       </div>
//     );
//   }
