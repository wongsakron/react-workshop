import './Form_Component.css'
import { useState } from 'react'



const Form_Component = () => {
const [username,setUserName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassWord] = useState('')
const [repassword,setRePassWord] = useState('')

const [errorusername,setErrorUserName] = useState('')
const [erroremail,setErrorEmail] = useState('')
const [errorpassword,setErrorPassWord] = useState('')
const [errorrepassword,setErrorRePassWord] = useState('')

const [usernamecolor,setuserNameColor] = useState('')
const [emailcolor,setuserEmailColor] = useState('')
const [passwordcolor,setuserPassWordColor] = useState('')
const [repasswordcolor,setRePassWordColor] = useState('')



const validateForm = (e)=>{
  e.preventDefault()
  if(username.length>8){
    setErrorUserName('')
    setuserNameColor('green')
  }
  else{
    setErrorUserName('กรุณาป้อนชื่อผู้ใช้อย่างน้อย 8 ตัวอักษร')
    setuserNameColor('red')
  }

  if(email.includes("@")){
    setErrorEmail('')
    setuserEmailColor('green')
  }
  else{
    setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง")
    setuserEmailColor('red')
  }

  if(password.length>8){
    setErrorPassWord('')
    setuserPassWordColor('green')
  }
  else{
    setErrorPassWord('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร')
    setuserPassWordColor('red')
  }

  if(repassword !== "" && repassword === password){
    setErrorRePassWord('')
    setRePassWordColor('green')
  }
  else{
    setErrorRePassWord('รหัสผ่านไม่ตรงกัน')
    setRePassWordColor('red')
  }
}

  return (
    <div className="container" onSubmit={validateForm}>
      <form className="form">
        <h2>แบบฟอร์มลงทะเบียน</h2>
        <div className="form-control">
            <label>ชื่อผู้ใช้</label>
            <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:usernamecolor}}/>
            <small style={{color:usernamecolor}}>{errorusername}</small>
        </div>
        <div className="form-control">
            <label>อีเมล</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailcolor}}/>
            <small style={{color:emailcolor}}>{erroremail}</small>
        </div>
        <div className="form-control">
            <label>รหัสผ่าน</label>
            <input type="password" value={password} onChange={(e)=>setPassWord(e.target.value)} style={{borderColor:passwordcolor}}/>
            <small style={{color:passwordcolor}}>{errorpassword}</small>
        </div>
        <div className="form-control">
            <label>ยืนยันรหัสผ่าน</label>
            <input type="password" value={repassword} onChange={(e)=>setRePassWord(e.target.value)} style={{borderColor:repasswordcolor}}/>
            <small style={{color:repasswordcolor}}>{errorrepassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  )
}

export default Form_Component;
