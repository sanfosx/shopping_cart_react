import React from 'react'
import ColumnLeft from '../util/structure/ColumnLeft'
import ColumnRight from '../util/structure/ColumnRight'
import ContentMain from '../util/structure/ContentMain'
import Hero from './Hero'
import styled from 'styled-components'
import { useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Alerts from '../util/Alerts'

const Login = () => {

  const inicialStateValues = {
    userEmail: '',
    userPassword: ''
};
const navigate = useNavigate()
const [user, setUser] = useState(inicialStateValues);
const [error, setError] = useState();
const { login, loginWithGoogle, userLoged, addUserInFirestore } = useAuth();
const [stateDialog1, changeStateDialog1] = useState(false);

const handleSubmit = async (e) => { // maneja el btn login
    e.preventDefault();
    //tengo que validar que tiene todo lo q necesita primero @valid_form(values)
    try {
        await login(user.userEmail, user.userPassword);  //loguea
        navigate('/')
        console.log('usuario logeado', userLoged)

    } catch (error) {
        setError(error.message)
        console.log(error.message)
    }
    setUser({ ...inicialStateValues })
};


const handleInputChange = e => {// maneja los cambios de los inputs
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    console.log(name, value)
}

const handleGoogleSigIn = async () => {
    try {
        await loginWithGoogle()

        navigate('/')
        console.log("goooooogle", userLoged.uid)
        
        console.log("goooooogle", userLoged.displayName)
        
    } catch (error) {
        setError(error.message)
        console.log(error.message)
    }
}




  return (
    <ContentMain>
      <ColumnLeft>
        <Hero login={true} />
      </ColumnLeft>

      <ColumnRight social={false}>
        <DivContent className=' container-fluid d-flex align-items-center justify-content-center'>
          <DivLogin>
            <form className="card color-bg card-body" onSubmit={handleSubmit}>
              <div>
                <h1 className="text-center display-1 orange">Login</h1>
                {error && <Alerts message={error} />}
              </div>
              <div className="form-group input-group p-3">
                <div className="input-group-text bg-light ">
                  <i className="material-icons">email</i>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="your email"
                  name="userEmail"
                  onChange={handleInputChange}
                  value={user.userEmail}
                />
              </div>
              <div className="form-group input-group p-3">
                <div className="input-group-text bg-light">
                  <i className="material-icons">lock</i>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="your password"
                  name="userPassword"
                  onChange={handleInputChange}
                  value={user.userPassword}
                />
              </div>
              <p className='text-end '><a href="" className='col-white'>Olvidaste tu password?</a> </p>
              <button className="btn btn-success btn-block m-3" onClick={handleSubmit}>login</button>
              <p></p>
              <p className='text-center col-white'>No tienes una cuenta? Registrate <strong className='orange' onClick={() => changeStateDialog1(!stateDialog1)}>Aqui</strong></p>
              <p className='text-center col-white'>ó</p>
              <div className="form-group input-group p-3 justify-content-center " onClick={handleGoogleSigIn}>
                <div className="input-group-text bg-light col-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                <div className="btn col-black me-2 col-shadow ">
                  <p className="text-center pt-3"><b>Sign in with google</b></p>
                </div>
              </div>
            </form>
          </DivLogin>
        </DivContent>

      </ColumnRight>
    </ContentMain>
  )
}

export default Login

const DivLogin = styled.div`
    width: 65vh;
    .color-bg{
        background-color:#000000f5;
    }
    .strong{
        color:white;
    }
    .col-black{
        background-color:black;
        color:white;
    }
   
    
    .col-white{
        color:white;
        &:hover{
            color:#fc4b08;
            cursor:pointer;
        }
    }
    .col-shadow{
      
      box-shadow:rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    }
    .orange{
        color:#fc4b08;
        &:hover{
            cursor:pointer;
        }
    }
`;

export const DivContent = styled.div`
    
    background-size:auto;
    height:100%;
`;