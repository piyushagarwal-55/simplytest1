// import { useLoaderData } from "react-router-dom";
// import { Card } from "./Card";

// export const ShowProducts = () => {
//   const data = useLoaderData();
//   console.log(data);

//   // Filter out products with missing or known-bad image URLs
//   const filteredData = data?.filter(
//     (product) =>
//       Array.isArray(product.images) &&
//       product.images[0] &&
//       !product.images[0].includes("placeimg.com")
//   );

//   return (
//     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {filteredData &&
//         filteredData.map((curr) => {
//           return <Card key={curr.id} curr={curr} />;
//         })}
//     </ul>
//   );
// };
