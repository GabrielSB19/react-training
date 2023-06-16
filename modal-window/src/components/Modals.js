import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Naturalez" />
      </Modal>
      <button onClick={openModal3}>Modal 3</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Modal 3</h3>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="submit" value="Enviar" />
        </form>
        <img src="https://placeimg.com/400/400/nature" alt="Naturalez" />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde se carga nuestra app React, gracias a los portales "React Port"
        </p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
