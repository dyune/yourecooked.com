import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { ScrollableBox, LeadName } from "@/components/ScrollableBox"
import { Playerpoint } from "./Playerpoint";
import { FriendActivity } from "./FriendActivity";

export const Dashboard = () => {
  return (
      <>
          <div className="">
              <Playerpoint/>
          </div>

          <div className="">
              <FriendActivity/>
          </div>
          <section className="flex flex-col gap-2">
              <div className="font-extrabold font-mono text-3xl">
                  <LeadName/>
              </div>
              <div className="w-screen border-color: to-black">
                  <ScrollableBox/>
              </div>
          </section>
      </>
  );
};
