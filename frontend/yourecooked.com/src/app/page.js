
import {Dashboard} from "@/components/Dashboard";
import {Login} from "@/components/Login";
import {TableDemo} from "@/components/TableDemo";
import {ButtonDemo} from "@/components/ButtonDemo";

export default function Home() {
  return (
      <div className="p-10 flex flex-col gap-2">
          <div className="text-left mt-0 mb-4">
              <h1 className="text-5xl font-mono font-bold">You're Cooked</h1>
          </div>
          <TableDemo/>
      </div>

  );
}

