import React from 'react'
import s from "./Modal.module.scss"


function Modal({active, setActive}) {
console.log(active);
  return (
    <div className={active ?  `${s.modal} ${s.active}` : s.modal}>
        <div className={s.modal_content}>
           <input  className={s.add_folder} type="text" placeholder='Create new folder'/>
           <input className={s.add_tag} type="text" placeholder='Add tag'/>
           <div className={s.buttons}>
               <button className={s.buttonAdd}>Add</button>
               <button  onClick={()=>setActive(!active)} className={s.buttonCancel}>Cancel</button>
               <svg className={s.colorIcon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path height="25" width="25" xmlns="http://www.w3.org/2000/svg" d="M23.305,16.25a1.888,1.888,0,0,1-1.377,1.177,1.912,1.912,0,0,1-1.769-.521l-.1-.1a3.567,3.567,0,0,0-6.089,2.553l.04,4.516-.924.077c-.331.028-.663.05-1,.05A12,12,0,0,1,3.745,3.371,11.885,11.885,0,0,1,12.5.007,12.155,12.155,0,0,1,24.08,11.7,11.924,11.924,0,0,1,23.305,16.25Zm-6.19-8.2A1.5,1.5,0,1,0,18.95,9.115,1.5,1.5,0,0,0,17.115,8.05Zm-5-3A1.5,1.5,0,1,0,13.95,6.115,1.5,1.5,0,0,0,12.115,5.05Zm-5,3A1.5,1.5,0,1,0,8.95,9.115,1.5,1.5,0,0,0,7.115,8.05Zm0,6A1.5,1.5,0,1,0,8.95,15.115,1.5,1.5,0,0,0,7.115,14.05Z" fill="#fff" data-original="#000000"/></svg>
           </div>
           
        </div>
    </div>
  )
}

export default Modal