import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import trash from '../assets/trash-2.svg';
import edit from '../assets/edit.svg';
import Image from 'next/image';
import EditModal from './editModal';

const PostTable = () => {
  const postStore = useSelector((state) => state.data);

  const itemsPerPage = 4;
  const totalItems = postStore.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          <div className="w-10 mx-1 text-center text-white text-base font-normal leading-7 bg-yellow rounded-3xl h-10 px-4 pt-1 pb-1.">
            {i}
          </div>
        </button>
      );
    }

    if (totalPages > 3 && currentPage >= 3) {
      pageButtons.push(
        <button
          key="left-arrow"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <div className="w-10 mx-1 text-center text-white text-base font-normal leading-7 bg-neutral-900 rounded-3xl h-10 px-3 py-3">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M6.0625 10.0644L2.25 5.81444L6.0625 1.56444C6.1875 1.4186 6.25 1.25194 6.25 1.06444C6.25 0.856103 6.17708 0.668603 6.03125 0.501936C5.63542 0.231103 5.27083 0.251936 4.9375 0.564436L0.6875 5.28319C0.4375 5.61652 0.4375 5.94985 0.6875 6.28319L4.90625 11.0332C5.23958 11.3457 5.59375 11.3665 5.96875 11.0957C6.30208 10.7832 6.33333 10.4394 6.0625 10.0644ZM6.6875 5.28319C6.4375 5.61652 6.4375 5.94985 6.6875 6.28319L10.9062 11.0332C11.2396 11.3457 11.5938 11.3665 11.9688 11.0957C12.2812 10.7624 12.3021 10.4082 12.0312 10.0332L8.25 5.81444L12.0625 1.56444C12.1875 1.4186 12.25 1.25194 12.25 1.06444C12.25 0.856103 12.1771 0.668603 12.0312 0.501936C11.6562 0.231103 11.3021 0.251936 10.9688 0.564436L6.6875 5.28319Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      );

      pageButtons.push(
        <button key="ellipsis" disabled>
          <div>...</div>
        </button>
      );
      pageButtons.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
          <div className="w-10 mx-1 text-center text-white text-base font-normal leading-7 bg-neutral-900 rounded-3xl h-10 px-2 pt-1 pb-1">
            {totalPages}
          </div>
        </button>
      );
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <button
          key="right-arrow"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <div className="mx-1 text-center text-white text-base font-normal leading-7 bg-neutral-900 rounded-3xl h-10 px-3 py-3 w-10">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M6.68862 1.53319L10.5011 5.81444L6.68862 10.0644C6.56362 10.2103 6.50112 10.3769 6.50112 10.5644C6.50112 10.7728 6.57403 10.9603 6.71987 11.1269C7.09487 11.3978 7.44903 11.3769 7.78237 11.0644L12.0011 6.31444C12.2511 5.9811 12.2511 5.64777 12.0011 5.31444L7.78237 0.564436C7.46987 0.251936 7.1157 0.231103 6.71987 0.501936C6.4282 0.856103 6.41778 1.19985 6.68862 1.53319ZM6.06362 6.31444C6.31362 5.9811 6.31362 5.64777 6.06362 5.31444L1.81362 0.564436C1.48028 0.251936 1.12612 0.231103 0.751116 0.501936C0.438616 0.856103 0.417783 1.19985 0.688616 1.53319L4.50112 5.81444L0.688616 10.0644C0.563616 10.2103 0.501116 10.3769 0.501116 10.5644C0.501116 10.7728 0.574033 10.9603 0.719866 11.1269C1.09487 11.3978 1.44903 11.3769 1.78237 11.0644L6.06362 6.31444Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      );
    }

    return pageButtons;
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = postStore.slice(startIdx, startIdx + itemsPerPage);
  // end pagination

  // search
  const [search, setSearch] = useState('');
  const filteredPosts = currentItems.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  // edit
  const [editingPost, setEditingPost] = useState(null);

  const openEditModal = (post) => {
    setEditingPost(post);
  };

  const closeEditModal = () => {
    setEditingPost(null);
  };

  const saveEditedPost = (editedPost) => {
    // Find the index of the edited post
    const index = posts.findIndex((post) => post.id === editedPost.id);
    if (index !== -1) {
      // Update the posts array with the edited post
      const updatedPosts = [...posts];
      updatedPosts[index] = editedPost;
      setPosts(updatedPosts);
    }
    closeEditModal();
  };
// delete
const [posts, setPosts] = useState(filteredPosts);


