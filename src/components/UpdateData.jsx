// import React, { useEffect } from "react";

// const UpdateBook = () => {
//   useEffect(() => {
//     const updateBook = async () => {
//       try {
//         const response = await fetch(
//           "https://library-project-6agw.onrender.com/get_books/678b960e9343b32ed1b09faf",
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               description: "Bu kitob juda qiziqarli!",
//               author: "Alisher Navoiy",
//             }),
//           },
//         );

//         const data = await response.json();
//         console.log("Kitob yangilandi:", data);
//       } catch (err) {
//         console.error("Xatolik:", err);
//       }
//     };

//     updateBook();
//   }, []); // Komponent birinchi marta yuklanganda chaqiriladi

//   return (
//     <div>
//       <h1>Kitob yangilandi</h1>
//     </div>
//   );
// };

// export default UpdateBook;
