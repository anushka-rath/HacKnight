import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import Loader from '../components/Loader';
import {v4 as uuid} from 'uuid';
import ParticipantService from '../services/ParticipantService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [github, setGithub] = useState('');

  const handleFullName = e => setFullName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleCountry = e => setCountry(e.target.value);
  const handleGithub = e => setGithub(e.target.value);
  const [load,setLoad]=useState();
  const loader=state=>{setLoad(state)};

  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    console.log('handleSubmit');
    event.preventDefault();
    if (fullName === '' || email === '' || country === '' || github === '') {
      window.alert('Please fill the form');
      return;
    }
    else{
      loader(true);
      const participant={
        id:uuid(),
        fullName:fullName,
        email:email,
        country:country,
        github:github
      }
      await ParticipantService.register(participant);
      loader(false);
      navigate('/participants');
    }
  };



  return (
    <>
      {false && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={github}
            onChange={handleGithub}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark">
          <FaRotate /> Reset
        </button>
      </form>
      {load && <Loader />}
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
