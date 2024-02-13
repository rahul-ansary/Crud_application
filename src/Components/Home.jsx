import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Slices/userSlice";

function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}));
    }


    return (
        <div className="m-10">
            <h2 className="font-bold text-lg mb-4">Crud app with JSON server</h2>
            <button className=" mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><Link to="/create">Create +</Link></button>
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th className="w-1/4 px-4 py-2">ID</th>
                        <th className="w-1/4 px-4 py-2">Name</th>
                        <th className="w-1/4 px-4 py-2">Email</th>
                        <th className="w-1/4 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to={`/edit/${user.id}`}>Edit</Link></button>
                                <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >Delete</button>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>




        </div>
    )

}
export default Home;