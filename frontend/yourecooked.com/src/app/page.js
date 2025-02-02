import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { Dashboard } from "@/components/ui/dashboard";
import { TableDemo } from "@/components/ui/applications";
import { ButtonDemo } from "@/components/ui/applications";
import { PlayerPoint } from "@/components/ui/playerpoint";
import { Friendboard } from "@/components/ui/FriendActivity";
export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>

  );
}

