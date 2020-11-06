
export async function makeRequest(path, query = null ) {

    let apiUrl = "https://api.themoviedb.org/3/";
    let apiKey = "f7da4de8a35412f4ac9a13f1e835855a";

    if( query !== null ){
        apiUrl += path+"?api_key="+apiKey+"&query="+query;
    }else{
        apiUrl += path+"?api_key="+apiKey;
    }
    let result = {};
    let options = {
        method: "GET" ,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    } ;
    await fetch(apiUrl,  options )
        .then(response => response.json())
        .then(resData => {
            result = resData
        })
        .catch(  ( error ) => function(){
            console.error('Error:', error);
            return error;
        });

    return result
}
