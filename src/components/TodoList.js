import React,{ useContext } from "react";
import {ThemeContext} from '../context/ThemeContext'
import themeIcon from '../darkTheme.png';


// class TodoList extends React.Component{

//     static contextType = ThemeContext

//     render(){

//         const {isDarkTheme ,darkTheme,lightTheme,changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme ;

//         return(
//             <>
//             <div className="ui list" style={{color:theme.text , background : theme.background}} >
//                 <p className="item">Need to buy book</p>
//                 <p className="item">Prepare for interview</p>
//                 <p className="item">Plan a tour</p>
//             </div>
//             <div>
//                 <button onClick={changeTheme } ><img src={themeIcon} alt='icon' width="50" height="50" /></button>
//                 <p>Click here to change the theme</p>
//             </div>
//             </>
//         )
//     }
// }

const TodoList = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div className="ui list" style={{color:theme.text , background : theme.background}} >
            <p className="item">Need to buy book</p>
            <p className="item">Prepare for interview</p>
            <p className="item">Plan a tour</p>
            <button onClick={changeTheme} ><img src={themeIcon} alt='icon' width="50" height="50" /></button>
            <p>Click here to change the theme</p>
        </div >
    )
}

export default TodoList;