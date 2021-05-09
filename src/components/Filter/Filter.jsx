import React from 'react';
import PropTypes from "prop-types";

const Filter =({ value , onChange }) => {
    return (
        <label>
            Find contacts by name <br />
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

Filter.defaultProps ={
    value: '',
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Filter;