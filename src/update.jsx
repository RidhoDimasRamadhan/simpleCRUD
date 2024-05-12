import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

function update(){
const {id} = useParams()
const [nama, setNama] =useState()
const [kelas, setKelas] =useState()
const [npm, setNpm] =useState()
const navigate = useNavigate()

useEffect(()=>{
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result =>{console.log(result)
        setNama(result.data.nama)
        setKelas(result.data.kelas)
        setNpm(result.data.npm)
    })
    .catch(err => console.log(err))
},[])

const Update =(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3001/update/"+id,{nama,kelas,npm})
    .then(result =>{console.log(result)
        navigate("/")
    })
    .catch(err => console.log(err))
}




return(
    <div className="update">
        <div className="outside">

<div className="inside" >

    <form onSubmit={Update}>
    <h1>ini adalah halaman Update User</h1>
        <div className="mb-2">
            <label htmlFor="Nama">Nama</label>
            <input type="text" placeholder="masukkan Nama" value={nama} className="form-control"  onChange={(e)=> setNama(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label htmlFor="">Kelas</label>
            <input type="text" placeholder="masukkan Kelas" value={kelas} className="form-control" onChange={(e)=>setKelas(e.target.value)}/>
        </div>
        <div className="mb-2">
            <label htmlFor="">NPM</label>
            <input type="text" placeholder="masukkan Npm" value={npm} className="form-control" onChange={(e)=> setNpm(e.target.value)}/>
        </div>

        <button className="btn btn-primary">Update</button>
    </form>
</div>
</div>
    </div>
)

}

export default update