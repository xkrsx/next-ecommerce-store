// export default function Admin() {
//   async function addNewProduct() {
//     const [newProduct, setNewProduct] = useState({
//       name: '',
//       category: '',
//       description: '',
//       price: null,
//       count: null,
//     });

//     const response = await fetch('http://localhost:3000/products/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newProduct),
//     });
//     const createdProduct = await response.json();
//     if (newProduct.name === '') {
//       return;
//     }
//     setNewProduct([createdProduct]);
//   }

//   function handleChange(event) {
//     const value = event.target.value;

//     onChange({
//       ...newProduct,
//       [event.target.name]: value,
//     });
//   }

//   return (
//     <>
//       <h1>Admin</h1>
//       <div>
//         <h2>Add new product:</h2>
//         <div>
//           <form onSubmit={(event) => event.preventDefault()}>
//             <label>
//               Name:
//               <input
//                 required
//                 name="name"
//                 value={newProduct.name}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Category:
//               <input
//                 required
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Description:
//               <input
//                 required
//                 name="description"
//                 value={newProduct.description}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Price:
//               <input
//                 required
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleChange}
//                 type="number"
//               />
//             </label>
//             <label>
//               Count:
//               <input
//                 required
//                 name="count"
//                 value={newProduct.count}
//                 onChange={handleChange}
//                 type="number"
//               />
//             </label>
//             <button
//               onClick={() => {
//                 addNewProduct().catch((error) => console.log(error));
//               }}
//             >
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
