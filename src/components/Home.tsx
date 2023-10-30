import { gql, useQuery } from "@apollo/client";
import { MyContext } from "./MyContext";
import Card from "./Card";



export default function Home() {

  const { select } = MyContext();
  console.log(select);

  const GET_PRODUCT = gql`
query Product($id:ID!){
  category(category_id:$id){
    category_id
    category_name
    products{
      product_id
      product_name
  }
  }
}
`;


  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables:{
      id: select
    }
  });
  // console.log(data);
console.log(error);
// console.log(loading);



  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className=" mt-64">
      <h5>home</h5>
      <Card {...data} />
    </div>
  )
}
