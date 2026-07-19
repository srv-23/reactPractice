import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Protected({
    children,
    authentication=true
}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        // easy way
        // if(authStatus === true){
        //     navigate("/")
        // }else if(authStatus === false){
        //     navigate("/login")
        // }

        // let authStatus = authStatus === true ? true : false


        if(authentication && authStatus !== authentication) {
            navigate("/login")
        }else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoader(false)
    },[authStatus,navigate,authentication])

  return loader ? <h1>Loading... </h1> : <>{children}</>
}
