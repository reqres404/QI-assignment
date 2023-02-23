
import "./styles.css"
import { useEffect,useState } from "react"

  
function UserTable() {
	const [users,setUsers] = useState({})
    const getUser=async()=>{
        fetch("http://localhost:4000/api/users")
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                setUsers(data)
            })

        // const response = await fetch("http://localhost:4000/api/users")
        // const user = await response.json()
        // setUsers(user)
        // console.log("useEffect")
    }
    useEffect(()=>{

		getUser()
		
	},[])
    console.log(users)

    return (
    <div className="table-container">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>D.O.B</th>
          <th>Email</th>
          

        </tr>
        </thead>
        <tbody>
        {users.length>0&&
        users.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName+" "+val.lastName}</td>
              <td>{val.dob}</td>
              <td>{val.email}</td>
            </tr>
          )
        })}
      </tbody>
      </table>
      
    </div>
  );
}
  
export default UserTable;