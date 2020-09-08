import Layout from "../components/Layout";

const ErrorPages = ({statusCode}) => (
<Layout title="Error!">
    <div className="errorpage">
        { statusCode? `Could not load user data: Status code ${statusCode}`
        : `Jonah on the belly of the fish!  Oops!` }
       
    </div>
</Layout>
);



export default ErrorPages;