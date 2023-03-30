const url = "https://641523a45be9d76da4edd034.mockapi.io/users"

export const post = async (body) => {
  try {
    const response = await fetch(url,{
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(body)
    })

    if (!response.ok){
      alert("Hubo un error")
      return  
    }

    const data = await response.json()
    return data
    
  } catch (error) {
      console.error(error)
  }
}