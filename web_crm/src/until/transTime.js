export default function transTimer(time){
        if(time===''){
                return  ''
        }
        let str=JSON.stringify(new Date(JSON.parse(time)))
        return str.slice(1,11)
}

export function nowDateStr(){
        return new Date().toLocaleDateString();
}
export function dategetTime(date){
        return new Date(date).getTime();
}