const PetsPage = ( {key, category, name, type, age, temper, special_needs, image} ) => {
  return (
    <div>
        <img src={image} alt="Pet picture"/>
        <p>{name}</p>
        <div>
            {category === "small_pets" ? 
            <p>Small Pet</p> 
            :
            <p>{category}</p>
            }
        </div>
        <p>{type}</p>
        <p>{age}</p>
        <p>{temper}</p>
        <p>{special_needs}</p>
    </div>
  )
}

export default PetsPage