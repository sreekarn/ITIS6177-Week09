exports.handler = async (event) => {
    // TODO implement
    if(event.httpMethod === 'GET') {
        
        if (event && (!event.queryStringParameters || !event.queryStringParameters.keyword)) {
            
            return {
                
                 statusCode:400,
                 body:JSON.stringify({Error:"Parameter is Missing, please re-check your URL"})
                 
            }
        }
        
        if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            
            return {
                statusCode :200,
                body: JSON.stringify("Sreekar says " + event.queryStringParameters.keyword )
            }
        }
    }
};

