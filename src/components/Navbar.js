import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

// class Navbar extends React.Component{

//     // static contextType = ThemeContext;

//     render(){         
//         return(
//             <>
//             <AuthContext.Consumer>{(authContext)=>{
//                 return(
//                     <ThemeContext.Consumer>{(themecontext)=>{
//                         const {isDarkTheme ,darkTheme,lightTheme} = themecontext;
//                         const theme = isDarkTheme ? darkTheme : lightTheme ;
//                         const {isLoggedIn,changeAuth}=authContext;

//                         return(
//                             <div style={{color:theme.text , background : theme.background}}>
//                             <nav >
//                             <p onClick={changeAuth} >{isLoggedIn ? 'User Logged In' : 'User Logged Out'}</p>
//                             <h2 className="ui centered header" style={{color:theme.text , background : theme.background}} >TODO Task</h2>
//                             <div className="ui three button" >
//                             <button className="ui button">Overview</button>
//                             <button className="ui button">Contact</button>
//                             <button className="ui button">Support</button>
//                             </div>
//                             </nav>
//                             </div>
//                         )
//                     }}
//                     </ThemeContext.Consumer>
//                 )
//             }}
//             </AuthContext.Consumer>            
//             </>
//         )
//     }
// }

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext)
    const { isLoggedIn, changeAuth } = useContext(AuthContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div style={{ color: theme.text, background: theme.background }}>
            <nav >
                <p onClick={changeAuth} >{isLoggedIn ? 'User Logged In' : 'User Logged Out'}</p>
                <h2 className="ui centered header" style={{ color: theme.text, background: theme.background }} >TODO Task</h2>
                <div className="ui three button" >
                    <button className="ui button">Overview</button>
                    <button className="ui button">Contact</button>
                    <button className="ui button">Support</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;