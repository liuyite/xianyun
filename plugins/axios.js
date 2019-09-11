import {Message} from 'element-ui'
export default ({$axios , redirect}) =>{
    $axios.onError(res =>{
        // console.log(res.response)
        let { message,statusCode } = res.response.data
        if(statusCode===400){
            Message.error(message)
        }
        if(statusCode===401 || statusCode===403){
            redirect('/user/login')
        }
    })
}