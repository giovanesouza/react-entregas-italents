export const Price = ({ labelInfo, labelValue }) => {
    return (
        <div className="w-full flex justify-between items-center text-gray-600 p-2">
            <span>{labelInfo}</span>
            <span>R$ {labelValue.toFixed(2)}</span>
        </div>
    );
}