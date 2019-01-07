/**
 * Created by User on 1/7/2019.
 */

export  default {


    computed:{
        filteredBlog:function () {

            return this.blogs.filter((blog) =>{

                return blog.title.match(this.search);
            });
        }
    }

}
