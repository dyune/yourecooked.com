"use client"
import { useEffect, useState } from "react";
import ApiService from "@/app/APIs";

function Box(name, score) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</th>
            <td className="px-6 py-4">{score}</td>
        </tr>
    );
}

export const ScrollableBox = () => {
    const [boxData, setBoxData] = useState([]);  // Declare state to store leaderboard data

    // Fetch data asynchronously inside useEffect
    async function getBoxData() {
        try {
            const response = await ApiService.getLeaderboard("/api/leaderboard");
            if (response.status === 200) {
                setBoxData(response.data);  // Update state with the fetched data
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect runs once on mount, fetching data
    useEffect(() => {
        getBoxData();
    }, []);  // Empty dependency array ensures the effect runs only once

    return (
        <div className="relative overflow-x-auto px-20 max-h-64">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">UserName</th>
                    <th scope="col" className="px-6 py-3">Points</th>
                </tr>
                </thead>
                <tbody>
                {boxData.map((box, index) => Box(box.name, box.score))}  {/* Map over boxData to render rows */}
                </tbody>
            </table>
        </div>
    );
};

export const LeadName = () => {
    return (
        <div>
            <h1>Pointage leaderboard</h1>
        </div>
    );
};
