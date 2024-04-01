import React, { useState } from 'react';

const SubHeader = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="subHeader">
            <div className="leftGroup">
                <button 
                onMouseEnter={() => setShowModal(true)}
                onMouseOut={(e) => {
                    if (!e.relatedTarget || !e.relatedTarget.closest('.modal')) {
                        setShowModal(false);
                    }
                }}
                >Categories</button>
                {showModal && (
                    <div className="categories-container">
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
