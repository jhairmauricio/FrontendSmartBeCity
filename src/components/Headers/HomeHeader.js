import { Container, Row, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import { useState } from "react";

import AmbulanceCard from "components/cards/ambulanceCard";
import AmbulanciaModal from "components/Modals/ambulanciaModal";
import AmbulanciaPagination from 'components/pagination/AmbulaciaPagination';

const HomeHeader = () => {

  const [isOpenPlusIcon, setPlusIcon]     = useState(false);
  const [isOpenTrashIcon, setTrashIcon]   = useState(false);
  const [isOpenWrenchIcon, setWrenchIcon] = useState(false);

  const plusIconHandler   = () => setPlusIcon(!isOpenPlusIcon);
  const trashIconHandler  = () => setTrashIcon(!isOpenTrashIcon);
  const wrenchIconHandler = () => setWrenchIcon(!isOpenWrenchIcon);


  const CreateEditContentModal = () => {
    return <>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="placa" />
        </InputGroup>
    </>
  }

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <div className="icon icon-shape text-white bg-success rounded-circle shadow mb-3" onClick={plusIconHandler}>
              <i className="fas fa-plus"/>
            </div>

            <Row>
              <AmbulanceCard 
                plate = {"ADC 255"} 
                ubication = {{lat:20, lon:20}} 
                ModalHandler = {
                  {
                    trash : trashIconHandler, 
                    wrench: wrenchIconHandler
                  }
                }/>

              
            </Row>

          <div className="d-flex justify-content-center mt-3">
              <AmbulanciaPagination/>
          </div>

          </div>
        </Container>
      </div>

      {/** modal components */}

      <AmbulanciaModal 
        handlerFunction = {plusIconHandler}   
        modalStatus     = {isOpenPlusIcon} 
        style = {
          {
            title : "Crear Ambulancia",
            buttonMessage : "Crear",
            content : CreateEditContentModal
          }
        }
        />
      <AmbulanciaModal 
        handlerFunction = {trashIconHandler}  
        modalStatus  = {isOpenTrashIcon}
        style = {
          {
            title : "Eliminar Ambulancia",
            buttonMessage : "Eliminar",
            content : "Estar seguro de eliminar la ambulancia"
          }
        }
        />
      <AmbulanciaModal 
        handlerFunction = {wrenchIconHandler} 
        modalStatus = {isOpenWrenchIcon}
        style = {
          {
            title : "Editar Ambulancia",
            buttonMessage : "Editar",
            content : CreateEditContentModal
          }
        }
        />

    </>
  );
};

export default HomeHeader;
