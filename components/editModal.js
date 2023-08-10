import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#__next'); // Set the root element for accessibility

const EditPostModal = ({ isOpen, onClose, post, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.body);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSave = () => {
    onSave({ ...post, title: editedTitle, body: editedContent });
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Edit Post Modal"
      >
        <div className="w-[876px] h-[438.78px] px-5 py-[15px] bg-white rounded-[10px] shadow flex-col justify-center items-start gap-5 inline-flex">
          <div className="self-stretch h-10 pb-4 border-b border-black border-opacity-10 justify-center items-start gap-[773px] inline-flex">
            <div className="text-neutral-900 text-xl font-bold leading-normal">
              Edit
            </div>
            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
          </div>
          <div className="w-[836px] h-[348.78px] relative flex-col justify-start items-start flex">
            <div className="h-[263.59px] flex-col justify-center items-start inline-flex">
              <div className="self-stretch px-3 pb-5 justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-[6.41px] inline-flex">
                  <div className="text-neutral-900 text-base font-normal leading-7">
                    Title
                  </div>
                  <input
                    className="w-full self-stretch px-5 pt-4 pb-[17px] h-[30px]  bg-white rounded-[10px] border border-gray-200  text-gray-500 text-base font-normal"
                    type="text"
                    value={editedTitle}
                    onChange={handleTitleChange}
                  />
                </div>
              </div>
              <div className="self-stretch px-3 pb-5 justify-start items-start inline-flex">
                <div className="w-[836px] pr-px flex-col justify-center items-start gap-[6.80px] inline-flex">
                  <div className="text-neutral-900 text-base font-normal leading-7">
                    Description
                  </div>
                  <textarea
                    value={editedContent}
                    onChange={handleContentChange}
                    className='w-full self-stretch pl-3 pt-3.5 pb-[62px] bg-white rounded-[10px] border border-gray-200'  
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-[174px] pl-[25px] pr-[25.22px] pt-[13px] pb-[14.19px] bg-yellow-400 rounded-[50px] shadow justify-center items-center gap-[5px] inline-flex hover:bg-yellow">
              <div
                className="text-center text-neutral-900 text-sm font-semibold uppercase leading-relaxed tracking-wide "
                onClick={handleSave }
              >
                Update
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditPostModal;
 