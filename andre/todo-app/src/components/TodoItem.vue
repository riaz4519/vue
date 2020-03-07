<template>
    <div class="todo-item">

        <div class="todo-item-left">
            <input type="checkbox" v-model="completed">
            <div class="todo-item-label" :class="{ completed : completed }" v-if="!editing" @dblclick="editTodo">{{ title}}</div>
            <input v-else class="todo-item-edit" type="text" v-model.lazy="title" @blur="doneEdit" @keyup.enter="doneEdit"  @keyup.esc="cancelEdit" v-focus>

        </div>
        <div class="remove-item" @click="removeTodo(index)">

            &times;

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
        methods:{

            removeTodo(index){

                this.$emit('removedTodo',index);

            },
            editTodo(){

                this.editing = true;


            },
            doneEdit(){
                this.editing = false;
            },
            cancelEdit(){


                this.editing = false;

            },
        }
    }
</script>

<style scoped>

</style>