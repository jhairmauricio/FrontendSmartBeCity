import { Container, Row, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import jwtDecode from 'jwt-decode';

import AmbulanceCard from "components/cards/ambulanceCard";
import AmbulanciaModal from "components/Modals/ambulanciaModal";
import AmbulanciaPagination from 'components/pagination/AmbulaciaPagination';

import { RambulanciasByuser } from 'services/user';
import { RgpsByambulancia } from 'services/ambulancia';

const HomeHeader = () => {

  const [isOpenPlusIcon, setPlusIcon]       = useState(false);
  const [isOpenTrashIcon, setTrashIcon]     = useState(false);
  const [isOpenWrenchIcon, setWrenchIcon]   = useState(false);
  const [AmbulancesUseState, setAmbulances] = useState([]);

  const plusIconHandler   = () => setPlusIcon(!isOpenPlusIcon);
  const trashIconHandler  = () => setTrashIcon(!isOpenTrashIcon);
  const wrenchIconHandler = () => setWrenchIcon(!isOpenWrenchIcon);

  const token = useSelector((state) => state.login).value
  const decodeUser = jwtDecode(token).doc;

  const GetAmbulancesInfo = async() => {
    const Ambulances =  await (await RambulanciasByuser(decodeUser['_id'], token)).data
    
    if(Ambulances.length !== 0){

        setAmbulances(Ambulances)

        Ambulances.forEach(async(ambulancia) => { 
          const gps = await (await RgpsByambulancia(ambulancia["_id"],token)).data         
        });
    }
  }

  useEffect(() => {GetAmbulancesInfo()},[])

  const { register, handleSubmit} = useForm();

  const formKeys = ["placa"];
  const registers = [];
 
  formKeys.forEach((v) => {
    const {ref, ...others} =  register(v)
    registers.push({
      ref,
      others
    });
  });

  const CreateEditContentModal = () => {
    return <>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input 
          placeholder="placa" 
          innerRef={registers[0].ref} 
          {...registers[0].others}
          />
        </InputGroup>
    </>
  }


  const onSubmitCreateAmbulance = (data) => {
    console.log(data)
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

                {
                  AmbulancesUseState.map(ambulance => <AmbulanceCard 
                    plate = {ambulance.placa} 
                    ubication = {{lat:20, lon:20}} 
                    ModalHandler = {
                      {
                        trash : trashIconHandler, 
                        wrench: wrenchIconHandler
                      }
                    }/>)
                }

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

        handleSubmit = {handleSubmit}
        onSubmit = {onSubmitCreateAmbulance}
        
        />
    </>
  );
};

export default HomeHeader;
