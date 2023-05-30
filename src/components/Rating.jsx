function Rating({ratingValue, value}) {

    const ratingType = ratingValue === "star" ? "★" : "🙂";
    const range = [1,2,3,4,5];
    
    return  <div>
                {range.map((element) => (
                    value >= element ? <span key={element.toString()}> {ratingType}</span> : null
                ))}
            </div>
}

export default Rating;