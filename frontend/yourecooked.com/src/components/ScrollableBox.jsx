"use client";
import {useEffect, useState} from "react";
import ApiService from "@/app/APIs";
import {error} from "next/dist/build/output/log";

export const ScrollableBox = () => {

  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    async function getLeaderboard() {
      try {

        const response = await ApiService.getLeaderboard("/leaderboard/rankings");

        if (response.status === 200) {
          setLeaderboard(response.data);  // Assuming response.data holds the leaderboard data
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getLeaderboard();
  }, []);

    return (
      <div className="relative overflow-x-auto px-6 max-h-64 mx-auto">
        <table className="w-full max-w-4xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-lg">
            <tr>
              <th scope="col" className="px-6 py-3 text-3xl font-mono text-violet-500 rounded-tl-lg">UserName</th>
              <th scope="col" className="px-6 py-3 text-3xl font-mono text-violet-500 rounded-tr-lg">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
                <Box name={user.name} points={user.points} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export const LeadName = () => {
    return (
        <div className="flex justify-center items-center">
            <h1 className="text-center text-4xl font-bold">Pointage leaderboard</h1>
        </div>
    );
};



