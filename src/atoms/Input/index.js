const Input = ({
    id, label, value = "", onChange,
}) => (
    <div className="mb-4">
        <input
            type="text"
            id={id}
            placeholder={label}
            value={value}
            required
            onChange={onChange}
            className="border border-gray-400 px-4 py-2 text-base rounded-sm"
        />
    </div>  
)

export default Input;