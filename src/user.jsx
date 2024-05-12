import React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios"


function User(){
    const [dataSiswa, setData] = useState([])

    axios.get("http://localhost:3001")
    .then(result => setData(result.data))
    .catch(err => console.log(err))


    const hapus = (id)=>{
        axios.delete("http://localhost:3001/delete/"+id)
        .then(result =>{
            console.log(result)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
    return(
            <div className="home">
                <h1>ini adalah halaman user</h1>

                <table className="table">
                    <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Kelas</th>
                                <th>NPM</th>
                                <th></th>
                                <th></th>
                            </tr>
                    </thead>
                    <tbody>
                        {dataSiswa.map((identitas) =>{
                            return <tr>
                                <td>{identitas.nama}</td>
                                <td>{identitas.kelas}</td>
                                <td>{identitas.npm}</td>
                                <td><Link to={`/update/${identitas._id}`} className="btn btn-success">Update</Link></td>
                                <td><button className="btn btn-danger" onClick={(e)=>hapus(identitas._id)}>Delete</button></td>
                                
                            </tr>
                        })}
                    </tbody>
                </table>

                <table>

                </table>
                <Link to="/createUser" className="btn btn-primary">Create User</Link>
            </div>
    );
}

export default User;