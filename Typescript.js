var Teacher = (function () {
    function Teacher() {
    }
    Teacher.prototype.teach = function (firstname, subject) {
        return firstname + " teaches " + subject;
    };
    return Teacher;
}());
var teach = new Teacher();
document.body.innerHTML = teach.teach("Einstein", "physics");
//# sourceMappingURL=Typescript.js.map