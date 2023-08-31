import React, {useEffect} from 'react';
import {FaPaperclip} from 'react-icons/fa';

function CreatePostForm() {
  return (
    <form>
      <div className=" mb-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 ">
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800 ">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            id="editor"
            rows="8"
            className="block w-full px-0 text-sm text-gray-800 bg-white  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 "
            placeholder="Write an article..."
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between border-b dark:border-gray-600 w-full">
          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600 w-full">
            <div className="flex justify-between items-center space-x-1 w-full p-2 dark:text-white">
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <FaPaperclip size={18} />

                <span className="sr-only">Attach file</span>
              </button>

              <button type="submit" className="btn-pill btn-orange">
                Publish post
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreatePostForm;
