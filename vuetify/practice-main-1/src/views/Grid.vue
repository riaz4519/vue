<template>

    <v-container fluid grid-list-md  text-xs-center>

        <!--grid system-->

        <v-layout row wrap >

            <v-flex  xs12>

                <h2>Grid system</h2>

            </v-flex>

            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-text class="px-0">12</v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-for="i in 2" :key="`6${i}`" xs6>
                <v-card dark color="secondary">
                    <v-card-text class="px-0">6</v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                <v-card dark color="primary">
                    <v-card-text class="px-0">4</v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-for="i in 4" :key="`3${i}`" xs3>
                <v-card dark color="secondary">
                    <v-card-text class="px-0">3</v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-for="i in 6" :key="`2${i}`" xs2>
                <v-card dark color="primary">
                    <v-card-text class="px-0">2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex v-for="i in 12" :key="`1${i}`" xs1>
                <v-card dark color="secondary">
                    <v-card-text class="px-0">1</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <!--end grid system-->

        <!--grid ordering-->


        <v-layout row wrap justify-center my-4>
            <h2>Grid Ordering</h2>
        </v-layout>

        <v-layout row>
            <v-flex xs6 order-lg2>
                <v-card dark tile flat color="error">
                    <v-card-text>#1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card dark tile flat color="red darken-4">
                    <v-card-text>#2</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4 order-md2 order-xs1>
                <v-card dark tile flat color="red lighten-1">
                    <v-card-text>#1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4 order-md3 order-xs2>
                <v-card dark tile flat color="red lighten-2">
                    <v-card-text>#2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4 order-md1 order-xs3>
                <v-card dark tile flat color="red darken-1">
                    <v-card-text>#3</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6 md3 order-md4 order-sm2>
                <v-card dark tile flat color="red darken-2">
                    <v-card-text>#1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 order-md3 order-sm1>
                <v-card dark tile flat color="deep-orange lighten-1">
                    <v-card-text>#2</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 order-md2 order-sm4>
                <v-card dark tile flat color="deep-orange darken-3">
                    <v-card-text>#3</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 order-md1 order-sm3>
                <v-card dark tile flat color="deep-orange">
                    <v-card-text>#4</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <!--end of grid ordering-->


        <!--grid offset-->

        <v-layout row wrap>
            <v-flex xs12 justify-center my-4>
                <h2>Grid OffsetOffset</h2>
            </v-flex>
            <v-flex xs10 offset-xs1>
                <v-card dark color="purple">
                    <v-card-text>xs10 offset-xs1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
                <v-card dark color="secondary">
                    <v-card-text>xs7 offset-(xs5 | md2 | lg5)</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm5 md3>
                <v-card dark color="primary">
                    <v-card-text>(xs12 | sm5 | md3)</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
                <v-card dark color="green">
                    <v-card-text>(xs12 | sm5 | md5) offset-(xs0 | lg2)</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <!--end grid offset-->


        <!--Direction and Align-->
        <v-layout row wrap justify-center my-4>
            <h2>Direction and Align</h2>
        </v-layout>
        <v-layout row justify-space-between>


            <v-flex xs2>
                <v-card dark color="primary">
                    <v-card-text>one</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs2>
                <v-card dark color="secondary">
                    <v-card-text>two</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs2>
                <v-card dark color="accent">
                    <v-card-text>three</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row justify-space-around>
            <v-flex xs2>
                <v-card dark color="primary">
                    <v-card-text>one</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs2>
                <v-card dark color="secondary">
                    <v-card-text>two</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs2>
                <v-card dark color="accent">
                    <v-card-text>three</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs2>
                <v-card dark color="primary">
                    <v-card-text>one</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs2>
                <v-card dark color="secondary">
                    <v-card-text>two</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs2>
                <v-card dark color="accent">
                    <v-card-text>three</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <!--end Direction and Align-->

        <!--Row and column breakpoints-->
        <v-layout my-4>

            <v-flex xs12>
                <h2>Row and column breakpoints</h2>

            </v-flex>

        </v-layout>

        <v-layout  v-bind="binding">
            <v-flex>
                <v-card dark color="primary">
                    <v-card-text>one</v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card dark color="secondary">
                    <v-card-text>two</v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card dark color="accent">
                    <v-card-text>three</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <!--end Row and column breakpoints-->


        <!--shirnk -->
        <v-layout row>
            <v-flex grow pa-1>
                <v-card dark color="green darken-3">
                    <v-card-text>#1 Im a Grow Flex</v-card-text>
                </v-card>
            </v-flex>
            <v-flex  shrink pa-1>
                <v-card  dark color="green darken-1">
                    <v-card-text>#2 Im a Shrink Flex</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex grow pa-1>
                <v-card dark color="green darken-3">
                    <v-card-text>#1 Im a Grow Flex</v-card-text>
                </v-card>
            </v-flex>
            <v-flex shrink pa-1>
                <v-card dark color="green darken-3">
                    <v-card-text>#2 Im a Shrink Flex</v-card-text>
                </v-card>
            </v-flex>
            <v-flex  grow pa-1>
                <v-card  dark color="green darken-1">
                    <v-card-text>#3 Im a Grow Flex</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>


        <!--nested grid-->

        <v-layout row wrap class="text-xs-justify">
            <v-flex xs12 my-4>

                <h2 class="text-xs-center"> Nested Grid</h2>

            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
                <v-card color="purple" dark>
                    <v-card-title primary class="title">Lorem</v-card-title>
                    <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <v-card color="indigo" dark>
                            <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex>
                        <v-layout row wrap>
                            <v-flex
                                    v-for="n in 2"
                                    :key="n"
                                    d-flex
                                    xs12
                            >
                                <v-card
                                        color="red lighten-2"
                                        dark
                                >
                                    <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
                <v-card color="green lighten-2" dark>
                    <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <v-card color="blue lighten-2" dark>
                    <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <!--end of nested grid-->



    </v-container>

</template>

<script>

    export  default{

        computed:{

            binding:function () {

                const binding = {};

                if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;

                return binding;
            }

        }

        data(){
            return {
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
            }
        }


    }

</script>
