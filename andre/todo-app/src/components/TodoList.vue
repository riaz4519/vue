<template>
    <div id="todo-list">

        <input v-model="newTodo" type="text" class="todo-input" placeholder="what need to be done" @keyup.enter="addTodo">
        <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <todo-item v-for="(todo,index) in todosFiltered" :key="todo.id" class="todo-item" :todo="todo" :index="index"  :checkAll="!anyRemaining">



        </todo-item>
        </transition-group>

        <div class="extra-container">

            <todo-check-all ></todo-check-all>
            <todo-items-remaining ></todo-items-remaining>

        </div>


        <div class="extra-container">

            <todo-filter></todo-filter>

            <div>
                <transition name="fade">
                    <todo-clear-completed></todo-clear-completed>
                </transition>
            </div>

        </div>



    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    import TodoItemsRemaining from "./TodoItemsRemaining";
    import TodoCheckAll from "./TodoCheckAll";
    import TodoFilter from "./TodoFilter";
    import TodoClearCompleted from "./TodoClearCompleted";
    export default {
        name: "TodoList",
        components: {TodoClearCompleted, TodoFilter, TodoCheckAll, TodoItemsRemaining, TodoItem},
        data(){

            return {

                newTodo:'',
                idForTodo:3,
            }
        },

        computed:{

            anyRemaining(){

                return this.$store.getters.anyRemaining
            },
            todosFiltered(){


                return this.$store.getters.todosFiltered;
            },

        },
        methods:{
            addTodo(){
                
                if (this.newTodo.trim().length == 0){
                    return
                }

                this.$store.dispatch('addTodo',{
                    id:this.idForTodo,
                    title:this.newTodo,
                    completed:false,
                    editing:false
                });


                this.newTodo = '';
                this.idForTodo++;

            },

        },
        created() {
            this.$store.dispatch('retriveTodos');
        }

    }
</script>

<style lang="scss">
    @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
.todo-input{
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 15px;

    &:focus{
        outline: 0;
    }
}
.todo-item{
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: .3s;
}
.remove-item{
    cursor: pointer;
    margin-left: 14px;
    &:hover{
        color: black;
    }
}

    .todo-item-left{
        padding: 10px;
        border: 1px solid white;
        margin-left: 12px;
        display: flex;
        justify-content: space-around;
    }
    .todo-item-edit{
        font-size: 24px;
        color: #2c3e50;
        margin-left: 12px;
        width: 100%;
        padding: 10px;
        border: 1px solid#ccc;
        font-family: 'Avenir',Helvetica,Arial,sans-serif;
        &:focus{
            outline: none;
        }
    }
    .completed{
        text-decoration: line-through;
        color: grey;
    }
.extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
}
button {
    font-size: 14px;
    background-color: white;
    appearance: none;
    padding: 4px;
    &:hover {
        background: lightgreen;
    }
    &:focus {
        outline: none;
    }
}

.active {
    background: lightgreen;
}
// CSS Transitions
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>