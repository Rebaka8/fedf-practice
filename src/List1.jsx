import PropTypes from 'prop-types';
function List1(props) {
const itemList = props.items;
const listItems= itemList.map((item, index) =>
    <li key={index}>{item.name} - <b>{item.calories}</b> calories</li>
);
return (
      <>
          <h2 className ="list-title">{props.title}</h2>
          <ol className = "list-items">{listItems}</ol>
      </>
);
}
List1.propTypes = {
                   title: PropTypes.string,
                   items: PropTypes.arrayOf(PropTypes.shape({
                   name: PropTypes.string,
                   calories: PropTypes.number
                   }))
}

List1.defaultProps ={
                    title: "Item List",
                    items: [],
}

export default List1;