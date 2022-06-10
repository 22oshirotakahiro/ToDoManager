'use strict';
/* (vue.js)リストの初期表示 */
/* (vue.js)ドラッグアンドドロップ機能 */
const vue = new Vue({
        el: "#app",
        data: {
            green: [],
            dragged: null,
        },
        methods:{
            dragList(event){
                console.log('dragList');
                this.dragged = event.target;
            },
            dropList(event, dropColor){
                console.log('dropList');
                event.preventDefault();
                if (event.target.className == "dropzone") {
                    console.log('dropped');
                    this.dragged.parentNode.removeChild(this.dragged);
                    this.dragged.todoColor = dropColor
                    event.target.appendChild(this.dragged);
                }
            }
        },
        created: function() {
            fetch('/getGreen')
            .then(res => res.json().then(data => this.green = data))
            .catch(error => console.log(error))
        },
//         computed: {
//             Green () {
//                 return this.green.filter(list => todo.todo_color == 'A')
//             },
//             Red () {
//                 return this.green.filter(list => todo.todo_color == 'B')
//             },
//             Blue () {
//                 return this.green.filter(list => todo.todo_color == 'C')
//             },
//             Yellow () {
//                 return this.green.filter(list => todo.todo_color == 'C')
//             }
//         }
    })

/* ドラッグアンドドロップ機能 */
//var dragged;
//
//  /* events fired on the draggable target */
//    document.addEventListener("drag", function( event ) {
//    }, false);
//
//    document.addEventListener("dragstart", function( event ) {
//      // store a ref. on the dragged elem
//        dragged = event.target;
//      // make it half transparent
//        event.target.style.opacity = .5;
//    }, false);
//
//    document.addEventListener("dragend", function( event ) {
//      // reset the transparency
//        event.target.style.opacity = "";
//    }, false);
//
//  /* events fired on the drop targets */
//    document.addEventListener("dragover", function( event ) {
//      // prevent default to allow drop
//        event.preventDefault();
//    }, false);
//
//    document.addEventListener("dragenter", function( event ) {
//      // highlight potential drop target when the draggable element enters it
//        if ( event.target.className == "dropzone" ) {
//        }
//    }, false);
//
//    document.addEventListener("dragleave", function( event ) {
//      // reset background of potential drop target when the draggable element leaves it
//        if ( event.target.className == "dropzone" ) {
//            event.target.style.background = "";
//        }
//    }, false);
//
//    document.addEventListener("drop", function( event ) {
//      // prevent default action (open as link for some elements)
//        event.preventDefault();
//      // move dragged elem to the selected drop target
//        if ( event.target.className == "dropzone" ) {
//            event.target.style.background = "";
//            dragged.parentNode.removeChild( dragged );
//            event.target.appendChild( dragged );
//        }
//    }, false);

/* リスト作成機能 */
/* リスト取り消し線機能 */
/* リスト削除機能 */
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});

function add() {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-group-item");
    
    li.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        li.remove();
    });
//
//    li.addEventListener("mousedown", function () {
//      li.classList.toggle("text-decoration-line-through");
//    });
    
    ul.appendChild(li);
    input.value = "";
}
