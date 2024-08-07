import PropTypes from "prop-types";

const Item = ({ name, url, icon, id }) => {
    return <>İtem</>;
};
Item.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
export default Item;
