import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { Dashboard } from "@/components/ui/dashboard";
import { LoginDemo } from "@/components/ui/login";
import { TableDemo } from "@/components/ui/applications";
import { ButtonDemo } from "@/components/ui/applications";
export default function Home() {
  return (
    <div>
      <LoginDemo/>
    </div>

  );
}

