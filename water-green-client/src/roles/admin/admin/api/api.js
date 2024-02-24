
//Burada aşağıda verilen components klasörü içindeki özelliklere göre api yazıcaz
//örneğin create için :


// const baseUrt=process.env.REACT_APP_BASE_URL;
// const API_BASE_URL = baseUrt+"/Admin/Category";

// export async function createCategory(data) {
//     const errorMessages = {};
//     try {
//       const response = await axios.post(`${API_BASE_URL}/Create`, data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${savedData[0]}`,
//         },
//       });
  
//       if (response.data.isSuccess) {
//         return {
//           data: response.data,
//           message: response.data.message,
//         };
//       }
//     } catch (error) {if (error.response?.data?.errors) {
//       const errorFields = Object.keys(error.response.data.errors);
//       errorFields.forEach((field) => {
//         errorMessages[field] = error.response.data.errors[field].join("\n");
//       });
//       throw {
//         errorMessages,
//       };
//     } 
//     else if(error.response?.data.message){
//       throw{
//         errorMessages: { message: error.response.data.message },
  
//       };
//     }
//     else {
//       throw {
//         errorMessages,
//         defaultMessage: "Kategori eklenemedi.",
//       };
//     }
//   }
//   }

//bir de get request alalım :
// export async function getCategoryById(id) {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/GetById?id=${id}`, {
//         headers: {
//           // "Content-Type": "application/json",
//           Authorization: `Bearer ${savedData[0]}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error("Kategori bilgileri alınamadı.");
//     }
//   }


export async function CreateAdmin() {


}

export async function ListAdmin() {


}

export async function UpdateAdmin() {


}