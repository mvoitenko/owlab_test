import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';

function RouteGuard({redirectTo, children}) {

    const isAuthorized = useSelector((state) => state.auth.value);

    if (!isAuthorized) {
        return <Navigate to={redirectTo} replace />
    }

    return (
        <>{children}</>
    );
}

export default RouteGuard;