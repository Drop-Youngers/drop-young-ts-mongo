const formatResult = ( status: number, message: string, data?: any) =>{
    return { 
        status,
        message: message.toString().split('"').join(""),
        data,
    };
};

export default formatResult;