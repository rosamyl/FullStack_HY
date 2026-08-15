const Filter = ({ findName, handleFindChange }) => {
    return (
      <div>
        <h2>Find a contact</h2>
  
        <input
          value={findName}
          onChange={handleFindChange}
        />
      </div>
    )
  }
  
  export default Filter