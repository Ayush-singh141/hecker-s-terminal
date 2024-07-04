let terminal = document.querySelector(".main-terminal");

let dots = document.createElement("span");
dots.setAttribute("style","dot");
dots.style="color:green";
dots.innerHTML="<b>.</b>";
let dot2 = document.createElement("span");
dot2.setAttribute("style","dot");
dot2.style="color:green";
dot2.innerHTML="<b>.</b>";
let dot3 = document.createElement("span");
dot3.setAttribute("style","dot");
dot3.style="color:green";
dot3.innerHTML="<b>.</b>";


async function Hack(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let initi=document.createElement("span");
            initi.innerHTML="initialising Hacking";
            terminal.append(initi); 
    
            setTimeout(()=>{
                initi.append(".");
            },900)
                
            setTimeout(()=>{
                initi.append(".");
            },1400)
        
            setTimeout(()=>{
                initi.append(".");
            },2000)
            return 200;
        },1000)
    
        setTimeout(()=>{
            let send=document.createElement("span");
            send.innerHTML="now reading your data!";
            terminal.append(send); 
            setTimeout(()=>{
                send.append(".");
            },900);
                
            setTimeout(()=>{
                send.append(".");
            },1400);
        
            setTimeout(()=>{
                send.append(".");
            },2000);
            
            return 200;
        },4000);
    
        setTimeout(()=>{
            let password=document.createElement("span");
            password.innerHTML="password files detected";
            terminal.append(password); 
            setTimeout(()=>{
                password.append(".");
            },900);
                
            setTimeout(()=>{
                password.append(".");
            },1400);
            setTimeout(()=>{
                password.append(".");
            },2000);
            
            return 200;
        },7000);
    
        setTimeout(()=>{
            let server=document.createElement("span");
            server.innerHTML="sending all files to server";
            terminal.append(server); 
            setTimeout(()=>{
                server.append(".");
            },900);
                
            setTimeout(()=>{
                server.append(".");
            },1400);
            setTimeout(()=>{
                server.append(".");
            },2000);
            
            return 200;
        },10000);
        setInterval(()=>{
            return resolve(200);
        },13000)
    })
}

async function main(){
    let a = await Hack();
    document.querySelector(".body").style="background-image: url('https://miro.medium.com/v2/resize:fit:1400/1*JAoYVcvkzbFKi652Pt_1yQ.gif')"
    
}

main();