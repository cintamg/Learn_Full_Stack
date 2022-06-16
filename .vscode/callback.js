statusDisplay=(status)=>{
    console.log("Message status : "+status)
}

sendSms=(message,fn)=>{
    console.log("Message : "+message)
    fn("delivered successfully");
}

sendSms("Hello how are you?",statusDisplay)