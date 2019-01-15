/**
 * Created by User on 1/15/2019.
 */

export default {

    computed: {
        products: function () {

            return this.$store.state.products;

        }
    }
}