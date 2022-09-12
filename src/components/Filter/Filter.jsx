const Filter = ({value, onChange}) => (
    <label>
        <p>Find contacts by name </p> 
        <input type="text" value={value} onChange={onChange}/>
    </label>
);

export default Filter;