const handleRemoveClick = (postId) => {
  // console.log(postId)
  // Remove the post with the given ID from the state
  setPosts(posts.filter((post) => post.id !== postId));
};

  return (
    <div className="p-20">
      <div className=" h-[581.97px] relative ">
        <div className="w-72 h-96 left-0 top-0 absolute">
          <div className="w-72 h-96 left-[12px] top-0 absolute bg-white rounded-lg shadow-md">
            <div className="w-60 h-20 left-[20px] top-[20px] absolute border-b border-black border-opacity-10">
              <div className="left-[68.66px] top-[15px] absolute text-center text-neutral-900 text-lg font-bold leading-snug">
                David John
              </div>
              <div className="left-[47px] top-[36.60px] absolute text-center text-slate-500 text-base font-normal leading-7">
                john@example.com
              </div>
            </div>
            <div className="w-60 h-64 left-[20px] top-[127.39px] absolute">
              <div className="w-60 h-10 left-0 top-[-8px] absolute bg-yellow rounded-lg">
                <div className="w-20 h-5 left-[38px] top-[5px] absolute text-white text-base font-medium leading-7">
                  Posts
                </div>
                <div className="w-4 left-[15px] top-[10px] absolute justify-start items-start inline-flex">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M7.21875 0.345703C7.46875 0.241536 7.72917 0.189453 8 0.189453C8.25 0.189453 8.51042 0.241536 8.78125 0.345703L15.3125 3.1582C15.75 3.36654 15.9792 3.71029 16 4.18945C15.9792 4.66862 15.75 5.01237 15.3125 5.2207L8.78125 8.0332C8.51042 8.13737 8.25 8.18945 8 8.18945C7.72917 8.18945 7.46875 8.13737 7.21875 8.0332L0.6875 5.2207C0.25 5.01237 0.0208333 4.66862 0 4.18945C0.0208333 3.71029 0.25 3.36654 0.6875 3.1582L7.21875 0.345703ZM8 1.68945C7.91667 1.68945 7.85417 1.69987 7.8125 1.7207L2.0625 4.18945L7.8125 6.6582C7.85417 6.67904 7.91667 6.68945 8 6.68945C8.0625 6.68945 8.125 6.67904 8.1875 6.6582L13.9375 4.18945L8.1875 1.7207C8.125 1.69987 8.0625 1.68945 8 1.68945ZM7.8125 10.6582C7.85417 10.679 7.91667 10.6895 8 10.6895C8.0625 10.6895 8.125 10.679 8.1875 10.6582L14.125 8.0957C13.9792 7.86654 13.9688 7.61654 14.0938 7.3457C14.3229 6.9707 14.6562 6.86654 15.0938 7.0332L15.375 7.1582C15.7708 7.38737 15.9792 7.73112 16 8.18945C15.9792 8.66862 15.75 9.01237 15.3125 9.2207L8.78125 12.0332C8.51042 12.1374 8.25 12.1895 8 12.1895C7.72917 12.1895 7.46875 12.1374 7.21875 12.0332L0.71875 9.25195C0.260417 9.02279 0.0208333 8.6582 0 8.1582C0 7.76237 0.166667 7.43945 0.5 7.18945L0.8125 6.9707C1.20833 6.74154 1.5625 6.80404 1.875 7.1582C2.0625 7.4707 2.03125 7.7832 1.78125 8.0957L7.8125 10.6582ZM1.875 11.1582C2.0625 11.4707 2.03125 11.7832 1.78125 12.0957L7.8125 14.6582C7.85417 14.679 7.91667 14.6895 8 14.6895C8.0625 14.6895 8.125 14.679 8.1875 14.6582L14.125 12.0957C13.9792 11.8665 13.9688 11.6165 14.0938 11.3457C14.3229 10.9707 14.6562 10.8665 15.0938 11.0332L15.375 11.1582C15.7708 11.3874 15.9792 11.7311 16 12.1895C15.9792 12.6686 15.75 13.0124 15.3125 13.2207L8.78125 16.0332C8.51042 16.1374 8.25 16.1895 8 16.1895C7.72917 16.1895 7.46875 16.1374 7.21875 16.0332L0.71875 13.252C0.260417 13.0228 0.0208333 12.6582 0 12.1582C0 11.7624 0.166667 11.4395 0.5 11.1895L0.8125 10.9707C1.20833 10.7415 1.5625 10.804 1.875 11.1582Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[464px] left-[312px] top-0 absolute bg-white rounded-lg shadow-md">
          <div className="flex justify-between px-5 py-5">
            <div className="text-neutral-900 text-xl font-bold leading-normal">
              Posts
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[216px] h-[46px] p-2 mb-4 border rounded"
            />
          </div>
          <div className=" pb-4 left-[20px] top-[92px] justify-start items-start inline-flex">
            <div className="pb-px flex-col justify-start items-start inline-flex">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2">Post ID</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td className="border p-2">{post.id}</td>
                      <td className="border p-2">{post.title}</td>
                      <td className="border p-2">{post.body}</td>
                      <td className="border p-2">
                        <button onClick={() => openEditModal(post)}>
                          <Image src={edit} alt="" />
                        </button>
                        <button onClick={() => handleRemoveClick(post.id)}>
                          <Image src={trash} alt="" />
                        </button>
                        {/* Add more actions here */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {editingPost && (
                <EditModal
                  isOpen={!!editingPost}
                  onClose={closeEditModal}
                  post={editingPost}
                  onSave={saveEditedPost}
                />
              )}
            </div>
          </div>
          {/* pagination */}
          <div className="flex mt-10 justify-center">{renderPageButtons()}</div>
        </div>
      </div>
    </div>
  );
};
export default PostTable;
