


export async function makeRequest(path, query = null ) {

    let apiUrl = "https://api.themoviedb.org/3/";
    let apiKey = process.env.REACT_APP_API_KEY;

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

// const API =
//     {
//         Movie : {
//             now_playing : () => {
//                 return makeRequest('/movie/now_playing')
//             },
//             popular: () => {
//                 return makeRequest('/movie/popular')
//             },
//             top_rated : () => {
//                 return makeRequest('/movie/top_rated')
//             },
//             upcoming : () => {
//                 return makeRequest('/movie/upcoming')
//             }
//         },
//         TV : {
//             airing_today : () => {
//                 return makeRequest('/tv/airing_today')
//             },
//             on_the_air: () => {
//                 return makeRequest('/tv/on_the_air')
//             },
//             popular : () => {
//                 return makeRequest('/tv/popular')
//             },
//             top_rated : () => {
//                 return makeRequest('/tv/top_rated')
//             }
//         },
//         Search : {
//             movie : ( query ) => {
//                 return makeRequest('/search/movie' , query )
//             },
//             multi : ( query ) => {
//                 return makeRequest('/search/multi' , query )
//             },
//             tv : ( query ) => {
//                 return makeRequest('/search/tv' , query )
//             }
//         }
//
//
//     }

// export default API