import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ participants }) => {
  return (
    <>
      {participants &&
        participants.map(participant => (
          <Item
            participant={participant}
            key={participant.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  participants: PropTypes.array,
};
