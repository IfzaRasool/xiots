import Head from 'next/head';
import Hero from './home';
import OurService from '../components/ourservice';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../redux/Posts/postdata';
import { fetchData } from '../redux/actions';

// import store from '../redux/store';

export default function Home() {
  const dispatch = useDispatch();
  fetchData(dispatch);
  return (
    <div>
      <Head>
        <title>Demo Test Ifza</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full'>
        <Hero />
        <OurService />
      </main>
    </div>
  );
}
// pages/index.js

// import { fetchData } from '../redux/actions';

// const Home = () => {
//   // const postStore = useSelector((state) => state.postReducer);
//   const dispatch = useDispatch();
//   fetchData(dispatch);

//   const data = useSelector((state) => state.data);
//   console.log(data)

//   // const error = useSelector((state) => state.data.error);

//   // const handleFetchData = () => {
//   //   // console.log(data)

//   //   const postData = {
//   //     // Your POST data here
//   //   };
//   //   dispatch(fetchData(postData));
//   // };

//   return (
//     <div>
//               {/* {data.map((e) => (
//                 <><div>{e.id}</div><div>{e.name}</div></>
//         ))} */}
//       {/* <button onClick={handleFetchData}>Fetch Data</button>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       {error && <p>Error: {error}</p>} */}
//     </div>
//   );
// };

// export default Home;
