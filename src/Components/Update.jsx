import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Slices/userSlice";
import { useNavigate, useParams } from "react-router-dom";


function Update(){


    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [updateName, setUpdateName] = useState(name);
    const [updateEmail, setUpdateEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: updateName,
            email: updateEmail
        }))
        navigate('/')
    }



return(
    <div className="mt-10 flex justify-center items-center w-full">
        <div className="bg-slate-400 rounded px-20 pt-6 pb-8 mb-4">
            <h1 className="text-slate-700 text-xl font-bold mb-4">Update New User</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="shadow appearance-none border rounded w-96 py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter name..."
                        value={updateName}
                        onChange={e => setUpdateName(e.target.value)}
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
                        value={updateEmail}
                        onChange={e => setUpdateEmail(e.target.value)}

                    />
                </div>
                <button
                    className="bg-white hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-white-500 rounded">
                    Update
                </button>
            </form>
        </div>
    </div>
)
}
export default Update;