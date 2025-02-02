import { Button } from "@/components/ui/button";

// export const ScrollableBox = () => {
//   return (
//           <div className="relative overflow-x-auto px-20 max-h-64">
//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr>
//                         <th scope="col" className="px-6 py-3">UserName</th>
//                         <th scope="col" className="px-6 py-3">Points</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Tyler</th>
//                         <td className="px-6 py-4">19</td>
//                     </tr>
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
//                         <td className="px-6 py-4">20</td>
//                     </tr>
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
//                         <td className="px-6 py-4">30</td>
//                     </tr>
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
//                         <td className="px-6 py-4">30</td>
//                     </tr>
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
//                         <td className="px-6 py-4">30</td>
//                     </tr>
                    
//                 </tbody>
//             </table>
//           </div>
//   );
// };

export const ScrollableBox = () => {
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium font-mono text-gray-900 whitespace-nowrap dark:text-white">Tyler</th>
              <td className="px-6 py-4">19</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium font-mono text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
              <td className="px-6 py-4">20</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium font-mono text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
              <td className="px-6 py-4">30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium font-mono text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
              <td className="px-6 py-4">30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-b-lg">
              <th scope="row" className="px-6 py-4 font-medium font-mono text-gray-900 whitespace-nowrap dark:text-white">Tyler1</th>
              <td className="px-6 py-4">30</td>
            </tr>
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



