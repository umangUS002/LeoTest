const QuestionCard = ({question,ranking,setRanking}) => {

  const changeRank = (i,value) => {

    const newRank = [...ranking]
    newRank[i] = Number(value)

    setRanking(newRank)
  }

  return (

    <div style={{border:"1px solid gray",padding:20,margin:20}}>

      <h3>{question.text}</h3>

      {question.options.map((opt,i)=>(

        <div key={i}>

          {opt}

          <select
            value={ranking[i]}
            onChange={(e)=>changeRank(i,e.target.value)}
          >

            {[1,2,3,4].map(r=>(
              <option key={r} value={r}>
                {r}
              </option>
            ))}

          </select>

        </div>

      ))}

    </div>
  )
}

export default QuestionCard