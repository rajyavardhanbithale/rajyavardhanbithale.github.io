
export function createSession(name: string, content: any): any {
    return sessionStorage?.setItem(name, content);
}
export function readSession(name: string): any {
    // if (typeof sessionStorage !== 'undefined') {
    //     return sessionStorage.getItem(name);
    // } else {
    //     console.error("What the heck are you using?");
    //     return readSession;
    // }
    return sessionStorage.getItem(name);

}   

export function randomKey(length:number): number{
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    
    return Math.floor(min + Math.random() * (max - min + 1));
}

export default function useManageSessions(){
   
}