import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import ParticipantService from '../services/ParticipantService';


const Participants = () => {
  const [participants,setParticipants]=useState([]);
  const [load,setLoad]=useState();
  const loader=state=>{setLoad(state)};

   useEffect(() => {
    const getAllParticipants = async () => {
      loader(true);
      const data = await ParticipantService.getAll();
      const participantsAll = data.reverse();
      setParticipants(participantsAll);
      loader(false);
     
   }
   getAllParticipants();
  }, [] );
  
 
  return (
    <>
      <div className="row">
        <div className="col">
          <List participants={participants} />
          <Empty notes={[]} />
          {load && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
