import { gql, useQuery } from "@apollo/client";
import { MyContext } from "./MyContext";



export default function Home() {

  const { select } = MyContext();
  console.log(select);

  const GET_PRODUCT = gql`
query Get_product($category_id:String){
  category(category_id:$category_id){
    category_id
    category_name
    products
  }
}
`;

    const { loading, error, data } = useQuery(GET_PRODUCT, {
      variables: { select }
    });
  console.log(data);


  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className="mt-36">
      <h2 className=" text-center">home</h2>
    </div>
  )
}
