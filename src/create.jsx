import React from "react";
import axios from "axios"
import "./CSS/pageCreate.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateUser() {
const [nama, setnama] = useState()
const [kelas, setkelas] = useState()
const [npm, setnpm] = useState()
const navigate = useNavigate()
const Submit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/createUser", {nama,kelas,npm})
    .then(result => {
        console.log(result)
        navigate("/")
    })
    .catch(err => console.log(err))
}
    return (
        <div className="outside">

            <div className="inside" >

                <form onSubmit={Submit}>
                <h1>ini adalah halaman create User</h1>
                    <div className="mb-2">
                        <label htmlFor="Nama">Nama</label>
                        <input type="text" placeholder="masukkan nama" className="form-control"  onChange={(e)=>setnama(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Kelas</label>
                        <input type="text" placeholder="masukkan nama" className="form-control" onChange={(e)=> setkelas(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">NPM</label>
                        <input type="text" placeholder="masukkan nama" className="form-control" onChange={(e)=>setnpm(e.target.value)}/>
                    </div>

                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser