import './FormBirthItem.css';

const FormBirthItem = ({ nomeLabel, inputType, placeholder, name, value, onChange }) => {
    return (
        <div className='form-group'>
            <label>{nomeLabel}</label>
            <input type={inputType} placeholder={placeholder} name={name} value={value} onChange={onChange} required />
        </div>
    );
}

export default FormBirthItem;