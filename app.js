async function click(){
    let Name =document.getElementById("name").value;
    let gitUrl=`https://api.githib.com/users/${Name}`;
    let gitRes = await fetch(gitUrl);
    let gitresuser = await gitRes.json();
    let img = document.createElement("img")
    img.src =gitresuser.avatar_url;
    document.body.append(img);
    console.log(gitresuser);
}