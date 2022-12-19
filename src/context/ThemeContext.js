import React,{createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{ 

    state={
        isDarkTheme : false,
        darkTheme :{
            text :' #FFFFFF',
            background :'#000000'
        },
        lightTheme :{
            text :'#000000',
            background:'#FFFFFF'
        }
    };
    changeTheme=()=>{
        this.setState({isDarkTheme:!this.state.isDarkTheme});
    }
    // changeDark=()=>{
    //     this.setState({isDarkTheme:true})
    // }
    // changeLight=()=>{
    //     this.setState({isDarkTheme:false})
    // }

    render(){
        return(
        <>
            
            <ThemeContext.Provider value ={{...this.state,changeTheme : this.changeTheme}} >
                {this.props.children}
            </ThemeContext.Provider>    
            {/* <div>
                <button onClick={this.state.isDarkTheme === true ? this.changeLight : this.changeDark } ><img src={themeIcon} alt='icon' width="50" height="50" /></button>
                <p>Click here to change the theme</p>
            </div> */}
        </>
        )
    }
}



export default ThemeContextProvider;