import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function AmbulanciaModal(props) {

    const {handlerFunction, modalStatus, style} = props;

    var titleColor = "";
    var color = "";

    switch(style.buttonMessage){
        case "Crear":
            titleColor = "text-success";
            color = "success";
            break;
        
        case "Eliminar":
            titleColor = "text-danger";
            color = 'warning'
            break;
        
        case "Editar":
            titleColor = "text-info";
            color = 'success'
            break;
    }

    return (<>
    <Modal isOpen = {modalStatus} toggle = {handlerFunction} centered={true}>
        <ModalHeader toggle={handlerFunction} tag="h3" className="text-success"> 
            <span className={titleColor}> {style.title} </span>
        </ModalHeader>
                <ModalBody>
                    {typeof(style.content) === "string" ? style.content : style.content()}
                </ModalBody>
            <ModalFooter>
          <Button color="danger" onClick = {handlerFunction}>
            cerrar
          </Button>
          <Button color = {color} onClick = {handlerFunction}>
            {style.buttonMessage}
          </Button>
        </ModalFooter>
    </Modal>

    </>);
}

export default AmbulanciaModal;