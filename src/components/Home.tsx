import { gql, useQuery } from "@apollo/client";
import { MyContext } from "./MyContext";
import Card from "./Card";
import { Link } from "react-router-dom";



export default function Home() {


  const { select } = MyContext();
  console.log(select);

  const GET_PRODUCT = gql`
query Product{
  products{
      product_id
      product_name
      price
      measurement
      quantity
      img
  }
}
`;


  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables:{
      id: select
    }
  });
  console.log(data);
console.log(error);


  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className="mt-36 mb-12 container">
                <span><Link to={'/'} className=' opacity-50'>home / </Link></span>
      <Card {...data} />
    </div>
  )
}
