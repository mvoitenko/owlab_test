import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';

function RestrictedGuard({redirectTo, children}) {
    const isAuthorized = useSelector((state) => state.auth.value);

    if (isAuthorized) {
        return <Navigate to={redirectTo} replace />
    }

    return (
        <>{children}</>
    );
}

export default RestrictedGuard;