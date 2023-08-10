// const GET_POST = 'GET_POST';

// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// const postReducer = (state = [], action) => {
//   switch (action.type) {
//     case GET_POST:
//       // console.log(action.payload+"reducer");
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const getPost = (payload) => ({
//   type: GET_POST,
//   payload,
// });

// export async function fetchData(dispatch) {
//   // try {
//   const response = await fetch(BASE_URL);
//   const pdata = await response.json();
//   // console.log(pdata);
//   const postData = pdata.map((element) => ({
//     id: element.id,
//     name: element.title,
//     description: element.body,
//   }));
//   dispatch(getPost(postData));

//   // }catch (error) {
//   //       dispatch({ type: 'FETCH_FAILURE', payload: error.message });
//   //     }
// }
// export default postReducer;
