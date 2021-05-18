import React,{useEffect,useState,useContext} from 'react'
// import { Searchbar } from 'react-native-paper';
import {Nav,NavBtn,NavBtnlink,NavLink,NavMenu} from './NavElements'

// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
import Search from '../Search/Search';
import DatePicker from '../DatePicker/DatePicker';
import {AppContext} from '../../Context/ResponseContext';
import Content from '../Content/Content'

const NavBar = () => {
    const resdat = useContext(AppContext);
    const [valid, setvalid] = useState(false);
    const [searchQuery, setSearchQuery] = React.useState();
    const [main, setmain] = useState('')
    const [name, setname] = useState('')
    const [wind, setwind] = useState('')
    const [weather, setweather] = useState('')
    const [code, setcode] = useState('')
    const onChange = (e)=>{
        setSearchQuery(e.target.value);
        console.log(searchQuery)
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [resdata, setresdata] = useState('')
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    

    const submitHandler = async (e) =>{
        e.preventDefault();
        console.log("submit")
        const fetchdata = async () =>{
        try{
            console.log("Inside Fecth")
            const responseData = await fetch(
              `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=b4bc62700aeb0a84828529bfd33126b9`,
            );
    
            const data = await responseData.json();
            setresdata(data);
            setmain(data.main);
            setweather(data.weather[0]);
            setwind(data.wind);
            setname(data.name);
            setcode(data.code);
            // resdat.changeRes(data)
            
            //setoriginaldata(data.bloodbanks);
          } catch (err){
            console.log(err);
          }
        }
        fetchdata();
        setvalid(true)
        console.log(resdat.res)
    }

    
    // const submitHandler = async (e) =>{
    //     e.preventDefault();
    //     console.log("Funck yaa")
    //     setresdata("Funck yaa")
    // }
    

    

    useEffect(() => {
        console.log(resdata);
    }, [resdata])

    return (
        <React.Fragment>
        <Nav>
            <NavLink to='/about'>
                <NavMenu>
                    <img style={{width:"70px"}} src="data:image/jpeg;base64,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" alt='logo' ></img>   
                    <h1>Weather App</h1>             
                </NavMenu>
            </NavLink>
            <NavMenu>
                <NavLink to='/Market' activeStyle></NavLink>
                <NavLink to='/Portfolio' activeStyle></NavLink>
                <NavLink to='/Withdraw' activeStyle></NavLink>
                <NavLink to='/about' activeStyle>About</NavLink>
                <NavLink to='/contact' activeStyle>Contact</NavLink>

            </NavMenu>
            <form onSubmit={submitHandler}>
                <NavMenu>
                    <DatePicker onChange={handleDateChange} value={selectedDate}/>
                    <Search onChange={onChange} value={searchQuery}/>
                    <NavBtn>
                        <NavBtnlink type="submit" >Search</NavBtnlink>
                    </NavBtn>
                </NavMenu>

            </form>
        </Nav>
        <Content res={resdata} code={code} name={name} weather={weather} wind={wind} main={main} valid={valid}/>
        </React.Fragment>
    )
}

export default NavBar;
