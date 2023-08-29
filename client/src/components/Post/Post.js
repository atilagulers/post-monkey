import React, {useEffect} from 'react';

function Post({content}) {
  return (
    <section className="flex gap-3 border-b border-gray-300 dark:border-gray-700 dark:text-white p-5 shadow ">
      <div className="w-10 flex-none">
        <img className="w-20" src="logo192.png" alt="" />
      </div>
      <article className="break-all">
        <h2 className="text-xl mb-3">Atila Guler</h2>
        <p>{content}</p>
      </article>
    </section>
  );
}

export default Post;
