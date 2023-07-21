import {Link, useRouteError} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Упс!</h1>
            <p>Вы зашли куда-то не туда.</p>
            <Link to={'/'}>Вернитесь на главную, пожалуйста</Link>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;