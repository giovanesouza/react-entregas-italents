export const ButtonSubmit = ({ label }) => {
    return (
        <button type="submit" className='w-full bg-gray-200 text-base font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white rounded-lg p-2 my-4 mx-auto'>{label}</button>
    );
}