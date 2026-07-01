import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] =useState({
        StudentId:"",
        BusNumber:"",
        Password:""
    });

    const changeEventHandler = (e)=>{
        setInput({...input, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/map');
    }
  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center max-w-5xl mx-auto'>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                <h1 className='font-bold text-xl mb-5'>where is my child</h1>
                <div className='my-2'>
                    <Label>Student Id</Label>
                    <Input name="StudentId" type="text" value={input.StudentId} onChange={changeEventHandler} placeholder="Enter Student Id"/>
                </div>
                <div className='my-2'>
                    <Label>Bus Number</Label>
                    <Input name="BusNumber" type="text" value={input.BusNumber} onChange={changeEventHandler} placeholder="Enter Bus number"/>
                </div>
                <div className='my-2'>
                    <Label>Password</Label>
                    <Input name="Password" type="password" value={input.Password} onChange={changeEventHandler} placeholder="Enter password"/>
                </div>
                <Button type="submit" className="w-full my-4">Track</Button>
            </form>
        </div>
    </div>
  )
}

export default Login
