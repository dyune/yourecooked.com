export default function Box({name, points}) {
    return <div>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium font-mono text-gray-900 whitespace-nowrap dark:text-white">{name}</th>
            <td className="px-6 py-4">{points}</td>
        </tr>
    </div>
}