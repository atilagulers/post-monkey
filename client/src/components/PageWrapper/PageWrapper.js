import React, {useEffect} from 'react';

function PageWrapper({title, children}) {
  useEffect(() => {
    document.title = `${title}`;
    window.scrollTo(0, 0);
  }, [title]);

  return <div className="mx-auto">{children}</div>;
}

export default PageWrapper;
