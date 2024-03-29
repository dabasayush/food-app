import { useRouteError } from "react-router-dom"

const ErrorElement = ()=> {
    const error = useRouteError();
    return(
        <>
            <h1>Oops!!!</h1>
            <h2>
                {error.status}: {error.statusText}
            </h2>
        </>
    )
}
export default ErrorElement