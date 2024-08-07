import React from 'react';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';

const NumericField = ({ defaultValue, handleChange }) => {
  return (
    <div className="form-group">
      <NumericFormat
        id="numericField"
        name="Preco"
        className="form-control"
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        defaultValue={defaultValue}
        onValueChange={(values) => handleChange({ target: { name: "Preco", value: values.value, type: "number" } })}
      />
    </div>
  );
};

NumericField.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired,
};

NumericField.defaultProps = {
  defaultValue: '',
};

export default NumericField;
