<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Vue.JS SPA example</div>

                    <div class="card-body">
                        <h2>{{ welcome }}</h2>
                        <img src="https://scontent.fjsr2-1.fna.fbcdn.net/v/t1.0-9/10646959_843716135652118_8982341826081007655_n.png?_nc_cat=110&_nc_sid=85a577&_nc_ohc=6tnOKse385gAX9iUcdM&_nc_ht=scontent.fjsr2-1.fna&oh=93e0952dda638b55e719b8a4daca9bdf&oe=5E951491" alt="WeCode">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        computed: {
            welcome() {
                return this.$store.getters.welcome
            }
        }
    }
</script>
