<template>
    <div class="todo-item">

        <div class="todo-item-left">
            <input type="checkbox" v-model="completed" @change="doneEdit">
            <div class="todo-item-label" :class="{ completed : completed }" v-if="!editing" @dblclick="editTodo">{{ title}}</div>
            <input v-else class="todo-item-edit" type="text" v-model.lazy="title" @blur="doneEdit" @keyup.enter="doneEdit"  @keyup.esc="cancelEdit" v-focus>

        </div>

        <div>
            <button @click="pluralize">Plural</button>
            <span class="remove-item" @click="removeTodo(id)">
                &times;
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props:{
            todo:{
                type:Object,
                require:true
            },
            index:{
                type: Number,
                require: true
            },
            checkAll:{
                type:Boolean,
                require:true,
            }
        },
        data(){
            return{

                id:this.todo.id,
                title:this.todo.title,
                completed:this.todo.completed,
                editing:this.todo.editing

            }
        },
        directives:{

            focus:{
                inserted:function (el) {
                    el.focus();
                }
            }

        },
        watch:{
            checkAll(){
                if (this.checkAll) {
                    this.completed = true;
                }else{
                    this.completed = this.todo.completed;
                }
            }
        },

        methods:{

            removeTodo(id){

                this.$store.dispatch('deleteTodo',id);
            },
            editTodo(){

                this.editing = true;


            },
            doneEdit(){
                this.editing = false;

                this.$store.dispatch('updateTodo',{
                    id:this.id,
                    title: this.title,
                    completed:this.completed,
                    editing:this.editing
                });


            },
            cancelEdit(){


                this.editing = false;

            },
            pluralize(){


                this.title = this.title + "s";

                this.$store.dispatch('updateTodo',{
                    id:this.id,
                    title: this.title,
                    completed:this.completed,
                    editing:this.editing
                });

            },

        }
    }
</script>

<style >

</style>