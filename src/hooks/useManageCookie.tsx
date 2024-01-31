import Cookies from 'js-cookie';


export default function useManageCookie() {
    function createCookie(name: string, content:string) : void{
        Cookies.set(name,content);
    } 
    function read(name: string) : void{
        Cookies.get(name);
    }   
}