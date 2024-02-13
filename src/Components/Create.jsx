import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";


function Create() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const users = useSelector((state) => state.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({
            id: users[users.length - 1].id + 1 , 
            name, 
            email
        }))
        navigate('/')
    }

    return (
        <div className="mt-10 flex justify-center items-center w-full">
            <div className="bg-slate-400 rounded px-20 pt-6 pb-8 mb-4">
                <h1 className="text-slate-700 text-lg font-bold mb-4">Add New User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter name..."
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-slate-700 text-sm font-bold mb-2" htmlFor="name">
                            Email:
                        </label>
                        <input
                            className="mb-6 shadow appearance-none border rounded w-96 py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            name="email"
                            placeholder="enter email..."
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button 
                    className="bg-white hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-white-500 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Create;