const FormGroup = ({ label, inputType, name, value, onChange, max }) => {
    return (
        <div className="flex items-center mb-2 sm:flex-col relative sm:mb-5">

            <label htmlFor={name} className='w-2/6 text-gray-500 font-semibold sm:w-full'>
                {label}:
            </label>

            <input
                type={inputType}
                name={name}
                id={name}
                className='w-4/6 text-sm text-gray-500 border border-gray-400 rounded-xl outline-none py-1 px-3 sm:w-full'
                value={value}
                maxLength={max}
                onChange={onChange} required />
        </div>
    );
}

export default FormGroup;