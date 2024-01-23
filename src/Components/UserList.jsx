import axios  from 'axios'
import { useEffect, useState} from 'react';


function UserList() {
    const [listOfUser, setlistOfUser] = useState([]);

    useEffect(()=>{
        const fetchData=async()=>{const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        setlistOfUser(response.data)
    }
        
        fetchData()
    },[])

  return (
    <div className="flex flex-col px-4 bg-sky-500/75 h-screen">
      <table className="table-auto text-start h-4/6">
      <caption className="caption-top text-lg text-center font-bold">
    User List.
  </caption>
  <thead className="text-start bg-slate-800 px-5 py-2 text-gray-200">
    <tr className="text-start px-5 py-2 ">
      <th className="text-start ">Name</th>
      <th className="text-start">Username</th>
      <th className="text-start">Email</th>
      <th className="text-start">Telephone</th>
      <th className="text-start">Address</th>

    </tr>
  </thead>
  <tbody className='bg-slate-500 border-solid text-slate-950'>
    {
        listOfUser?.map((user)=> (
<tr key={user.id}>
      <td >{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.street}, {user.address.city}</td>
    </tr>
        ))
    }
    
   
  </tbody>
</table>
    </div>
  )
}

export default UserList