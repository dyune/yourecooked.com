import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { ScrollableBox, LeadName } from "@/components/ui/leaderboard"
import { PlayerPoint } from "./playerpoint";
import { Friendboard } from "./FriendActivity";

export const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-violet-500 to-blue-500 min-h-screen"> 
        <div className="absolute bottom-10 w-screen border-color: to-black">
            <ScrollableBox />
        </div>
        <div className="absolute flex justify-end w-screen top-64 py-10">
          <PlayerPoint />
        </div>
        <div className="absolute flex justify-center items-center h-screen w-screen flex-row left-40 top-6 border-spacing-3">
          <Button variant="outline">Application Menu</Button>
        </div>
        <div className="absolute flex justify-end h-screen w-screen px-20 py-8">
          <Button variant="outline">Back</Button>
        </div>
        <div className="px-20 py-8">
              <Friendboard />
            </div>
        <div className="px-20 top-4 font-extrabold font-mono text-3xl">
          <LeadName />
        </div>
    </div>
  );
};
