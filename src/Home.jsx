import React from "react";
import { useSelector } from "react-redux";

function Home() {
    const users = useSelector((state) => state.users)
    console.log(users)

    return (
        <div className="m-10">
            <h2 className="font-bold text-lg mb-4">Crud app with JSON server</h2>
            <button className=" mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Create +</button>
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th className="w-1/4 px-4 py-2">ID</th>
                        <th className="w-1/4 px-4 py-2">Name</th>
                        <th className="w-1/4 px-4 py-2">Sport</th>
                        <th className="w-1/4 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.sport}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
            
            


        </div>
    )

}
export default Home;