import React, { useRef } from 'react';

const HomepageMemberModal = ({ showModal, setShowModal, selectedMember }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }
    return (
        <>
            {showModal ?
                <>
                    <div className="member__modal-overlay" ref={modalRef} onClick={closeModal} />
                    <div className="member__modal-bg">
                        <img src={selectedMember.photo} alt="" className="rounded-circle member__modal-img" />
                        <div className="member__modal-content">
                            <h3>{selectedMember.name}</h3>
                            <h6>{selectedMember.position}</h6>
                            <div className="member__modal-social">
                                <a><i className="fab fa-linkedin-in"></i></a>
                                <a><i className="fab fa-github"></i></a>
                                <a><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <button className="member__btn-close" onClick={() => setShowModal(prev => !prev)}><i className="fas fa-times"></i></button>
                    </div>
                </>
                : null}

        </>
    )
}

export default HomepageMemberModal;