
export function createSession(name: string, content: any): any {
    return sessionStorage?.setItem(name, content);
}
export function readSession(name: string): any {
    return sessionStorage?.getItem(name)
}   

export function randomKey(length:number): number{
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    
    return Math.floor(min + Math.random() * (max - min + 1));
}

export default function useManageSessions(){
   
}