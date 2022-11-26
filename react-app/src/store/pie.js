// constants




//action creator





//thunk






//reducer









function normalizeArray(dataArray){
    if (!dataArray instanceof Array) throw new Error('Normalize problem: data invalid')
    const obj = {}
    dataArray.forEach(element => {
      obj[element.id] = element
    })
    return obj
  }
