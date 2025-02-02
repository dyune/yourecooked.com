<<<<<<< HEAD
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { Dashboard } from "@/components/ui/dashboard";
export default function Home() {
  return (
    <div>
      <Dashboard />
=======
import {ApplicationPage} from "../components/ui/applications";
import {TableDemo} from "../components/ui/applications";
import {ButtonDemo} from "../components/ui/applications";


export default function Home() {
  return (
    <div>
      <ButtonDemo/>
      <TableDemo/>
>>>>>>> celine-branch
    </div>

  );
}

