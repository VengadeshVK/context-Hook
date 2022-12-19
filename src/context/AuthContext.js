import React,{createContext,useState} from "react";

export const AuthContext = createContext();

// class AuthContextProvider extends React.Component{
//     state={
//             isLoggedIn : true
//     }

//     changeAuth=()=>{
//         this.setState({isLoggedIn : !this.state.isLoggedIn});
//     }

//     render(){
//         return(
//             <AuthContext.Provider value={{...this.state,changeAuth:this.changeAuth}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

const AuthContextProvider = (props)=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const changeAuth=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <AuthContext.Provider value={{isLoggedIn,changeAuth:changeAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;