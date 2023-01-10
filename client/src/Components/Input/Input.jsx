import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";

export default function Input({ item, action, register, data }) {
    // const { register } = useForm();

    const handleChange = (e) => {
        console.log(item.err, 'errr');
        const { name, value } = e.target
        action({
            ...data,
            [name]: value
        })
    }
    return (
        <div className={`pb-4 ${item.type == "checkbox" && 'd-flex justify-content-center'}`}>
            {
                item.type == "checkbox" ?
                    <>
                        <input {...register(item.name, item.condition)} value={item.value} onChange={handleChange} type={item.type} placeholder={item.label} id={item.name} name={item.name} className={`rounded-pill b-main-color bg-transparent p-2 ps-3 fs-small text-light checkboxField`} />
                        <label htmlFor={item.name} className=''>{item.label} <span className='main-color '>Terms and Conditions</span></label>
                        {item.err && <p className='errmsg m-0 ps-3 '>{item.errMsg}</p>}
                    </> :
                    <>
                        <label htmlFor={item.name} id={item.name} className='fs-small ps-3 pb-2'>{item.label} *</label>
                        <input {...register(item.name, item.condition)} value={item.value} onChange={handleChange} type={item.type} placeholder={item.label} name={item.name} className={`rounded-pill b-main-color bg-transparent p-2 ps-3 fs-small text-light w-100`} />
                        {item.err && <p className='errmsg m-0 ps-3'>{item.errMsg}</p>}
                    </>
            }

        </div>
    )
}
