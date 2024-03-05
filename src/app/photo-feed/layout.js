import React from 'react'

function PhotoFeedLayout({ children, modal }) {
    return (
        <div className='px-40 py-12'>
            {children}
            <div>
                {modal}
            </div>
        </div>
    );
}

export default PhotoFeedLayout;
