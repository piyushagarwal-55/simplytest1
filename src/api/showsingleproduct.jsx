// // ✅ Correct loader format
// export const showsingleproduct = async ({ params }) => {
//   const { id } = params;

//   try {
//     const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

//     if (!res.ok) {
//       throw new Error(`Could not fetch product with ID ${id}`);
//     }

//     const data = await res.json();
//     return data; 
//   } catch (error) {
//     console.log(error);
//     throw error; 
//   }
// };
