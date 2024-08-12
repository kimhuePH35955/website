import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
  allowedRole: number;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRole }) => {
    const user = localStorage.getItem('user');
    const data = user ? JSON.parse(user) : {};

    const userRole = data?.user?.role ?? 0;

    if (userRole === allowedRole) {
        return <>{children}</>;
    }

    return <Navigate to='/login' />;
};

export default PrivateRoute;
