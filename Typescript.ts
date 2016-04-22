

class Teacher{
  teach( firstname :string,subject:string){
    return firstname+" teaches "+subject;
  }
}

var teach =new Teacher();

document.body.innerHTML=teach.teach("Einstein","physics");
