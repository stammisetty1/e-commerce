import React, { useState } from 'react';
import CategoriesModal from './CategoriesModal';

const SubHeader = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="subHeader">
            <div className="leftGroup">
                <button onMouseEnter={() => setShowModal(true)} onMouseLeave={() => setShowModal(false)}>Categories</button>
                {showModal && (
                    <div className="modal">
                        <CategoriesModal />
                    </div>
                )}
            </div>
            <div className="rightGroup">
                <button className="resourcesButton">Resources</button>
                <button>Help</button>
            </div>
        </div>
    );
};

export default SubHeader;
