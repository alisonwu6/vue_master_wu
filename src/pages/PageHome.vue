<template>
    <div class="col-full">
        <h1>Welcome to the Forum</h1>
        <CategoryList :categories="categories" />
    </div>
</template>

<script>
    import CategoryList from '@/components/CategoryList'
    export default {
        name: 'PageHome',
        components: {
            CategoryList
        },
        computed: {
            categories() {
                return Object.values(this.$store.state.categories);
            }
        },
        beforeCreate () {
            console.log('# beforeCreate', this.categories)
        },
        created () {
            console.log('# created', this.categories)
        },
        beforeMount () {
            console.log('# beforeMount', this.categories,  this.$el) 
        },
        mounted () {
            console.log('# mounted', this.categories, this.$el)  // dom appears
        },
        beforeDestroy () {
            console.log('# beforeDestroy -- turn off listeners', this.categories); 
        }
    }
</script>