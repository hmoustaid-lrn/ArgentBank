import { Navigate, Outlet } from 'react-router-dom'

import { useSelector} from 'react-redux'

const PrivateRoutes = () => {
    const isUserAuthenticated = useSelector((state) => state.login.token)

return (
    isUserAuthenticated ? <Outlet/> : <Navigate to='/error'/>
  )
}

export default PrivateRoutes