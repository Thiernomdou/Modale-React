import React, { useState } from 'react';
import './Modal.css'

export default function Modal() {

    //le state 
    const [modal, setModal] = useState(false);

    //fonction pour ouvrir la modale au clic
    const toggleModal = () => {
        setModal(!modal);
    }

    return (

        <>
            <button
                onClick={toggleModal}
                className="btn-modal">Ouvrir la modale
            </button>

            {modal && (

                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Fenetre Modal</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consequuntur sit hic nobis accusamus beatae ad voluptatum voluptatem tempore voluptate. Consectetur quidem impedit ab corrupti obcaecati molestias voluptatibus laudantium id quae ipsa, reprehenderit neque est sequi odit dolore. Commodi pariatur aperiam recusandae officia exercitationem in ipsam eveniet inventore obcaecati molestias.
                            </p>
                            <button
                                onClick={toggleModal}
                                className="close-modal">FERMER
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </>

    );
}
