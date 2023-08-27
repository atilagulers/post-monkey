import React, {useEffect} from 'react';

function Post() {
  return (
    <div className="flex gap-3 border-y border-gray-300 dark:border-gray-700 dark:text-white p-2 shadow">
      <div>
        <img className="w-20" src="logo192.png" alt="" />
      </div>
      <div>
        <h2 className="text-xl mb-3">Atila Guler</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus ex suscipit, odio vero quod iure veritatis dicta,
          praesentium possimus quos omnis quibusdam quidem vitae tenetur laborum
          voluptatibus nisi. Totam, pariatur?
        </p>
      </div>
    </div>
  );
}

export default Post;

//article section
