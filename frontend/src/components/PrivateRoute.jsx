import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute

