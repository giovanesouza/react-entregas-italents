
const FormGroupLogin = ({ children, label, inputType = 'text', name, value, onChange, max, refInput }) => {
    return (
        <div className="flex flex-col items-center relative mb-3">

            <label htmlFor={name} className='w-full text-gray-500 font-semibold'>
                {label}
            </label>

            <input
                type={inputType}
                name={name}
                id={name}
                className='w-full text-sm text-gray-500 border border-gray-400 rounded-xl outline-none py-1 px-3'
                value={value}
                maxLength={max}
                ref={refInput}
                onChange={onChange} required />

            {children}
        </div>
    );
}

export default FormGroupLogin;