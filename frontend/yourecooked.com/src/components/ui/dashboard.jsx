import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { ScrollableBox } from "@/components/ui/leaderboard"
export const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-violet-500 to-pink-500 min-h-screen"> 
        <div className="absolute bottom-10 w-screen border-color: to-black">
            <ScrollableBox />
        </div>
    </div>
  );
};
