import Layout from "../components/Layout";
import { withRouter } from 'next/router'



const Post =  ({ router }) => (
  <Layout title={ router.query.title }>
    <p style= {{ width: "80vw"}} >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat a qui
      ipsa nam placeat corporis, quas maiores vero eius quisquam praesentium
      modi voluptas illum vitae aspernatur perferendis, dolore officia. Enim.
    </p>
  </Layout>
);


export default withRouter(Post);